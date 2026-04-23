"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, BookOpen } from "lucide-react";
import { articles } from "@/lib/articles";

export function ArticlesSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragWidth, setDragWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (containerRef.current) {
      setDragWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  function scrollTo(direction: "left" | "right") {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const currentX = x.get();
    const amount = containerWidth * 0.75;
    const newX = direction === "left" ? currentX + amount : currentX - amount;
    animate(x, Math.max(Math.min(newX, 0), -dragWidth), {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  }

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-10 flex items-end justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#E6FAF4]">
                <BookOpen className="h-3 w-3 text-[#3ADBA1]" />
              </div>
              <span className="text-sm text-[#6B7280]">Blogg</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#0F0F0F] md:text-4xl">
              Les og <span className="text-[#3ADBA1]">lær.</span>
            </h2>
          </div>
          <a
            href="/artikler"
            className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-[#3ADBA1] hover:text-[#2BC48A] transition-colors"
          >
            Les alle →
          </a>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scrollTo("left")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6B7280] hover:border-[#3ADBA1] hover:text-[#3ADBA1] transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollTo("right")}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#6B7280] hover:border-[#3ADBA1] hover:text-[#3ADBA1] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -dragWidth }}
            dragElastic={0.05}
            style={{ x }}
            className="flex gap-6"
          >
            {articles.map((article, i) => (
              <motion.a
                key={article.id}
                href={`/artikler/${article.slug}`}
                className="min-w-[300px] max-w-[300px] bg-[#F3F4F6] rounded-2xl overflow-hidden group"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#E6FAF4] text-[#3ADBA1] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="font-bold text-[#0F0F0F] leading-snug text-sm line-clamp-2 group-hover:text-[#3ADBA1] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200 mt-auto">
                    <span className="text-[11px] text-[#6B7280]">{article.date}</span>
                    <span className="flex items-center gap-1 text-[11px] text-[#6B7280]">
                      <Clock size={11} />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
