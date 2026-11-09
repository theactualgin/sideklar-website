"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const faqs = [
  {
    q: "Hva er egentlig en retainer?",
    a: "En retainer betyr at du betaler for tilgjengelighet og kapasitet — ikke for enkeltoppdrag. Vi er din faste ressurs for nettsiden, med avtalt responstid og omfang hver måned. Du slipper å starte fra scratch hver gang noe må gjøres.",
  },
  {
    q: "Hvordan fungerer kommunikasjonen?",
    a: "Vi jobber asynkront: du sender inn oppgaver og spørsmål via e-post eller melding, og vi svarer og leverer innen avtalt tid. Ingen faste statusmøter — bare faktisk fremdrift.",
  },
  {
    q: "Står pakkene egentlig på timer?",
    a: "Nei. Vi selger ikke stoppeklokke-timer. Pakkene er basert på et typisk månedlig omfang, men vi styrer ikke arbeidet etter klokken. Målet er at oppgavene blir løst riktig — ikke at timene går.",
  },
  {
    q: "Er det binding?",
    a: "Nei. Alle pakkene har 30 dagers gjensidig oppsigelse. Ingen flerårkontrakt, ingen gebyr for å avslutte.",
  },
  {
    q: "Kan dere ta over en nettside vi allerede har?",
    a: "Ja. Vi kan ta over vedlikehold og drift av eksisterende nettsider — uavhengig av hvem som bygde den. Vi starter gjerne med en gratis helsesjekk så vi vet hva vi jobber med.",
  },
  {
    q: "Inkluderer det nye sider eller redesign?",
    a: "Mindre endringer og nye undersider er innenfor retaineren. Større redesign eller nye prosjekter håndteres som separate oppdrag med egen prissetting.",
  },
  {
    q: "Hva innebærer gratis helsesjekk?",
    a: "Vi går gjennom nettsiden din og ser etter konkrete forbedringspunkter: tekniske feil, SEO-mangler, mobilproblemer og flaskehalser i brukeropplevelsen. Du får et kort, ærlig sammendrag med anbefalt neste steg — helt uten forpliktelse.",
  },
  {
    q: "Trenger dere tilgang til nettsiden vår?",
    a: "Ja, for å gjøre endringer trenger vi tilgang til CMS eller kodebasen. Vi behandler alt konfidensielt og ber kun om det tilgangsnivået vi faktisk trenger.",
  },
];

export function RetainerFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 pb-24 md:pb-32">
      <div className="mx-auto grid max-w-6xl gap-12 border-t border-[#0A2349]/10 pt-20 md:grid-cols-[1fr_1.6fr] md:gap-20 md:pt-28">
        <div className="md:sticky md:top-12 md:self-start">
          <p className="mb-4 text-sm font-medium text-[#0A2349]/55">Spørsmål og svar</p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#0A2349] md:text-6xl">Vanlige spørsmål</h2>
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
                      <p className="max-w-xl pb-6 text-[15px] leading-relaxed text-[#0A2349]/70">{faq.a}</p>
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
