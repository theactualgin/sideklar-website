"use client";

import { useState } from "react";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";
import { SiteButton } from "@/components/ui/site-button";

export function ProsjekterGrid() {
  const categories = ["Alle", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [activeFilter, setActiveFilter] = useState("Alle");

  const filtered = activeFilter === "Alle" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          as="h1"
          label="Portefølje"
          title="Utvalgte konsepter."
          intro="Konsepter som viser hva vi kan lage for din bedrift: nettsider, logoer og grafisk profil."
        />

        {categories.length > 2 && (
          <div className="mb-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-[#0A2349]/10 pb-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
                className={`text-sm font-medium underline decoration-2 underline-offset-[10px] transition-colors ${
                  activeFilter === cat
                    ? "text-[#0A2349] decoration-[#3ADBA1]"
                    : "text-[#0A2349]/55 decoration-transparent hover:text-[#0A2349]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <a href={`/prosjekter/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-xl border border-[#0A2349]/10 bg-[#F3F4F6]">
                  <img
                    src={project.image}
                    alt={`${project.title} (konseptdesign)`}
                    className="block aspect-[16/10] w-full object-cover object-top"
                  />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <h2 className="text-xl font-semibold tracking-tight text-[#0A2349] underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-[#3ADBA1]">
                    {project.title}
                  </h2>
                  <span className="shrink-0 text-sm text-[#0A2349]/55">
                    {project.category} · {project.year}
                  </span>
                </div>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[#0A2349]/65">{project.description}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 flex flex-col items-start gap-5 border-t border-[#0A2349]/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg font-medium text-[#0A2349]">Vil du at bedriften din skal være her?</p>
            <SiteButton href="/tjenester" arrow>
              Se hva vi tilbyr
            </SiteButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
