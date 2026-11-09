"use client";

import { useState } from "react";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { SiteButton } from "@/components/ui/site-button";
import { articles } from "@/lib/articles";

const PAGE_SIZE = 6;

export default function ArtiklerPage() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = articles.slice(0, visible);
  const hasMore = visible < articles.length;

  return (
    <>
      <Nav />
      <main>
        <PageIntro>
          <section className="bg-white px-6 py-20 md:py-28">
            <div className="mx-auto max-w-6xl">
              <SectionHead
                as="h1"
                label="Blogg"
                title="Les og lær."
                intro="Tips, innsikt og råd for bedrifter som vil ta nettet på alvor."
              />

              <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
                {shown.map((article, i) => (
                  <Reveal key={article.id} delay={(i % 3) * 0.06}>
                    <a href={`/artikler/${article.slug}`} className="group block">
                      <div className="overflow-hidden rounded-xl border border-[#0A2349]/10 bg-[#F3F4F6]">
                        <img
                          src={article.image}
                          alt=""
                          className="block aspect-[4/3] w-full object-cover"
                        />
                      </div>
                      <p className="mt-4 text-sm text-[#0A2349]/55">
                        {article.category} · {article.readTime}
                      </p>
                      <h2 className="mt-2 text-xl font-semibold leading-snug tracking-tight text-[#0A2349] underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-[#3ADBA1]">
                        {article.title}
                      </h2>
                      <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-[#0A2349]/65">
                        {article.description}
                      </p>
                      <p className="mt-3 text-sm text-[#0A2349]/50">{article.date}</p>
                    </a>
                  </Reveal>
                ))}
              </div>

              {hasMore && (
                <div className="mt-16 border-t border-[#0A2349]/10 pt-10">
                  <SiteButton variant="outline" size="lg" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                    Last inn flere
                  </SiteButton>
                </div>
              )}
            </div>
          </section>
        </PageIntro>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
