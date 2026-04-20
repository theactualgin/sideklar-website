"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
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
          <h2 className="text-4xl font-bold text-[#0F0F0F]">Vanlige spørsmål</h2>
        </motion.div>

        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as any } } }}
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
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
