"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ArrowLeft, ArrowRight, Check } from "lucide-react";

const TOPICS = [
  "Ny nettside",
  "Redesign av eksisterende side",
  "Grafisk design / visuell profil",
  "App / webapplikasjon",
  "Annet",
];

type Step = "topics" | "form" | "success";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("topics");
  const [topic, setTopic] = useState("");
  const [form, setForm] = useState({ navn: "", epost: "", melding: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (window as any).openChatWidget = () => setIsOpen(true);
    return () => { delete (window as any).openChatWidget; };
  }, []);

  function reset() {
    setStep("topics");
    setTopic("");
    setForm({ navn: "", epost: "", melding: "" });
  }

  function close() {
    setIsOpen(false);
    setTimeout(reset, 400);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, topic }),
      });
    } catch {}
    setLoading(false);
    setStep("success");
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="widget"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{ transformOrigin: "bottom right" }}
            className="w-[400px] bg-white rounded-2xl shadow-2xl shadow-gray-200 border border-gray-100 overflow-hidden flex flex-col max-h-[min(600px,80vh)]"
          >
            {/* Teal accent bar */}
            <div className="h-1 bg-[#3ADBA1]" />

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#3ADBA1] flex items-center justify-center shadow-md shadow-[#3ADBA1]/25">
                    <Check size={18} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
                </div>
                <div>
                  <p className="font-bold text-[#0F0F0F] text-sm leading-tight">Noah Lie</p>
                  <p className="text-[#3ADBA1] text-xs font-semibold">Designer & utvikler</p>
                </div>
              </div>
              <button
                onClick={close}
                className="p-1.5 rounded-full hover:bg-gray-100 transition-colors text-[#6B7280]"
              >
                <X size={15} />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto flex-1">
            <AnimatePresence mode="wait">
              {step === "topics" && (
                <motion.div
                  key="topics"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <div className="px-5 pt-4 pb-2">
                    <div className="bg-[#FAFAFA] border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3">
                      <p className="text-[#0F0F0F] text-sm leading-relaxed">
                        Hei! 👋 Trenger du hjelp med nettside eller noe annet digitalt? Si ifra!
                      </p>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-widest mb-3">
                      Hva kan vi hjelpe deg med?
                    </p>
                    <div className="space-y-2">
                      {TOPICS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => { setTopic(t); setStep("form"); }}
                          className="w-full text-left px-4 py-3 rounded-xl border border-gray-200 text-sm font-medium text-[#0F0F0F] hover:border-[#3ADBA1] hover:bg-[#3ADBA1]/5 transition-all"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === "form" && (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-5 pt-4 pb-5">
                    <button
                      type="button"
                      onClick={() => setStep("topics")}
                      className="flex items-center gap-1 text-[#6B7280] text-xs mb-4 hover:text-[#0F0F0F] transition-colors"
                    >
                      <ArrowLeft size={13} /> Tilbake
                    </button>

                    {/* Selected topic */}
                    <div className="w-full px-4 py-3 rounded-xl border border-[#3ADBA1] bg-[#3ADBA1]/8 text-[#0F0F0F] text-sm font-semibold mb-5">
                      {topic}
                    </div>

                    <form onSubmit={submit} className="space-y-4">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1.5">Navn</label>
                        <input
                          required
                          value={form.navn}
                          onChange={(e) => setForm({ ...form, navn: e.target.value })}
                          placeholder="Ditt navn"
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0F0F0F] placeholder:text-gray-300 focus:outline-none focus:border-[#3ADBA1] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1.5">E-post</label>
                        <input
                          required
                          type="email"
                          value={form.epost}
                          onChange={(e) => setForm({ ...form, epost: e.target.value })}
                          placeholder="din@epost.no"
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0F0F0F] placeholder:text-gray-300 focus:outline-none focus:border-[#3ADBA1] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1.5">
                          Noe mer vi bør vite? <span className="normal-case font-normal">(valgfritt)</span>
                        </label>
                        <textarea
                          value={form.melding}
                          onChange={(e) => setForm({ ...form, melding: e.target.value })}
                          placeholder="Frist, budsjett, spesielle ønsker..."
                          rows={3}
                          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-[#0F0F0F] placeholder:text-gray-300 focus:outline-none focus:border-[#3ADBA1] resize-none bg-white"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 rounded-xl bg-[#3ADBA1] text-white font-semibold text-sm hover:bg-[#2BC48A] transition-colors disabled:opacity-60"
                      >
                        {loading ? "Sender..." : "Send melding"}
                      </button>
                      <p className="text-center text-[#6B7280] text-xs">Vi svarer vanligvis innen 24 timer.</p>
                    </form>
                  </div>
                </motion.div>
              )}

              {step === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 py-10 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#3ADBA1]/15 flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-[#3ADBA1]" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-[#0F0F0F] mb-2">Takk, {form.navn}!</h3>
                  <p className="text-[#6B7280] text-sm">
                    Vi tar kontakt på <span className="text-[#0F0F0F] font-medium">{form.epost}</span> innen kort tid.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-6 text-sm text-[#3ADBA1] font-semibold hover:text-[#2BC48A] transition-colors"
                  >
                    Lukk
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating toggle button */}
      <motion.button
        type="button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => (isOpen ? close() : setIsOpen(true))}
        className="w-14 h-14 rounded-full bg-[#3ADBA1] text-white shadow-xl shadow-[#3ADBA1]/30 flex items-center justify-center hover:bg-[#2BC48A] transition-colors"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X size={22} />
            </motion.span>
          ) : (
            <motion.span
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle size={22} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
