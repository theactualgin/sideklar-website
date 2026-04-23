"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { PageIntro } from "@/components/ui/PageIntro";
import { articles } from "@/lib/articles";
import { Clock, BookOpen } from "lucide-react";

const PAGE_SIZE = 6;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function ArtiklerPage() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = articles.slice(0, visible);
  const hasMore = visible < articles.length;

  return (
    <>
      <Nav />
      <main>
        <PageIntro>
          <section className="w-full py-16 md:py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <motion.div
                className="mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded bg-[#E6FAF4]">
                    <BookOpen className="h-3 w-3 text-[#3ADBA1]" />
                  </div>
                  <span className="text-sm text-[#6B7280]">Blogg</span>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <h1 className="text-3xl font-bold tracking-tight text-[#0F0F0F] md:text-4xl lg:text-5xl">
                    Les og{" "}
                    <span className="text-[#3ADBA1]">lær.</span>
                  </h1>
                  <p className="text-[#6B7280] max-w-sm leading-relaxed text-sm md:text-base">
                    Tips, innsikt og råd for bedrifter som vil ta nettet på alvor.
                  </p>
                </div>
              </motion.div>

              {/* Grid */}
              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <AnimatePresence>
                  {shown.map((article) => (
                    <motion.a
                      key={article.id}
                      href={`/artikler/${article.slug}`}
                      variants={cardVariants}
                      className="group block overflow-hidden rounded-2xl bg-[#F3F4F6] hover:-translate-y-1 transition-transform duration-200"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#E6FAF4] text-[#3ADBA1]">
                            {article.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-5 flex flex-col gap-3">
                        <h2 className="font-bold text-[#0F0F0F] leading-snug text-sm line-clamp-2 group-hover:text-[#3ADBA1] transition-colors">
                          {article.title}
                        </h2>
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
                </AnimatePresence>
              </motion.div>

              {/* Load more */}
              {hasMore && (
                <motion.div
                  className="mt-12 flex justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <button
                    onClick={() => setVisible((v) => v + PAGE_SIZE)}
                    className="px-8 py-3 rounded-full border border-gray-200 text-sm font-semibold text-[#6B7280] hover:border-[#3ADBA1] hover:text-[#3ADBA1] transition-colors"
                  >
                    Last inn flere
                  </button>
                </motion.div>
              )}
            </div>
          </section>
        </PageIntro>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
