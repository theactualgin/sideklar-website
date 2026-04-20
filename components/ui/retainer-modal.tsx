"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const PLANS = ["Simpel", "Vekst", "Full Drift"];

type Tab = "helsesjekk" | "retainer";

interface Props {
  open: boolean;
  defaultPlan?: string;
  defaultTab?: Tab;
  onClose: () => void;
}

export function RetainerModal({ open, defaultPlan, defaultTab = "retainer", onClose }: Props) {
  const [tab, setTab] = useState<Tab>(defaultTab);
  const [plan, setPlan] = useState(defaultPlan ?? "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) {
      setTab(defaultTab);
      if (defaultPlan) setPlan(defaultPlan);
      setSubmitted(false);
    }
  }, [open, defaultTab, defaultPlan]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: tab, plan: tab === "retainer" ? plan : undefined, name, email, url, message }),
    });
    setLoading(false);
    setSubmitted(true);
  }

  const inputCls = "w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-[#0F0F0F] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3ADBA1] transition";
  const labelCls = "block text-[10px] font-bold uppercase tracking-widest text-[#6B7280] mb-1.5";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-[#0F0F0F] transition"
            >
              <X size={18} />
            </button>

            <div className="p-7">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#3ADBA1]/15 flex items-center justify-center mx-auto mb-4">
                    <svg viewBox="0 0 20 20" fill="none" className="w-6 h-6 text-[#3ADBA1]">
                      <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#0F0F0F] mb-1">Sendt!</h3>
                  <p className="text-sm text-[#6B7280]">Vi svarer vanligvis innen 24 timer.</p>
                  <button onClick={onClose} className="mt-6 px-5 py-2.5 rounded-xl bg-[#3ADBA1] text-white text-sm font-semibold hover:bg-[#2BC48A] transition">
                    Lukk
                  </button>
                </div>
              ) : (
                <>
                  {/* Title */}
                  <h2 className="text-xl font-bold text-[#0F0F0F] mb-1">
                    {tab === "helsesjekk" ? "Gratis helsesjekk" : "Bestill retainer-prat"}
                  </h2>
                  <p className="text-sm text-[#6B7280] mb-5">
                    {tab === "helsesjekk"
                      ? "Send inn lenke og kort status, så får du konkrete funn og anbefalt neste steg."
                      : "Fortell kort om nettsiden og behovet, så foreslår vi riktig retainerpakke."}
                  </p>

                  {/* Tabs */}
                  <div className="mb-6">
                    <p className={labelCls}>HVA ØNSKER DU?</p>
                    <div className="flex w-full gap-3">
                      <button
                        type="button"
                        onClick={() => setTab("helsesjekk")}
                        className={`flex-1 py-3.5 text-sm font-semibold rounded-xl transition ${tab === "helsesjekk" ? "ring-[2.5px] ring-[#3ADBA1] text-[#0F0F0F] bg-white" : "ring-1 ring-gray-200 text-[#6B7280] bg-white hover:text-[#0F0F0F]"}`}
                      >
                        Gratis helsesjekk
                      </button>
                      <button
                        type="button"
                        onClick={() => setTab("retainer")}
                        className={`flex-1 py-3.5 text-sm font-semibold rounded-xl transition ${tab === "retainer" ? "ring-[2.5px] ring-[#3ADBA1] text-[#0F0F0F] bg-white" : "ring-1 ring-gray-200 text-[#6B7280] bg-white hover:text-[#0F0F0F]"}`}
                      >
                        Bestill retainer
                      </button>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {tab === "retainer" && (
                      <div>
                        <label className={labelCls}>PAKKE</label>
                        <select
                          value={plan}
                          onChange={e => setPlan(e.target.value)}
                          className={inputCls}
                        >
                          <option value="">Velg pakke (valgfritt)</option>
                          <option value="Simpel">Simpel (1 190 kr/mnd ved årsbetaling — 14 280 kr/år)</option>
                          <option value="Vekst">Vekst (2 999 kr/mnd ved årsbetaling — 35 988 kr/år)</option>
                          <option value="Full Drift">Full Drift (6 499 kr/mnd ved årsbetaling — 77 988 kr/år)</option>
                          <option value="Usikker">Usikker — vil ha anbefaling</option>
                        </select>
                      </div>
                    )}

                    <div>
                      <label className={labelCls}>NAVN</label>
                      <input required value={name} onChange={e => setName(e.target.value)} placeholder="Ditt navn" className={inputCls} />
                    </div>

                    <div>
                      <label className={labelCls}>E-POST</label>
                      <input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="din@epost.no" className={inputCls} />
                    </div>

                    {tab === "helsesjekk" ? (
                      <div>
                        <label className={labelCls}>NETTSIDE-URL <span className="normal-case font-normal">(valgfritt)</span></label>
                        <input value={url} onChange={e => setUrl(e.target.value)} placeholder="sideklar.no eller https://sideklar.no" className={inputCls} />
                      </div>
                    ) : null}

                    <div>
                      <label className={labelCls}>
                        {tab === "helsesjekk" ? <>HVA VIL DU AT VI SKAL SJEKKE? <span className="normal-case font-normal">(valgfritt)</span></> : <>NETTSIDE OG BEHOV <span className="normal-case font-normal">(valgfritt)</span></>}
                      </label>
                      <textarea
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        rows={4}
                        placeholder={tab === "helsesjekk" ? "F.eks. SEO-feil, treg lastetid, mobilvisning eller checkout-flyt ..." : "Lenke til nettsiden, mål for nettstedet, og hva dere trenger hjelp med ..."}
                        className={`${inputCls} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-[#3ADBA1] text-white font-semibold text-sm hover:bg-[#2BC48A] transition disabled:opacity-60"
                    >
                      {loading ? "Sender..." : tab === "helsesjekk" ? "Send inn for gratis helsesjekk" : "Send forespørsel om retainer"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
