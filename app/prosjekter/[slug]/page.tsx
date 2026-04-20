"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { getProjectBySlug } from "@/lib/projects";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  function openChat() {
    if (typeof window !== "undefined" && (window as any).openChatWidget) {
      (window as any).openChatWidget();
    }
  }

  return (
    <>
      <Nav />
      <main>
        {/* Hero image */}
        <div className="relative h-72 md:h-[420px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 max-w-4xl mx-auto">
            <span className="bg-white/90 backdrop-blur-sm text-[#0F0F0F] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              {project.category}
            </span>
          </div>
        </div>

        <section className="py-16 px-6 bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto">
            <a
              href="/prosjekter"
              className="inline-flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#3ADBA1] transition-colors mb-10"
            >
              <ArrowLeft size={15} />
              Alle prosjekter
            </a>

            <div className="grid md:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold text-[#0F0F0F] mb-4">{project.title}</h1>
                <p className="text-[#6B7280] leading-relaxed mb-10">{project.description}</p>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[#3ADBA1] mb-3">Utfordringen</h2>
                    <p className="text-[#6B7280] leading-relaxed">{project.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[#3ADBA1] mb-3">Løsningen</h2>
                    <p className="text-[#6B7280] leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-[#3ADBA1] mb-3">Resultatet</h2>
                    <p className="text-[#6B7280] leading-relaxed">{project.result}</p>
                  </div>
                </div>

                {/* Second image */}
                {project.images[1] && (
                  <div className="mt-10 rounded-2xl overflow-hidden">
                    <img
                      src={project.images[1]}
                      alt={`${project.title} — detalj`}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-4">Prosjektinfo</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs text-[#6B7280]">År</span>
                      <p className="text-sm font-semibold text-[#0F0F0F]">{project.year}</p>
                    </div>
                    <div>
                      <span className="text-xs text-[#6B7280]">Kategori</span>
                      <p className="text-sm font-semibold text-[#0F0F0F]">{project.category}</p>
                    </div>
                    <div>
                      <span className="text-xs text-[#6B7280] block mb-2">Tjenester</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.services.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-semibold uppercase tracking-widest bg-[#3ADBA1]/10 text-[#3ADBA1] px-2 py-1 rounded-full"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center">
                  <p className="text-sm font-semibold text-[#0F0F0F] mb-1">Vil du ha noe lignende?</p>
                  <p className="text-xs text-[#6B7280] mb-4">Ta kontakt for en uforpliktende prat.</p>
                  <button
                    onClick={openChat}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#3ADBA1] text-[#0F0F0F] font-semibold text-sm hover:bg-[#2BC48A] transition-colors"
                  >
                    Kom i gang →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
