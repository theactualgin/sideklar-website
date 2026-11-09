"use client";

import { useRef } from "react";
import { articles } from "@/lib/articles";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead, TextLink } from "@/components/ui/section-head";

export function ArticlesSlider() {
  const rowRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: 1 | -1) {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: direction * row.clientWidth * 0.8, behavior: "smooth" });
  }

  const arrowButton =
    "flex size-11 items-center justify-center rounded-full border border-[#0A2349]/20 text-[#0A2349] transition-colors hover:border-[#0A2349] hover:bg-[#0A2349] hover:text-white";

  return (
    <section className="overflow-hidden bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl border-t border-[#0A2349]/10 pt-24 md:pt-32">
        <SectionHead
          label="Blogg"
          title="Les og lær."
          action={
            <div className="flex items-center gap-6">
              <TextLink href="/artikler">Les alle artikler</TextLink>
              <div className="hidden gap-2 md:flex">
                <button onClick={() => scrollBy(-1)} className={arrowButton} aria-label="Forrige artikler">
                  ←
                </button>
                <button onClick={() => scrollBy(1)} className={arrowButton} aria-label="Neste artikler">
                  →
                </button>
              </div>
            </div>
          }
        />

        <Reveal>
          <div
            ref={rowRef}
            className="scrollbar-none -mx-6 flex snap-x snap-mandatory gap-8 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0"
          >
            {articles.map((article) => (
              <a
                key={article.id}
                href={`/artikler/${article.slug}`}
                className="group w-[280px] shrink-0 snap-start sm:w-[320px]"
              >
                <div className="overflow-hidden rounded-xl border border-[#0A2349]/10 bg-[#F3F4F6]">
                  <img
                    src={article.image}
                    alt=""
                    className="block aspect-[4/3] w-full object-cover"
                    draggable={false}
                  />
                </div>
                <p className="mt-4 text-sm text-[#0A2349]/55">
                  {article.category} · {article.readTime}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-[#0A2349] underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-[#3ADBA1]">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-[#0A2349]/50">{article.date}</p>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
