"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { projects } from "@/lib/projects";

const featured = projects.slice(0, 3);

export function ProsjekterPreview() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10"
        >
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#E6FAF4]">
                <Briefcase className="h-3 w-3 text-[#3ADBA1]" />
              </div>
              <span className="text-sm text-[#6B7280]">Prosjektreferanser</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F0F0F] md:text-4xl">
              Utvalgte{" "}
              <span className="text-[#3ADBA1]">prosjekter.</span>
            </h2>
          </div>
          <a
            href="/prosjekter"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3ADBA1] hover:underline underline-offset-4 transition-colors self-start md:self-auto"
          >
            Se alle prosjekter
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.a
              key={project.slug}
              href={`/prosjekter/${project.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group block overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-[#3ADBA1]/30 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#E6FAF4] text-[#3ADBA1]">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow">
                    <ArrowUpRight className="h-4 w-4 text-[#0F0F0F]" />
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="font-bold text-[#0F0F0F] leading-snug">{project.title}</h3>
                  <span className="text-xs text-[#6B7280] font-mono shrink-0 mt-0.5">{project.year}</span>
                </div>
                <p className="text-sm text-[#6B7280] leading-relaxed line-clamp-2">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
