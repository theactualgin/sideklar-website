"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#3ADBA1]/15 mb-4"
          >
            <HelpCircle size={22} className="text-[#3ADBA1]" />
          </motion.div>
          <div className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] mb-3">Spørsmål og svar</div>
          <h2 className="text-4xl font-bold text-[#0F0F0F]">Lurer du på noe?</h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`bg-white rounded-xl border overflow-hidden transition-colors duration-200 ${isOpen ? "border-[#3ADBA1]/50 shadow-sm" : "border-gray-100"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[#0F0F0F] pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-[#3ADBA1]"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-[#6B7280] leading-relaxed text-sm">
                        {faq.a}
                        {faq.link && (
                          <a
                            href={faq.link.href}
                            className="mt-3 inline-block font-semibold text-[#3ADBA1] hover:text-[#2BC48A] transition-colors"
                          >
                            {faq.link.label}
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
