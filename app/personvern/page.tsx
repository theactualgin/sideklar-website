import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: "Personvernerklæring — Sideklar",
  description: "Les om hvordan Sideklar behandler personopplysninger.",
};

const sections = [
  {
    title: "1. Behandlingsansvarlig",
    content: `Sideklar, drevet av Noah Lie, er behandlingsansvarlig for personopplysninger som samles inn via sideklar.no. Kontakt oss på hei@sideklar.no ved spørsmål.`,
  },
  {
    title: "2. Hvilke opplysninger vi samler inn",
    content: `Vi samler inn følgende kategorier av opplysninger:\n\n- **Kontaktopplysninger** (navn, e-post, telefon) når du tar kontakt med oss via chat eller kontaktskjema.\n- **Bruksdata** via Google Analytics: anonymisert informasjon om hvilke sider du besøker, nettleser, enhet og omtrentlig geografisk plassering. IP-adressen din anonymiseres og lagres ikke i sin helhet.`,
  },
  {
    title: "3. Formål og rettslig grunnlag",
    content: `Opplysningene brukes til:\n\n- **Å besvare henvendelser** (rettslig grunnlag: berettiget interesse / avtaleoppfyllelse)\n- **Statistikk og forbedring av nettsiden** via Google Analytics (rettslig grunnlag: samtykke — du kan trekke dette tilbake via cookie-banneret)`,
  },
  {
    title: "4. Informasjonskapsler (cookies)",
    content: `Vi bruker Google Analytics som setter informasjonskapsler på din enhet når du aksepterer dette via cookie-banneret. Du kan når som helst trekke samtykket tilbake ved å klikke «Avslå» i cookie-banneret, eller ved å slette informasjonskapslene i nettleseren din.\n\nVi bruker ingen markedsføringscookies eller tredjeparts sporingsteknologi utover Google Analytics.`,
  },
  {
    title: "5. Deling med tredjeparter",
    content: `Vi deler ikke personopplysninger med tredjeparter, med unntak av:\n\n- **Google LLC** (Google Analytics) — data behandles i henhold til Google sin personvernpolicy og EUs standard kontraktsvilkår (SCC).\n- Eventuelt andre underleverandører som er nødvendige for å levere tjenesten, og som er bundet av databehandleravtale.`,
  },
  {
    title: "6. Lagring og sletting",
    content: `Kontaktopplysninger slettes etter at kundeforholdet er avsluttet og det ikke lenger er behov for å oppbevare dem, normalt innen 12 måneder. Google Analytics-data lagres i 14 måneder før automatisk sletting.`,
  },
  {
    title: "7. Dine rettigheter",
    content: `Du har rett til å:\n\n- **Innsyn** — få vite hvilke opplysninger vi har om deg\n- **Retting** — korrigere feilaktige opplysninger\n- **Sletting** — kreve at opplysninger slettes («retten til å bli glemt»)\n- **Begrensning** — be om at behandlingen begrenses\n- **Dataportabilitet** — motta opplysningene i et strukturert format\n- **Klage** — du kan klage til Datatilsynet (datatilsynet.no)\n\nSend oss en e-post på hei@sideklar.no for å benytte deg av rettighetene dine.`,
  },
  {
    title: "8. Endringer",
    content: `Vi kan oppdatere denne erklæringen ved behov. Siste versjon vil alltid ligge på sideklar.no/personvern. Vesentlige endringer varsles per e-post til aktive kunder.`,
  },
];

export default function PersonvernPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <section className="w-full py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#E6FAF4]">
                <span className="text-xs text-[#3ADBA1]">🔒</span>
              </div>
              <span className="text-sm text-[#6B7280]">Personvern</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#0F0F0F] md:text-4xl mb-3">
              Personvernerklæring
            </h1>
            <p className="text-[#6B7280] mb-12">Sist oppdatert: april 2026</p>

            <div className="space-y-10">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-lg font-bold text-[#0F0F0F] mb-3">{s.title}</h2>
                  <div className="text-[#6B7280] leading-relaxed text-sm space-y-2">
                    {s.content.split("\n").map((line, i) => {
                      if (line === "") return null;
                      if (line.startsWith("- **")) {
                        const match = line.match(/- \*\*(.*?)\*\*(.*)/);
                        return (
                          <p key={i} className="flex gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#3ADBA1] mt-2 shrink-0" />
                            <span>
                              <strong className="font-semibold text-[#0F0F0F]">{match?.[1]}</strong>
                              {match?.[2]}
                            </span>
                          </p>
                        );
                      }
                      return <p key={i}>{line}</p>;
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-2xl bg-[#F3F4F6] p-6">
              <p className="text-sm text-[#6B7280]">
                Spørsmål om personvern? Ta kontakt på{" "}
                <a href="mailto:hei@sideklar.no" className="font-semibold text-[#3ADBA1] hover:text-[#2BC48A] transition-colors">
                  hei@sideklar.no
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
