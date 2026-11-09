import { Reveal } from "@/components/ui/reveal";
import { SectionHead } from "@/components/ui/section-head";

const services = [
  { label: "Visuell identitet", desc: "Logo, farger og typografi som gjør bedriften gjenkjennbar." },
  { label: "UI / UX", desc: "Brukervennlig design som gjør besøkende til kunder." },
  { label: "Webdesign", desc: "Moderne design skreddersydd for din bedrift." },
  { label: "Webutvikling", desc: "Rask, mobiloptimalisert nettside bygget fra bunnen av." },
  { label: "Grafisk design", desc: "Profilering og visuelt innhold som skiller seg ut." },
  { label: "SEO", desc: "Bli funnet av de rette kundene på Google." },
  { label: "Integrasjoner", desc: "Koble nettsiden til verktøyene du allerede bruker." },
];

const steps = [
  {
    num: "01",
    title: "Du forteller oss om bedriften din",
    desc: "Fyll ut ett enkelt skjema med litt info om hvem du er og hva du tilbyr. Det tar bare noen minutter.",
  },
  {
    num: "02",
    title: "Vi bygger nettsiden på 1–3 dager",
    desc: "Vi lager en profesjonell, mobiloptimalisert nettside skreddersydd for din bedrift.",
  },
  {
    num: "03",
    title: "Nettsiden er live, og du får kunder",
    desc: "Vi publiserer alt og sender deg lenken. Kunder kan finne deg på nett fra dag én.",
  },
];

export function HowItWorks() {
  return (
    <>
      <section id="tjenester" className="bg-white px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl border-t border-[#0A2349]/10 pt-24 md:pt-32">
          <SectionHead label="Hva vi lager" title="Alt du trenger for å se profesjonell ut på nett." />
          <dl className="grid md:grid-cols-2 md:gap-x-16">
            {services.map((s, i) => (
              <Reveal key={s.label} delay={(i % 2) * 0.05}>
                <div className="flex flex-col gap-1 border-t border-[#0A2349]/10 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <dt className="text-lg font-semibold tracking-tight text-[#0A2349]">{s.label}</dt>
                  <dd className="max-w-xs text-[15px] leading-relaxed text-[#0A2349]/65 sm:text-right">{s.desc}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#0A2349] px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            onDark
            label="Slik fungerer det"
            title="Enkelt, raskt og uten stress."
            intro="Du trenger ingen teknisk erfaring. Vi tar oss av alt."
          />
          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="border-t border-white/25 pt-6">
                  <p className="text-sm font-medium text-[#3ADBA1]">{step.num}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
