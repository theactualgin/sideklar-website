"use client";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { SiteButton } from "@/components/ui/site-button";
import { RetainerModal } from "@/components/ui/retainer-modal";

export function RetainerCta() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white px-6 pb-24 md:pb-32">
      <Reveal>
        <div className="mx-auto grid max-w-6xl gap-10 border-t border-[#0A2349] pt-16 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-20 md:pt-24">
          <h2 className="text-5xl font-bold leading-[1.02] tracking-tight text-[#0A2349] md:text-7xl">
            Start med gratis helsesjekk
          </h2>
          <div>
            <p className="mb-7 max-w-sm text-base leading-relaxed text-[#0A2349]/70 md:text-lg">
              Vi finner raskt hva som bremser siden i dag, og gir konkrete anbefalinger for neste steg.
            </p>
            <SiteButton size="lg" arrow onClick={() => setOpen(true)}>
              Få gratis helsesjekk
            </SiteButton>
          </div>
        </div>
      </Reveal>
      <RetainerModal open={open} defaultTab="helsesjekk" onClose={() => setOpen(false)} />
    </section>
  );
}
