"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { getArticleBySlug } from "@/lib/articles";
import { Clock, ArrowLeft } from "lucide-react";

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  function openChat() {
    if (typeof window !== "undefined" && (window as any).openChatWidget) {
      (window as any).openChatWidget();
    }
  }

  const paragraphs = article.content.trim().split("\n").filter((l) => l.trim() !== "");

  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 max-w-3xl mx-auto">
            <span className="bg-white/90 backdrop-blur-sm text-[#0F0F0F] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 px-6 bg-[#FAFAFA]">
          <div className="max-w-3xl mx-auto">
            <a
              href="/artikler"
              className="inline-flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#3ADBA1] transition-colors mb-8"
            >
              <ArrowLeft size={15} />
              Alle artikler
            </a>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-[#6B7280]">{article.date}</span>
              <span className="flex items-center gap-1 text-sm text-[#6B7280]">
                <Clock size={13} />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#0F0F0F] mb-8 leading-snug">
              {article.title}
            </h1>

            <div className="space-y-4 text-[#374151] leading-relaxed">
              {paragraphs.map((line, i) => {
                if (line.startsWith("### ")) {
                  return <h3 key={i} className="text-lg font-bold text-[#0F0F0F] mt-8 mb-2">{line.replace("### ", "")}</h3>;
                }
                if (line.startsWith("## ")) {
                  return <h2 key={i} className="text-2xl font-bold text-[#0F0F0F] mt-10 mb-3">{line.replace("## ", "")}</h2>;
                }
                if (line === "---") {
                  return <hr key={i} className="border-gray-200 my-8" />;
                }
                if (line.startsWith("- ")) {
                  return <li key={i} className="ml-4 text-[#6B7280] list-disc">{line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>;
                }
                if (line.startsWith("| ")) {
                  return null;
                }
                return (
                  <p
                    key={i}
                    className="text-[#6B7280]"
                    dangerouslySetInnerHTML={{
                      __html: line.replace(/\*\*(.*?)\*\*/g, "<strong class=\"font-semibold text-[#0F0F0F]\">$1</strong>"),
                    }}
                  />
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-16 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] mb-3">Klar til å komme i gang?</p>
              <h3 className="text-2xl font-bold text-[#0F0F0F] mb-3">La oss hjelpe deg</h3>
              <p className="text-[#6B7280] text-sm mb-6 max-w-sm mx-auto leading-relaxed">
                Vi leverer profesjonelle nettsider på 3 dager. Ta kontakt for en uforpliktende prat.
              </p>
              <button
                onClick={openChat}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-[#3ADBA1] text-[#0F0F0F] font-semibold text-sm hover:bg-[#2BC48A] transition-colors"
              >
                Ta kontakt →
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
