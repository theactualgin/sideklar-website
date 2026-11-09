"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const faqs: { q: string; a: string; link?: { label: string; href: string } }[] = [
  { q: "Hva slags tjenester tilbyr dere?", a: "Vi tilbyr alt fra grafisk design og visuell identitet til webutvikling, app-utvikling og SEO. Med kombinasjonen av designkompetanse og full-stack utviklingsferdigheter kan vi hjelpe deg med stort sett hva som helst digitalt." },
  { q: "Hvordan fungerer prosessen?", a: "Vi starter med en uforpliktende prat der vi kartlegger dine behov og mål. Deretter lager vi et forslag med omfang og pris. Etter godkjenning designer og utvikler vi løsningen med jevnlig dialog underveis, og dere godkjenner sluttresultatet før lansering." },
  { q: "Hva koster det?", a: "Prisen avhenger av prosjektets omfang og kompleksitet. En enkel nettside starter fra rundt 5000 kr, mens mer komplekse løsninger med skreddersydd funksjonalitet naturligvis koster mer. Vi gir alltid en tydelig pris før vi starter. Prøv priskalkulatoren vår for et raskt estimat.", link: { label: "Prøv priskalkulatoren →", href: "/priskalkulator" } },
  { q: "Hvor lang tid tar et prosjekt?", a: "En enkel nettside kan være klar på 1 uke. Større prosjekter med skreddersydd funksjonalitet tar gjerne noen flere uker. Tidslinje avtales alltid på forhånd." },
  { q: "Hvilke teknologier bruker dere?", a: "Vi bruker moderne teknologi som gir lynraske, sikre og skalerbare løsninger. Dette inkluderer rammeverk som Astro, Next.js og React, hostet på edge-infrastruktur for best mulig ytelse globalt." },
  { q: "Kan jeg oppdatere innholdet selv?", a: "Absolutt! Vi kan sette opp løsninger med brukervennlige CMS-systemer der dere enkelt kan redigere tekst, bilder og annet innhold — uten å kunne noe om koding." },
  { q: "Tilbyr dere vedlikehold etter lansering?", a: "Ja, vi tilbyr vedlikeholdsavtaler der vi sørger for oppdateringer, sikkerhet og eventuell videreutvikling etter lansering. Du kan også kontakte oss for enkeltstående oppgaver." },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 border-t border-[#0A2349]/10 pt-24 md:grid-cols-[1fr_1.6fr] md:gap-20 md:pt-32">
        <div className="md:sticky md:top-12 md:self-start">
          <p className="mb-4 text-sm font-medium text-[#0A2349]/55">Spørsmål og svar</p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#0A2349] md:text-6xl">Lurer du på noe?</h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-[#0A2349]/65">
            Finner du ikke svaret her, er det bare å spørre. Vi svarer raskt.
          </p>
        </div>

        <Reveal>
          <div className="border-b border-[#0A2349]/10">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.q} className="border-t border-[#0A2349]/10">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-semibold tracking-tight text-[#0A2349]">{faq.q}</span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-2xl leading-none text-[#0A2349] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="max-w-xl pb-6 text-[15px] leading-relaxed text-[#0A2349]/70">
                        {faq.a}
                        {faq.link && (
                          <a
                            href={faq.link.href}
                            className="mt-3 block font-semibold text-[#0A2349] underline decoration-[#3ADBA1] decoration-2 underline-offset-[6px]"
                          >
                            {faq.link.label}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
