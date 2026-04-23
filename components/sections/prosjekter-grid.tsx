"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { projects } from "@/lib/projects";

const COLORS = {
  accent: "#3ADBA1",
  tagBg: "#E6FAF4",
  dark: "#0F0F0F",
  gray: "#6B7280",
  cardBg: "#F3F4F6",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export function ProsjekterGrid() {
  const categories = ["Alle", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [activeFilter, setActiveFilter] = useState("Alle");

  const filtered = activeFilter === "Alle"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded" style={{ backgroundColor: COLORS.tagBg }}>
              <Briefcase className="h-3 w-3" style={{ color: COLORS.accent }} />
            </div>
            <span className="text-sm text-[#6B7280]">Portefølje</span>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-[#0F0F0F] md:text-4xl lg:text-5xl">
              Utvalgte{" "}
              <span style={{ color: COLORS.accent }}>prosjekter.</span>
            </h1>
            <p className="text-[#6B7280] max-w-sm leading-relaxed text-sm md:text-base">
              Nettsider, logoer og grafiske profiler vi har laget for norske bedrifter.
            </p>
          </div>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-1.5 rounded-full text-sm font-medium transition-colors"
              style={
                activeFilter === cat
                  ? { backgroundColor: COLORS.accent, color: COLORS.dark }
                  : { backgroundColor: COLORS.cardBg, color: COLORS.gray }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.a
                key={project.slug}
                href={`/prosjekter/${project.slug}`}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group block overflow-hidden rounded-2xl bg-[#F3F4F6]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: COLORS.tagBg, color: COLORS.accent }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
                      <ArrowUpRight className="h-4 w-4 text-[#0F0F0F]" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h2 className="font-bold text-[#0F0F0F] leading-snug">{project.title}</h2>
                    <span className="text-xs text-[#6B7280] font-mono shrink-0 mt-0.5">{project.year}</span>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">{project.description}</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-[#6B7280] text-sm mb-4">Vil du at bedriften din skal være her?</p>
          <a
            href="/tjenester"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
            style={{ backgroundColor: COLORS.accent, color: COLORS.dark }}
          >
            Se hva vi tilbyr
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
