"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Palette, Wrench, Search, Server, Zap, Smartphone } from "lucide-react";

const COLORS = {
  accent: "#3ADBA1",
  accentHover: "#2BC490",
  cardBg: "#F3F4F6",
  cardBgAlt: "#EBF9F4",
  tagBg: "#E6FAF4",
  tagText: "#3ADBA1",
  dark: "#0F0F0F",
  gray: "#6B7280",
};

// ── UI Mockups ────────────────────────────────────────────────────────────────

function NettsidemockupUI() {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-50 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-3 bg-white border border-gray-200 rounded-full px-3 py-1 text-[10px] text-gray-400">
          dinnettside.no
        </div>
      </div>
      {/* Page content */}
      <div className="p-5 bg-white">
        {/* Nav */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded bg-[#3ADBA1]" />
            <div className="w-12 h-2 bg-gray-800 rounded-full" />
          </div>
          <div className="flex gap-3">
            {[1,2,3].map(i => <div key={i} className="w-8 h-1.5 bg-gray-200 rounded-full" />)}
          </div>
          <div className="w-14 h-5 rounded-full bg-[#3ADBA1]" />
        </div>
        {/* Hero */}
        <div className="text-center py-4">
          <div className="w-36 h-4 bg-gray-800 rounded-full mx-auto mb-2" />
          <div className="w-24 h-4 bg-[#3ADBA1] rounded-full mx-auto mb-4" />
          <div className="w-48 h-2 bg-gray-200 rounded-full mx-auto mb-1" />
          <div className="w-40 h-2 bg-gray-200 rounded-full mx-auto mb-5" />
          <div className="w-24 h-7 rounded-full bg-[#3ADBA1] mx-auto" />
        </div>
        {/* Cards */}
        <div className="grid grid-cols-3 gap-2 mt-3">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-xl bg-gray-50 border border-gray-100 p-3">
              <div className="w-6 h-6 rounded-lg bg-[#3ADBA1]/20 mb-2" />
              <div className="w-full h-1.5 bg-gray-200 rounded-full mb-1" />
              <div className="w-3/4 h-1.5 bg-gray-100 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoMockupUI() {
  return (
    <div className="w-full space-y-3">
      {/* Logo card */}
      <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Logo</p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#0F0F0F] flex items-center justify-center">
            <div className="w-6 h-6 rounded bg-[#3ADBA1]" />
          </div>
          <div>
            <div className="w-20 h-3 bg-gray-800 rounded-full mb-1.5" />
            <div className="w-14 h-2 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
      {/* Colors */}
      <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Fargepalett</p>
        <div className="flex gap-2">
          {["#3ADBA1","#0F0F0F","#6B7280","#FAFAFA","#E6FAF4"].map(c => (
            <div key={c} className="flex-1 h-8 rounded-lg border border-gray-100" style={{ backgroundColor: c }} />
          ))}
        </div>
      </div>
      {/* Typography */}
      <div className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Typografi</p>
        <p className="text-xl font-bold text-[#0F0F0F] leading-tight">Aa</p>
        <p className="text-[10px] text-gray-400 mt-0.5">Plus Jakarta Sans</p>
      </div>
    </div>
  );
}

function VedlikeholdMockupUI() {
  return (
    <div className="w-full space-y-3">
      {/* Status */}
      <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-[#0F0F0F]">Nettside-status</p>
          <span className="flex items-center gap-1.5 text-xs font-medium text-[#3ADBA1]">
            <span className="w-2 h-2 rounded-full bg-[#3ADBA1] animate-pulse" />
            Online
          </span>
        </div>
        <div className="flex gap-1">
          {Array.from({length: 28}).map((_, i) => (
            <div key={i} className={`flex-1 h-6 rounded-sm ${i === 14 ? "bg-yellow-300" : "bg-[#3ADBA1]/70"}`} />
          ))}
        </div>
        <p className="text-[10px] text-gray-400 mt-1.5">99.9% oppetid siste 30 dager</p>
      </div>
      {/* Tasks */}
      <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Siste oppdateringer</p>
        <div className="space-y-2">
          {[
            { text: "Sikkerhetsoppdatering installert", done: true },
            { text: "Bilder optimalisert", done: true },
            { text: "SEO-rapport sendt", done: false },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${t.done ? "bg-[#3ADBA1]" : "border-2 border-gray-200"}`}>
                {t.done && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
              <p className={`text-xs ${t.done ? "text-gray-400 line-through" : "text-[#0F0F0F]"}`}>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────

const features = [
  {
    icon: <Globe className="h-3 w-3" />,
    label: "Nettside",
    title: "Din digitale førsteinntrykk.",
    description: "Vi designer og utvikler profesjonelle nettsider som er raske, mobiloptimaliserte og enkle å bruke. Klar på 3 dager — uten teknisk stress.",
    ui: <NettsidemockupUI />,
    reverse: false,
    bg: COLORS.cardBg,
  },
  {
    icon: <Palette className="h-3 w-3" />,
    label: "Logo & Grafisk profil",
    title: "Et merke folk husker.",
    description: "En sterk visuell identitet gjør at bedriften din skiller seg ut. Vi lager logoer og grafiske profiler som forteller historien din.",
    ui: <LogoMockupUI />,
    reverse: true,
    bg: COLORS.cardBg,
  },
  {
    icon: <Wrench className="h-3 w-3" />,
    label: "Vedlikehold & Support",
    title: "Nettsiden din i toppform — alltid.",
    description: "Vi holder nettsiden din oppdatert, sikker og rask. Du slipper teknisk hodepine og kan fokusere på det du er best på.",
    ui: <VedlikeholdMockupUI />,
    reverse: false,
    bg: COLORS.cardBgAlt,
  },
];

const miniFeatures = [
  { icon: <Search className="h-4 w-4" />, title: "SEO", description: "Synlig på Google fra dag én — vi optimaliserer for søk." },
  { icon: <Server className="h-4 w-4" />, title: "Domene & hosting", description: "Vi ordner det tekniske. Du slipper å tenke på det." },
  { icon: <Zap className="h-4 w-4" />, title: "Rask levering", description: "Klar på 3 dager. Ikke 3 måneder." },
  { icon: <Smartphone className="h-4 w-4" />, title: "Mobiloptimalisert", description: "100% responsivt design på alle skjermstørrelser." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function TjenesterFeatures() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded" style={{ backgroundColor: COLORS.tagBg }}>
                <Globe className="h-3 w-3" style={{ color: COLORS.accent }} />
              </div>
              <span className="text-sm text-[#6B7280]">
                Hva vi tilbyr
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F0F0F] md:text-4xl lg:text-5xl">
              Alt du trenger for en{" "}
              <span style={{ color: COLORS.accent }}>sterk digital profil.</span>
            </h2>
          </div>
          <a
            href="/priskalkulator"
            className="group flex items-center gap-2 text-sm font-medium text-[#0F0F0F] transition-colors hover:text-[#3ADBA1] shrink-0"
          >
            Få et estimat
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              variants={itemVariants}
              className="overflow-hidden rounded-2xl"
              style={{ backgroundColor: f.bg }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${f.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded" style={{ backgroundColor: COLORS.tagBg }}>
                      <span style={{ color: COLORS.accent }}>{f.icon}</span>
                    </div>
                    <span className="text-sm font-medium text-[#6B7280]">{f.label}</span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-[#0F0F0F] md:text-3xl">{f.title}</h3>
                  <p className="mb-6 text-[#6B7280] leading-relaxed">{f.description}</p>
                  <a
                    href="/priskalkulator"
                    className="group flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: COLORS.accent }}
                  >
                    Få et estimat
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
                <div className="flex items-center justify-center p-8 lg:p-12">
                  {f.ui}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mini Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {miniFeatures.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              className="rounded-xl p-6"
              style={{ backgroundColor: COLORS.cardBg }}
            >
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg text-white" style={{ backgroundColor: COLORS.accent }}>
                {f.icon}
              </div>
              <h4 className="mb-2 font-semibold text-[#0F0F0F]">{f.title}</h4>
              <p className="text-sm text-[#6B7280]">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
