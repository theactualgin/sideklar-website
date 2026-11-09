"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { SiteButton } from "@/components/ui/site-button";
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

  const sections = [
    { heading: "Utgangspunktet", body: project.challenge },
    { heading: "Konseptet", body: project.solution },
    { heading: "Om konseptet", body: project.result },
  ];

  return (
    <>
      <Nav />
      <main>
        <article className="bg-white px-6 pb-24 pt-14 md:pb-32 md:pt-20">
          <div className="mx-auto max-w-6xl">
            <a
              href="/prosjekter"
              className="text-sm font-medium text-[#0A2349]/60 underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors hover:text-[#0A2349] hover:decoration-[#3ADBA1]"
            >
              ← Alle prosjekter
            </a>

            <p className="mt-10 text-sm text-[#0A2349]/55">
              {project.category} · {project.year}
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-[1.02] tracking-tight text-[#0A2349] md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#0A2349]/70">{project.description}</p>

            <div className="mt-12 overflow-hidden rounded-xl border border-[#0A2349]/10 bg-[#F3F4F6]">
              <img
                src={project.image}
                alt={`${project.title} (konseptdesign)`}
                className="block h-auto w-full"
              />
            </div>

            <div className="mt-16 grid gap-12 md:grid-cols-[1.6fr_1fr] md:gap-20">
              <div>
                {sections.map((s) => (
                  <div key={s.heading} className="grid gap-3 border-t border-[#0A2349]/10 py-8 md:grid-cols-[10rem_1fr] md:gap-8">
                    <h2 className="text-sm font-medium text-[#0A2349]/55">{s.heading}</h2>
                    <p className="text-base leading-relaxed text-[#0A2349]/75">{s.body}</p>
                  </div>
                ))}
              </div>

              <aside className="md:sticky md:top-10 md:self-start">
                <div className="border-t border-[#0A2349] pt-6">
                  <dl className="space-y-5 text-sm">
                    <div>
                      <dt className="text-[#0A2349]/55">År</dt>
                      <dd className="mt-1 font-semibold text-[#0A2349]">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="text-[#0A2349]/55">Type</dt>
                      <dd className="mt-1 font-semibold text-[#0A2349]">{project.category}</dd>
                    </div>
                    <div>
                      <dt className="text-[#0A2349]/55">Tjenester</dt>
                      <dd className="mt-1 font-semibold text-[#0A2349]">{project.services.join(", ")}</dd>
                    </div>
                  </dl>

                  <div className="mt-8 border-t border-[#0A2349]/10 pt-6">
                    <p className="text-lg font-semibold tracking-tight text-[#0A2349]">Vil du ha noe lignende?</p>
                    <p className="mt-1 text-sm text-[#0A2349]/65">Ta kontakt for en uforpliktende prat.</p>
                    <SiteButton onClick={openChat} arrow className="mt-5">
                      Kom i gang
                    </SiteButton>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
