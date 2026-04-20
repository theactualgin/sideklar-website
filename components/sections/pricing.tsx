"use client";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    eyebrow: "Kom i gang", name: "Enkel", featured: false,
    features: [
      { text: "Eget domene inkludert", included: true },
      { text: "Bedrifts-e-post inkludert", included: true },
      { text: "Mobiloptimalisert", included: true },
      { text: "Kontaktskjema", included: true },
      { text: "SSL-sikkerhet inkludert", included: true },
      { text: "Hosting inkludert", included: true },
      { text: "SEO-oppsett inkludert", included: true },
      { text: "Google Analytics", included: false },
      { text: "Google Maps-integrasjon", included: false },
      { text: "Google Business-oppsett", included: false },
      { text: "Nettbutikk eller booking", included: false },
      { text: "Teknisk support", included: false },
    ],
  },
  {
    eyebrow: "Anbefalt", name: "Profesjonell", featured: true,
    features: [
      { text: "Eget domene inkludert", included: true },
      { text: "Bedrifts-e-post inkludert", included: true },
      { text: "Mobiloptimalisert", included: true },
      { text: "Kontaktskjema", included: true },
      { text: "SSL-sikkerhet inkludert", included: true },
      { text: "Hosting inkludert", included: true },
      { text: "SEO-oppsett inkludert", included: true },
      { text: "Google Analytics", included: true },
      { text: "Google Maps-integrasjon", included: true },
      { text: "Google Business-oppsett", included: false },
      { text: "Nettbutikk eller booking", included: false },
      { text: "Teknisk support", included: true },
    ],
  },
  {
    eyebrow: "For vekst", name: "Premium", featured: false,
    features: [
      { text: "Eget domene inkludert", included: true },
      { text: "Bedrifts-e-post inkludert", included: true },
      { text: "Mobiloptimalisert", included: true },
      { text: "Kontaktskjema", included: true },
      { text: "SSL-sikkerhet inkludert", included: true },
      { text: "Hosting inkludert", included: true },
      { text: "SEO-oppsett inkludert", included: true },
      { text: "Google Analytics", included: true },
      { text: "Google Maps-integrasjon", included: true },
      { text: "Google Business-oppsett", included: true },
      { text: "Nettbutikk eller booking", included: true },
      { text: "Teknisk support", included: true },
    ],
  },
];

export function Pricing() {
  const openWidget = () => {
    if (typeof window !== "undefined" && (window as any).openWidget) {
      (window as any).openWidget();
    }
  };

  return (
    <section id="priser" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] mb-3">Priser</div>
          <h2 className="text-4xl font-bold text-[#0F0F0F]">Enkle priser, ingen overraskelser</h2>
          <p className="mt-4 text-[#6B7280]">Velg pakken som passer din bedrift. Ingen skjulte kostnader.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: plan.featured ? 1.03 : 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              whileHover={
                plan.featured
                  ? { scale: 1.06, transition: { duration: 0.2 } }
                  : { scale: 1.03, rotate: i === 0 ? -1.5 : 1.5, transition: { duration: 0.2 } }
              }
              className={`rounded-2xl p-8 flex flex-col cursor-default ${plan.featured ? "bg-[#3ADBA1] text-white shadow-xl ring-2 ring-[#3ADBA1]" : "bg-[#FAFAFA] border border-gray-100 shadow-sm"}`}
            >
              {plan.featured && (
                <div className="text-xs font-bold uppercase tracking-widest bg-white/20 text-white rounded-full px-3 py-1 w-fit mb-4">
                  Mest populær
                </div>
              )}
              <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${plan.featured ? "text-white/70" : "text-[#3ADBA1]"}`}>
                {plan.eyebrow}
              </div>
              <h3 className={`text-2xl font-bold mb-6 ${plan.featured ? "text-white" : "text-[#0F0F0F]"}`}>{plan.name}</h3>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, fi) => (
                  <motion.li
                    key={f.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: f.included ? 1 : 0.4, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.18 + fi * 0.04 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    {f.included
                      ? <Check size={16} className={plan.featured ? "text-white shrink-0" : "text-[#3ADBA1] shrink-0"} />
                      : <X size={16} className="shrink-0" />}
                    <span className={plan.featured ? "text-white" : "text-[#0F0F0F]"}>{f.text}</span>
                  </motion.li>
                ))}
              </ul>
              <button
                onClick={openWidget}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.featured ? "bg-white text-[#3ADBA1] hover:bg-gray-100" : "bg-[#3ADBA1] text-white hover:bg-[#2BC48A]"}`}
              >
                Kom i gang
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
