import { Reveal } from "@/components/ui/reveal";

export function RetainerCredibility() {
  return (
    <section className="bg-white px-6 pb-24 md:pb-32">
      <Reveal>
        <div className="mx-auto grid max-w-6xl gap-8 border-t border-[#0A2349]/10 pt-20 md:grid-cols-[1fr_1.6fr] md:gap-20 md:pt-28">
          <div>
            <p className="mb-4 text-sm font-medium text-[#0A2349]/55">Hvem står bak</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#0A2349] md:text-4xl">
              Lanseringsdagen er bare starten
            </h2>
          </div>
          <div className="max-w-xl space-y-4 text-base leading-relaxed text-[#0A2349]/70">
            <p>
              Vi har bygd nettsider for bedrifter i alle størrelser, og vi ser det samme mønsteret gang på gang: siden blir levert, ingen eier den etterpå, og den mister sakte relevans.
            </p>
            <p>
              Det er derfor vi tilbyr retainer. Ikke for å fylle kalenderen, men fordi vi mener{" "}
              <strong className="font-semibold text-[#0A2349]">en nettside trenger noen som faktisk følger den opp</strong>. Vi tar på oss et begrenset antall kunder, så du alltid har reell kapasitet, ikke bare et løfte om responstid.
            </p>
            <p className="font-semibold text-[#0A2349]">
              Du får noen som kjenner nettsiden din, bryr seg om den, og er tilgjengelig når noe må gjøres.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
