"use client";
import { useState } from "react";
import { RetainerModal } from "@/components/ui/retainer-modal";
import { Reveal } from "@/components/ui/reveal";
import { SiteButton } from "@/components/ui/site-button";
import { SectionHead } from "@/components/ui/section-head";

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
    <section className="bg-white px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-6xl border-t border-[#0A2349]/10 pt-20 md:pt-28">
        <SectionHead
          label="Vedlikehold"
          title="Retainer-pakker"
          intro="Du kjøper tilgjengelighet og trygghet, ikke et stoppeklokke-prosjekt. Vi følger opp nettsiden din med avtalt responstid og kapasitet som matcher behovet."
        />

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.06}>
              <div className={`flex h-full flex-col border-t pt-6 ${plan.popular ? "border-t-2 border-[#0A2349]" : "border-[#0A2349]/15"}`}>
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-sm font-medium text-[#0A2349]/55">{plan.size}</p>
                  {plan.popular && <p className="text-sm font-semibold text-[#0F9F70]">Mest valgt</p>}
                </div>
                <h3 className="mt-2 text-3xl font-bold tracking-tight text-[#0A2349]">{plan.name}</h3>

                <div className="mt-6">
                  <p className="flex items-baseline gap-2 text-[#0A2349]">
                    <span className="text-5xl font-bold tracking-tight">{plan.annualPrice}</span>
                    <span className="text-base font-medium text-[#0A2349]/60">kr/mnd</span>
                  </p>
                  <p className="mt-1 text-sm text-[#0A2349]/60">
                    Årsbetaling: {plan.annualTotal} kr/år faktureres forskuddsvis.
                  </p>
                  <p className="mt-3 text-sm text-[#0A2349]/60">
                    Eller {plan.monthlyPrice} kr/mnd med månedlig faktura.
                  </p>
                </div>

                <p className="mt-6 text-[15px] leading-relaxed text-[#0A2349]/70">{plan.desc}</p>

                <dl className="mt-6 flex-1 border-b border-[#0A2349]/10">
                  {plan.details.map(({ label, value }) => (
                    <div key={label} className="border-t border-[#0A2349]/10 py-3 text-sm">
                      <dt className="font-semibold text-[#0A2349]">{label}</dt>
                      <dd className="mt-0.5 text-[#0A2349]/65">{value}</dd>
                    </div>
                  ))}
                </dl>

                <SiteButton
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  arrow
                  onClick={() => openModal(plan.name)}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </SiteButton>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm leading-relaxed text-[#0A2349]/60">
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
