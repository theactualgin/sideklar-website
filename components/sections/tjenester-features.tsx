import { Reveal } from "@/components/ui/reveal";
import { SectionHead, TextLink } from "@/components/ui/section-head";

const features = [
  {
    num: "01",
    label: "Nettside",
    title: "Din digitale førsteinntrykk.",
    description:
      "Vi designer og utvikler profesjonelle nettsider som er raske, mobiloptimaliserte og enkle å bruke. Klar på 3 dager, uten teknisk stress.",
  },
  {
    num: "02",
    label: "Logo og grafisk profil",
    title: "Et merke folk husker.",
    description:
      "En sterk visuell identitet gjør at bedriften din skiller seg ut. Vi lager logoer og grafiske profiler som forteller historien din.",
  },
  {
    num: "03",
    label: "Vedlikehold og support",
    title: "Nettsiden din i toppform, alltid.",
    description:
      "Vi holder nettsiden din oppdatert, sikker og rask. Du slipper teknisk hodepine og kan fokusere på det du er best på.",
  },
];

const miniFeatures = [
  { title: "SEO", description: "Synlig på Google fra dag én. Vi optimaliserer for søk." },
  { title: "Domene og hosting", description: "Vi ordner det tekniske. Du slipper å tenke på det." },
  { title: "Rask levering", description: "Klar på 3 dager. Ikke 3 måneder." },
  { title: "Mobiloptimalisert", description: "100 % responsivt design på alle skjermstørrelser." },
];

export function TjenesterFeatures() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          as="h1"
          label="Hva vi tilbyr"
          title="Alt du trenger for en sterk digital profil."
          action={<TextLink href="/priskalkulator">Få et estimat</TextLink>}
        />

        <div>
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.05}>
              <div className="grid gap-4 border-t border-[#0A2349]/10 py-10 md:grid-cols-[1fr_1.4fr_1.4fr] md:gap-10 md:py-12">
                <div>
                  <p className="text-sm font-medium text-[#3ADBA1]">{f.num}</p>
                  <p className="mt-2 text-sm font-medium text-[#0A2349]/55">{f.label}</p>
                </div>
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#0A2349] md:text-3xl">{f.title}</h2>
                <div>
                  <p className="max-w-md text-base leading-relaxed text-[#0A2349]/70">{f.description}</p>
                  <a
                    href="/priskalkulator"
                    className="mt-5 inline-block text-sm font-semibold text-[#0A2349] underline decoration-[#3ADBA1] decoration-2 underline-offset-[6px]"
                  >
                    Få et estimat
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-x-10 border-t border-[#0A2349] pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {miniFeatures.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="py-4">
                <h3 className="text-lg font-semibold tracking-tight text-[#0A2349]">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#0A2349]/65">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
