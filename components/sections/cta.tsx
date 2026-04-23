"use client";
import { motion } from "framer-motion";

export function CTA() {
  function openChat() {
    if (typeof window !== "undefined" && (window as any).openChatWidget) {
      (window as any).openChatWidget();
    }
  }

  return (
    <section className="pt-24 pb-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#3ADBA1] rounded-2xl px-10 py-16 text-center"
        >
          <h2 className="text-4xl font-bold text-[#0F0F0F] mb-4">Klar for å komme i gang?</h2>
          <p className="text-[#0F0F0F]/60 mb-8 leading-relaxed">
            Fortell oss om bedriften din, så har vi nettsiden klar på 1–3 dager.
          </p>
          <button
            onClick={openChat}
            className="inline-flex items-center gap-2 bg-[#0F0F0F] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#1a1a1a] transition-colors"
          >
            Ta kontakt →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
