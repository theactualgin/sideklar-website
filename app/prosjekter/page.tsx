"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { projects } from "@/lib/projects";

export default function ProsjekterPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.12),
        y: lerp(prev.y, mousePosition.y, 0.12),
      }));
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <>
      <Nav />
      <main className="bg-[#FAFAFA] min-h-screen">
        <section
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="relative max-w-3xl mx-auto px-6 py-24"
        >
          {/* Hover image preview */}
          <div
            className="pointer-events-none fixed z-50 overflow-hidden rounded-2xl shadow-2xl"
            style={{
              left: containerRef.current?.getBoundingClientRect().left ?? 0,
              top: containerRef.current?.getBoundingClientRect().top ?? 0,
              transform: `translate3d(${smoothPosition.x + 28}px, ${smoothPosition.y - 110}px, 0)`,
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? "1" : "0.9",
              transition: "opacity 0.25s ease, scale 0.25s ease",
            }}
          >
            <div className="relative w-[260px] h-[170px] overflow-hidden rounded-2xl bg-gray-100">
              {projects.map((project, index) => (
                <img
                  key={project.slug}
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    transform: hoveredIndex === index ? "scale(1)" : "scale(1.08)",
                    filter: hoveredIndex === index ? "none" : "blur(8px)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] mb-3">Prosjekter</div>
            <h1 className="text-4xl font-bold text-[#0F0F0F] mb-4">Utvalgte prosjekter</h1>
            <p className="text-[#6B7280] max-w-md leading-relaxed">
              Et utvalg av nettsider, logoer og grafiske profiler vi har laget for norske bedrifter.
            </p>
          </motion.div>

          {/* Project list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {projects.map((project, index) => (
              <a
                key={project.slug}
                href={`/prosjekter/${project.slug}`}
                className="group block border-t border-gray-200 relative"
                onMouseEnter={() => { setHoveredIndex(index); setIsVisible(true); }}
                onMouseLeave={() => { setHoveredIndex(null); setIsVisible(false); }}
              >
                <div
                  className={`absolute inset-0 -mx-4 rounded-xl bg-white transition-all duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div className="relative flex items-center justify-between gap-4 py-6 px-2">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-[#0F0F0F] font-semibold text-lg relative">
                        {project.title}
                        <span
                          className={`absolute left-0 -bottom-0.5 h-px bg-[#0F0F0F] transition-all duration-300 ${
                            hoveredIndex === index ? "w-full" : "w-0"
                          }`}
                        />
                      </h2>
                      <ArrowUpRight
                        size={16}
                        className={`text-[#6B7280] transition-all duration-300 ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }`}
                      />
                    </div>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{project.description}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] block mb-1">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#6B7280] font-mono">{project.year}</span>
                  </div>
                </div>
              </a>
            ))}
            <div className="border-t border-gray-200" />
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[#6B7280] text-sm mb-4">Vil du at bedriften din skal være her?</p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#3ADBA1] text-[#0F0F0F] font-semibold text-sm hover:bg-[#2BC48A] transition-colors"
            >
              Se hva vi tilbyr →
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
