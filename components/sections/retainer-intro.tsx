"use client";
import { motion } from "framer-motion";
import { Check, Zap, Search, FileText, Paintbrush, MessageCircle, Clock } from "lucide-react";

const painPoints = [
  "Nettsiden ble levert av et byrå, men ingen har rørt den siden lansering.",
  "Du vil endre tekst eller layout, men vet ikke hvem du skal spørre — eller hva det koster.",
  "Google varsler om trege sider, mobilfeil eller manglende indeksering, og det bare hoper seg opp.",
  "Du vet at nettsiden burde oppdateres, men det sklir alltid ut fordi ingen eier det.",
];

const features = [
  { icon: Zap, title: "Teknisk vedlikehold", desc: "Vi sjekker lenker, skjemaer og kritiske flyter — og fikser det før det blir et problem." },
  { icon: Search, title: "SEO-optimalisering", desc: "Titler, metabeskrivelser, bildeoptimalisering og struktur som faktisk påvirker synligheten din." },
  { icon: FileText, title: "Innholdsoppdateringer", desc: "Nye undersider, tekst og bilder — du leverer innholdet, vi publiserer det trygt og riktig." },
  { icon: Paintbrush, title: "Design-justeringer", desc: "Små grep som holder siden moderne: spacing, typografi og komponenter — uten å ødelegge noe." },
  { icon: MessageCircle, title: "Rådgivning", desc: "Hva bør prioriteres? Hva er godt nok? Vi har sett det meste og gir deg et ærlig svar." },
  { icon: Clock, title: "Forutsigbar respons", desc: "Avtalt responstid per pakke — mindre venting, mer faktisk fremdrift." },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export function RetainerIntro() {
  return (
    <>
      {/* Section 1: Pain points */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] mb-3">Vedlikehold</div>
            <h1 className="text-4xl font-bold text-[#0F0F0F] mb-4">Kjenner du deg igjen?</h1>
            <p className="text-[#6B7280] leading-relaxed">
              Det er helt normalt. En nettside krever noen som faktisk har tid til å eie den etter lansering.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm"
              >
                <div className="w-7 h-7 rounded-full bg-[#3ADBA1]/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={13} className="text-[#3ADBA1]" strokeWidth={2.5} />
                </div>
                <p className="text-[#6B7280] text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Value prop */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] mb-3">Hva du får</div>
            <h2 className="text-4xl font-bold text-[#0F0F0F] mb-4">Din nettside-ressurs på speed dial</h2>
            <p className="text-[#6B7280] leading-relaxed max-w-2xl">
              Vi fungerer som en liten intern webavdeling: fast kontaktperson, tydelig scope og forutsigbar kostnad. Du slipper å jakte på frilansere for hver minifiks — og slipper å betale byråtime når det bare skal gjøres riktig.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#FAFAFA] border border-gray-100 rounded-2xl p-8 shadow-sm"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#3ADBA1] mb-6">Dette kan du legge fra deg</p>
            <motion.div
              className="space-y-6"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {features.map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={itemVariants} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#3ADBA1]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={13} className="text-[#3ADBA1]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0F0F0F] mb-0.5">{title}</p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
