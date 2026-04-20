"use client";
import { motion } from "framer-motion";

export function RetainerCredibility() {
  return (
    <section className="pt-8 pb-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
        >
          <div className="text-xs font-bold uppercase tracking-widest text-[#3ADBA1] mb-4">Hvem står bak</div>
          <h3 className="text-2xl font-bold text-[#0F0F0F] mb-5 leading-snug">
            Lanseringsdagen er bare starten
          </h3>

          <div className="space-y-3 text-sm text-[#6B7280] leading-relaxed">
            <p>
              Vi har bygd nettsider for bedrifter i alle størrelser — og vi ser det samme mønsteret gang på gang: siden blir levert, ingen eier den etterpå, og den mister sakte relevans.
            </p>
            <p>
              Det er derfor vi tilbyr retainer. Ikke for å fylle kalenderen, men fordi vi mener <strong className="font-semibold text-[#0F0F0F]">en nettside trenger noen som faktisk følger den opp</strong>. Vi tar på oss et begrenset antall kunder — så du alltid har reell kapasitet, ikke bare et løfte om responstid.
            </p>
            <p className="font-semibold text-[#0F0F0F]">
              Du får noen som kjenner nettsiden din, bryr seg om den, og er tilgjengelig når noe må gjøres.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
