"use client";
import { Reveal } from "@/components/ui/reveal";
import { SiteButton } from "@/components/ui/site-button";

export function CTA() {
  function openChat() {
    if (typeof window !== "undefined" && (window as any).openChatWidget) {
      (window as any).openChatWidget();
    }
  }

  return (
    <section className="bg-white px-6 pb-24 md:pb-32">
      <Reveal>
        <div className="mx-auto grid max-w-6xl gap-10 border-t border-[#0A2349] pt-16 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-20 md:pt-24">
          <h2 className="text-5xl font-bold leading-[1.02] tracking-tight text-[#0A2349] md:text-7xl">
            Klar for å komme i gang?
          </h2>
          <div>
            <p className="mb-7 max-w-sm text-base leading-relaxed text-[#0A2349]/70 md:text-lg">
              Fortell oss om bedriften din, så har vi nettsiden klar på 1–3 dager.
            </p>
            <SiteButton size="lg" arrow onClick={openChat}>
              Ta kontakt
            </SiteButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
