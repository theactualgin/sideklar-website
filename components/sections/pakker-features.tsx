"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, AlertCircle, Shield, Calendar, User, BadgeDollarSign, Heart } from "lucide-react";

const COLORS = {
  accent: "#3ADBA1",
  cardBg: "#F3F4F6",
  cardBgAlt: "#EBF9F4",
  tagBg: "#E6FAF4",
  tagText: "#3ADBA1",
  dark: "#0F0F0F",
  gray: "#6B7280",
};

// ── UI Mockups ────────────────────────────────────────────────────────────────

function SiteHealthMockupUI() {
  return (
    <div className="w-full space-y-3">
      <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-[#0F0F0F]">Nettside-helse</p>
          <span className="flex items-center gap-1.5 text-xs font-medium text-amber-500">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Trenger oppfølging
          </span>
        </div>
        <div className="space-y-2.5">
          {[
            { label: "Sist oppdatert", value: "438 dager siden", bad: true },
            { label: "SEO-score", value: "42 / 100", bad: true },
            { label: "Mobiloptimalisering", value: "Feil funnet", bad: true },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between text-xs">
              <span className="text-[#6B7280]">{item.label}</span>
              <span className={`font-semibold ${item.bad ? "text-red-500" : "text-[#3ADBA1]"}`}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Funn</p>
        <div className="space-y-2">
          {[
            { text: "3 ødelagte lenker oppdaget", color: "bg-red-400" },
            { text: "SSL-sertifikat utløper om 14 dager", color: "bg-amber-400" },
            { text: "Ingen sitemap registrert i Google", color: "bg-red-400" },
            { text: "Bilder ikke optimalisert for web", color: "bg-amber-400" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className={`w-2 h-2 rounded-full shrink-0 ${item.color}`} />
              <p className="text-xs text-[#0F0F0F]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RetainerDashboardUI() {
  return (
    <div className="w-full space-y-3">
      <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-[#0F0F0F]">Din kontaktperson</p>
          <span className="flex items-center gap-1.5 text-xs font-medium text-[#3ADBA1]">
            <span className="w-2 h-2 rounded-full bg-[#3ADBA1] animate-pulse" />
            Tilgjengelig
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#3ADBA1]/20 flex items-center justify-center text-sm font-bold text-[#3ADBA1]">
            N
          </div>
          <div>
            <p className="text-xs font-semibold text-[#0F0F0F]">Noah</p>
            <p className="text-[10px] text-[#6B7280]">Svarer innen 24 timer</p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl bg-white border border-gray-200 p-4 shadow-sm">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Siste oppgaver</p>
        <div className="space-y-2">
          {[
            { text: "SEO-rapport levert", done: true },
            { text: "Nytt blogginnlegg publisert", done: true },
            { text: "Teknisk vedlikehold utført", done: true },
            { text: "Månedlig rapport sendes fredag", done: false },
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
    icon: <AlertCircle className="h-3 w-3" />,
    label: "Vedlikehold",
    title: "Kjenner du deg igjen?",
    description: "Nettsiden ble levert av et byrå, men ingen har rørt den siden lansering. Du vet det burde fikses — men det sklir alltid ut fordi ingen faktisk eier det.",
    ui: <SiteHealthMockupUI />,
    reverse: false,
    bg: COLORS.cardBg,
  },
  {
    icon: <Shield className="h-3 w-3" />,
    label: "Hva du får",
    title: "Din nettside-ressurs på speed dial.",
    description: "Vi fungerer som en liten intern webavdeling: fast kontaktperson, tydelig scope og forutsigbar kostnad. Du slipper å jakte på frilansere for hver minifiks.",
    ui: <RetainerDashboardUI />,
    reverse: true,
    bg: COLORS.cardBgAlt,
  },
];

const miniFeatures = [
  { icon: <Calendar className="h-4 w-4" />, title: "30 dagers oppsigelse", description: "Ingen flerårkontrakt eller bindingstid. Avslutt når du vil." },
  { icon: <User className="h-4 w-4" />, title: "Fast kontaktperson", description: "Alltid samme person — du slipper å forklare fra scratch." },
  { icon: <BadgeDollarSign className="h-4 w-4" />, title: "Forutsigbar kostnad", description: "Ingen timespris eller skjulte fakturaer. Én fast sum i måneden." },
  { icon: <Heart className="h-4 w-4" />, title: "Gratis helsesjekk", description: "Vi starter med en gratis gjennomgang av nettsiden din." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function PakkerFeatures() {
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
                <Package className="h-3 w-3" style={{ color: COLORS.accent }} />
              </div>
              <span className="text-sm text-[#6B7280]">Vedlikeholdspakker</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F0F0F] md:text-4xl lg:text-5xl">
              Alltid noen som passer{" "}
              <span style={{ color: COLORS.accent }}>på siden din.</span>
            </h2>
          </div>
          <a
            href="#pakker"
            className="group flex items-center gap-2 text-sm font-medium text-[#0F0F0F] transition-colors hover:text-[#3ADBA1] shrink-0"
          >
            Se pakker
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
          {features.map((f) => (
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
                    href="#pakker"
                    className="group flex items-center gap-2 text-sm font-semibold transition-colors"
                    style={{ color: COLORS.accent }}
                  >
                    Se pakker
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
