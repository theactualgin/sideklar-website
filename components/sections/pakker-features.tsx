import { Reveal } from "@/components/ui/reveal";
import { SectionHead, TextLink } from "@/components/ui/section-head";

const features = [
  {
    num: "01",
    label: "Vedlikehold",
    title: "Kjenner du deg igjen?",
    description:
      "Nettsiden ble levert av et byrå, men ingen har rørt den siden lansering. Du vet det burde fikses, men det sklir alltid ut fordi ingen faktisk eier det.",
  },
  {
    num: "02",
    label: "Hva du får",
    title: "Din nettside-ressurs på speed dial.",
    description:
      "Vi fungerer som en liten intern webavdeling: fast kontaktperson, tydelig scope og forutsigbar kostnad. Du slipper å jakte på frilansere for hver minifiks.",
  },
];

const miniFeatures = [
  { title: "30 dagers oppsigelse", description: "Ingen flerårkontrakt eller bindingstid. Avslutt når du vil." },
  { title: "Fast kontaktperson", description: "Alltid samme person. Du slipper å forklare fra scratch." },
  { title: "Forutsigbar kostnad", description: "Ingen timespris eller skjulte fakturaer. Én fast sum i måneden." },
  { title: "Gratis helsesjekk", description: "Vi starter med en gratis gjennomgang av nettsiden din." },
];

export function PakkerFeatures() {
  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHead
          as="h1"
          label="Vedlikeholdspakker"
          title="Alltid noen som passer på siden din."
          action={<TextLink href="#pakker">Se pakker</TextLink>}
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
                <p className="max-w-md text-base leading-relaxed text-[#0A2349]/70">{f.description}</p>
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
