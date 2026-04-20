"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, MousePointer, Layout, Code, Pen, Search, Plug } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

const services = [
  { icon: Eye, label: "Visuell identitet", desc: "Logo, farger og typografi som gjør bedriften gjenkjennbar" },
  { icon: MousePointer, label: "UI / UX", desc: "Brukervennlig design som konverterer besøkende til kunder" },
  { icon: Layout, label: "Webdesign", desc: "Moderne design skreddersydd din bedrift" },
  { icon: Code, label: "Webutvikling", desc: "Rask, mobiloptimalisert nettside bygget fra bunnen av" },
  { icon: Pen, label: "Grafisk design", desc: "Profilering og visuelt innhold som skiller seg ut" },
  { icon: Search, label: "SEO", desc: "Bli funnet av de rette kundene på Google" },
  { icon: Plug, label: "Integrasjoner", desc: "Koble nettsiden til verktøyene du allerede bruker" },
];

function ServicePill({ icon: Icon, label, onEnter, onLeave }: { icon: any; label: string; onEnter: () => void; onLeave: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="mx-3 flex-shrink-0"
      onMouseEnter={() => { setHovered(true); onEnter(); }}
      onMouseLeave={() => { setHovered(false); onLeave(); }}
    >
      <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold cursor-default transition-all duration-200 ${
        hovered ? "bg-white text-[#0F0F0F] border-2 border-[#0F0F0F]" : "bg-transparent text-[#0F0F0F] border-2 border-[#0F0F0F]/20"
      }`}>
        <Icon size={14} strokeWidth={2.5} />
        {label}
      </div>
    </div>
  );
}

const steps = [
  { num: "1", title: "Du forteller oss om bedriften din", desc: "Fyll ut ett enkelt skjema med litt info om hvem du er og hva du tilbyr. Det tar bare noen minutter." },
  { num: "2", title: "Vi bygger nettsiden på 1–3 dager", desc: "Teamet vårt lager en profesjonell, mobiloptimalisert nettside skreddersydd for din bedrift." },
  { num: "3", title: "Nettsiden er live — du får kunder", desc: "Vi publiserer alt og sender deg lenken. Kunder kan finne deg på nett fra dag én." },
];

export function HowItWorks() {
  const [activeDesc, setActiveDesc] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  return (
    <section id="tjenester" className="pt-12 pb-24 bg-[#3ADBA1]">
      <Marquee duration={50} paused={paused} className="py-4 border-y border-[#0F0F0F]/10">
        {services.map(({ icon: Icon, label, desc }) => (
          <ServicePill
            key={label}
            icon={Icon}
            label={label}
            onEnter={() => { setActiveDesc(desc); setPaused(true); }}
            onLeave={() => { setActiveDesc(null); setPaused(false); }}
          />
        ))}
      </Marquee>

      {/* Description strip — fixed height so layout doesn't shift */}
      <div className="h-12 flex items-center justify-center mt-3 mb-10 px-6">
        <AnimatePresence mode="wait">
          {activeDesc && (
            <motion.div
              key={activeDesc}
              initial={{ opacity: 0, scale: 0.95, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2 bg-[#0F0F0F] text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3ADBA1] shrink-0" />
              {activeDesc}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-white/70 mb-3">Slik fungerer det</div>
          <h2 className="text-4xl font-bold text-[#0F0F0F]">Enkelt, raskt og uten stress</h2>
          <p className="mt-4 text-[#0F0F0F]/60">Du trenger ingen teknisk erfaring. Vi tar oss av alt.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-8 shadow-sm cursor-default"
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-[#0F0F0F] text-white flex items-center justify-center font-bold text-lg mb-5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 15, delay: i * 0.18 + 0.3 }}
              >
                {step.num}
              </motion.div>
              <h3 className="font-bold text-lg text-[#0F0F0F] mb-3">{step.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
