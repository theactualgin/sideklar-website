"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { articles } from "@/lib/articles";
import { Clock } from "lucide-react";

const PAGE_SIZE = 6;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function ArtiklerPage() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = articles.slice(0, visible);
  const hasMore = visible < articles.length;

  return (
    <>
      <Nav />
      <main>
        <section className="py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] mb-3">Artikler</div>
              <h1 className="text-4xl font-bold text-[#0F0F0F] mb-4">Les og lær</h1>
              <p className="text-[#6B7280] max-w-xl leading-relaxed">
                Tips, innsikt og råd for bedrifter som vil ta nettet på alvor.
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {shown.map((article) => (
                <motion.a
                  key={article.id}
                  href={`/artikler/${article.slug}`}
                  variants={cardVariants}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-[#0F0F0F] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
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
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
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

            {hasMore && (
              <motion.div
                className="mt-12 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <button
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="px-8 py-3 rounded-lg border border-gray-200 text-sm font-semibold text-[#6B7280] hover:border-[#3ADBA1] hover:text-[#3ADBA1] transition-colors"
                >
                  Last inn flere
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
