"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { RetainerModal } from "@/components/ui/retainer-modal";

const plans = [
  {
    size: "Liten",
    name: "Simpel",
    popular: false,
    annualPrice: "1 190",
    annualTotal: "14 280",
    monthlyPrice: "1 490",
    desc: "For bedrifter som vil at nettsiden bare skal virke — uten å tenke på det selv.",
    details: [
      { label: "Typisk omfang", value: "Ca. 1–2 t/mnd i snitt (veiledende)" },
      { label: "Respons", value: "Innen 48 timer" },
      { label: "SEO", value: "Kvartalsvis SEO-sjekk" },
      { label: "Binding", value: "30 dagers oppsigelse — ingen flerårkontrakt" },
    ],
    cta: "Velg Simpel",
  },
  {
    size: "Medium",
    name: "Vekst",
    popular: true,
    annualPrice: "2 999",
    annualTotal: "35 988",
    monthlyPrice: "3 499",
    desc: "For bedrifter som oppdaterer innhold jevnlig og trenger rask hjelp med design og layout.",
    details: [
      { label: "Typisk omfang", value: "Ca. 3–5 t/mnd i snitt (veiledende)" },
      { label: "Respons", value: "Innen 24 timer" },
      { label: "SEO", value: "Månedlig SEO-sjekk" },
      { label: "Binding", value: "30 dagers oppsigelse — ingen flerårkontrakt" },
    ],
    cta: "Velg Vekst",
  },
  {
    size: "Stor",
    name: "Full Drift",
    popular: false,
    annualPrice: "6 499",
    annualTotal: "77 988",
    monthlyPrice: "6 990",
    desc: "For bedrifter der nettsiden er hovedkanal — full kapasitet og prioritet når det haster.",
    details: [
      { label: "Typisk omfang", value: "Ca. 6–10 t/mnd i snitt (veiledende)" },
      { label: "Respons", value: "Prioritert — samme dag" },
      { label: "SEO", value: "Ukentlig SEO-optimalisering og overvåking" },
      { label: "Binding", value: "30 dagers oppsigelse — ingen flerårkontrakt" },
    ],
    cta: "Velg Full Drift",
  },
];

export function RetainerPricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Vekst");

  function openModal(planName: string) {
    setSelectedPlan(planName);
    setModalOpen(true);
  }

  return (
    <section className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] mb-3">Vedlikehold</div>
          <h1 className="text-4xl font-bold text-[#0F0F0F] mb-4">Retainer-pakker</h1>
          <p className="text-[#6B7280] max-w-2xl mx-auto leading-relaxed">
            Du kjøper tilgjengelighet og trygghet — ikke et stoppeklokke-prosjekt. Vi følger opp nettsiden din med avtalt responstid og kapasitet som matcher behovet.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: plan.popular ? 1.03 : 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              whileHover={
                plan.popular
                  ? { scale: 1.06, transition: { duration: 0.2 } }
                  : { scale: 1.03, rotate: i === 0 ? -1 : 1, transition: { duration: 0.2 } }
              }
              className="relative cursor-default"
            >
              {/* Most popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center z-10">
                  <span className="bg-[#3ADBA1] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md shadow-[#3ADBA1]/30">
                    Mest valgt
                  </span>
                </div>
              )}

              <div className={`rounded-2xl p-7 flex flex-col h-full transition-all duration-200 ${
                plan.popular
                  ? "bg-white ring-[3px] ring-[#3ADBA1] shadow-xl shadow-[#3ADBA1]/20"
                  : "bg-white border border-gray-200 shadow-sm hover:ring-2 hover:ring-[#3ADBA1] hover:border-transparent"
              }`}>
                {/* Plan name */}
                <div className="text-xs font-bold uppercase tracking-widest mb-1 text-[#6B7280]">
                  {plan.size}
                </div>
                <h3 className="text-2xl font-bold mb-5 text-[#0F0F0F]">
                  {plan.name}
                </h3>

                {/* Annual pricing box */}
                <div className="rounded-xl p-4 mb-3 bg-[#3ADBA1]/8 border border-[#3ADBA1]/40">
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1.5 text-[#3ADBA1]">
                    Årsbetaling (forskuddsvis)
                  </div>
                  <div className="flex items-baseline gap-1.5 text-[#0F0F0F]">
                    <span className="text-3xl font-bold">{plan.annualPrice}</span>
                    <span className="text-sm font-semibold text-[#6B7280]">kr/mnd</span>
                  </div>
                  <p className="text-xs mt-1.5 leading-relaxed text-[#6B7280]">
                    {plan.annualTotal} kr/år faktureres forskuddsvis for hele året.
                  </p>
                </div>

                {/* Monthly pricing box */}
                <div className="rounded-xl p-4 mb-6 bg-gray-50 border border-gray-200">
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1.5 text-[#6B7280]">
                    Månedlig faktura
                  </div>
                  <div className="flex items-baseline gap-1.5 text-[#0F0F0F]">
                    <span className="text-2xl font-bold">{plan.monthlyPrice}</span>
                    <span className="text-sm font-semibold text-[#6B7280]">kr/mnd</span>
                  </div>
                  <p className="text-xs mt-1.5 text-[#6B7280]">
                    Høyere pris — mer fleksibel betaling.
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-5 text-[#6B7280]">
                  {plan.desc}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 mb-5" />

                {/* Details */}
                <div className="space-y-2.5 flex-1 mb-6">
                  {plan.details.map(({ label, value }) => (
                    <p key={label} className="text-sm text-[#0F0F0F]">
                      <span className="font-bold">{label}:</span>{" "}
                      <span className="text-[#6B7280]">{value}</span>
                    </p>
                  ))}
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => openModal(plan.name)}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm transition-colors bg-[#3ADBA1] text-white hover:bg-[#2BC48A]"
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-sm text-[#6B7280] mt-10">
          Årsbetaling = hele året forskuddsvis (best pris). Månedlig faktura = samme pakke, høyere månedspris.
        </p>
      </div>
      <RetainerModal
        open={modalOpen}
        defaultPlan={selectedPlan}
        defaultTab="retainer"
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
