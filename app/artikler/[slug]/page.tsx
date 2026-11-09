"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { SiteButton } from "@/components/ui/site-button";
import { getArticleBySlug } from "@/lib/articles";

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
        <article className="bg-white px-6 pb-24 pt-14 md:pb-32 md:pt-20">
          <div className="mx-auto max-w-3xl">
            <a
              href="/artikler"
              className="text-sm font-medium text-[#0A2349]/60 underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors hover:text-[#0A2349] hover:decoration-[#3ADBA1]"
            >
              ← Alle artikler
            </a>

            <p className="mt-10 text-sm text-[#0A2349]/55">
              {article.category} · {article.date} · {article.readTime}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-[#0A2349] md:text-6xl">
              {article.title}
            </h1>

            <div className="mt-10 overflow-hidden rounded-xl border border-[#0A2349]/10 bg-[#F3F4F6]">
              <img src={article.image} alt="" className="block aspect-[16/9] w-full object-cover" />
            </div>

            <div className="mt-12 space-y-5 text-[17px] leading-[1.75] text-[#0A2349]/75">
              {paragraphs.map((line, i) => {
                if (line.startsWith("### ")) {
                  return (
                    <h3 key={i} className="mt-10 text-xl font-semibold tracking-tight text-[#0A2349]">
                      {line.replace("### ", "")}
                    </h3>
                  );
                }
                if (line.startsWith("## ")) {
                  return (
                    <h2 key={i} className="mt-14 text-3xl font-bold tracking-tight text-[#0A2349]">
                      {line.replace("## ", "")}
                    </h2>
                  );
                }
                if (line === "---") {
                  return <hr key={i} className="my-10 border-[#0A2349]/10" />;
                }
                if (line.startsWith("- ")) {
                  return (
                    <li key={i} className="ml-5 list-disc">
                      {line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}
                    </li>
                  );
                }
                if (line.startsWith("| ")) {
                  return null;
                }
                return (
                  <p
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: line.replace(
                        /\*\*(.*?)\*\*/g,
                        '<strong class="font-semibold text-[#0A2349]">$1</strong>'
                      ),
                    }}
                  />
                );
              })}
            </div>

            <div className="mt-20 border-t border-[#0A2349] pt-10">
              <p className="text-sm font-medium text-[#0A2349]/55">Klar til å komme i gang?</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#0A2349]">La oss hjelpe deg</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-[#0A2349]/70">
                Vi leverer profesjonelle nettsider på 3 dager. Ta kontakt for en uforpliktende prat.
              </p>
              <SiteButton onClick={openChat} size="lg" arrow className="mt-7">
                Ta kontakt
              </SiteButton>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
