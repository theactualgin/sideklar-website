"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Nav } from "@/components/layout/nav";
import { ChatWidget } from "@/components/ui/chat-widget";
import { Calculator, ArrowRight, ArrowLeft, Check, ChevronDown, Clock, Zap, Globe, Shield, Headphones, FileText } from "lucide-react";

// ─── Step definitions ────────────────────────────────────────────────────────

const STEPS = [
  {
    title: "Hva trenger du?",
    subtitle: "Velg den typen nettside som passer best til ditt prosjekt.",
    type: "radio" as const,
    key: "type",
    options: [
      { id: "enkel", label: "Enkel informasjonsside", sub: "1–5 sider, ingen CMS", price: 5000 },
      { id: "bedrift", label: "Bedriftsside med CMS", sub: "5–15 sider, redigerbart innhold", price: 12000 },
      { id: "nettbutikk", label: "Nettbutikk", sub: "E-commerce med produkter og betaling", price: 30000 },
      { id: "webapp", label: "Webapplikasjon / dashboard", sub: "Skreddersydd app eller verktøy", price: 50000 },
    ],
  },
  {
    title: "Designnivå",
    subtitle: "Jo mer skreddersydd, jo sterkere inntrykk — og jo høyere konvertering.",
    type: "radio" as const,
    key: "design",
    options: [
      { id: "standard", label: "Standardmal", sub: "Minimalt tilpasset mal", price: 0, tag: "inkludert" },
      { id: "skreddersydd", label: "Skreddersydd design", sub: "Unikt uttrykk laget for deg", price: 5000 },
      { id: "premium", label: "Premium design", sub: "Animasjoner, avansert UI/UX", price: 15000 },
    ],
  },
  {
    title: "Funksjonalitet",
    subtitle: "Velg det du trenger. Kontaktskjema er alltid inkludert.",
    type: "multi" as const,
    key: "funksjoner",
    options: [
      { id: "seo", label: "SEO-optimalisering", sub: "Bli rangert høyere i søkeresultatene", price: 3000 },
      { id: "booking", label: "Bookingsystem", sub: "Online timebestilling", price: 8000 },
      { id: "betaling", label: "Betalingsløsning", sub: "Stripe, Vipps eller annet", price: 10000 },
      { id: "integrasjoner", label: "Integrasjoner", sub: "CRM, e-post, andre systemer", price: 8000 },
      { id: "flersprak", label: "Flerspråklig", sub: "Norsk + engelsk (eller flere)", price: 7000 },
      { id: "innlogging", label: "Brukerinnlogging", sub: "Registrering, pålogging, roller", price: 10000 },
    ],
  },
  {
    title: "Innhold",
    subtitle: "Har du tekst og bilder klare, eller trenger du hjelp?",
    type: "radio" as const,
    key: "innhold",
    options: [
      { id: "selv", label: "Jeg leverer alt selv", sub: "Tekst, bilder og innhold klart", price: 0, tag: "inkludert" },
      { id: "tekst", label: "Trenger hjelp med tekst", sub: "Copywriting og redaksjon", price: 5000 },
      { id: "bilder", label: "Trenger hjelp med bilder", sub: "Foto, illustrasjoner, grafikk", price: 5000 },
      { id: "alt", label: "Trenger hjelp med alt", sub: "Fullpakke innholdsproduksjon", price: 8000 },
    ],
  },
  {
    title: "Hvor mange sider?",
    subtitle: "Tenk på antall unike undersider nettsiden skal ha.",
    type: "radio" as const,
    key: "sider",
    options: [
      { id: "1-3", label: "1–3 sider", sub: "Enkel og kompakt", price: 0 },
      { id: "4-8", label: "4–8 sider", sub: "Standard bedriftsside", price: 3000 },
      { id: "9-15", label: "9–15 sider", sub: "Større nettsted", price: 8000 },
      { id: "15+", label: "15+ sider", sub: "Enterprise / portal", price: 20000 },
    ],
  },
];

// ─── Price calculation ────────────────────────────────────────────────────────

function calcEstimate(answers: Record<string, string | string[]>) {
  let base = 0;

  const typeOpt = STEPS[0].options.find((o) => o.id === answers.type);
  if (typeOpt) base += typeOpt.price;

  const designOpt = STEPS[1].options.find((o) => o.id === answers.design);
  if (designOpt) base += designOpt.price;

  const valgteFunksjoner = (answers.funksjoner as string[]) ?? [];
  STEPS[2].options.forEach((o) => {
    if (valgteFunksjoner.includes(o.id)) base += o.price;
  });

  const innholdOpt = STEPS[3].options.find((o) => o.id === answers.innhold);
  if (innholdOpt) base += innholdOpt.price;

  const siderOpt = STEPS[4].options.find((o) => o.id === answers.sider);
  if (siderOpt) base += siderOpt.price;


  return { low: base, high: Math.round(base * 1.3) };
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function OptionCard({
  label, sub, price, tag, selected, onClick, multi,
}: {
  label: string; sub: string; price: number; tag?: string; selected: boolean; onClick: () => void; multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-150 ${
        selected
          ? "shadow-[inset_0_0_0_3px_#3ADBA1] bg-[#3ADBA1]/8"
          : "shadow-[inset_0_0_0_1px_#E5E7EB] bg-[#FAFAFA] hover:shadow-[inset_0_0_0_1.5px_#3ADBA1]"
      }`}
    >
      <div className={`shrink-0 w-5 h-5 ${multi ? "rounded-md" : "rounded-full"} border-2 flex items-center justify-center transition-colors duration-150 ${
        selected ? "border-[#3ADBA1] bg-[#3ADBA1]" : "border-gray-300"
      }`}>
        {selected && <Check size={11} className="text-white" strokeWidth={3} />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-[#0F0F0F] text-sm">{label}</span>
          {tag && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-[#6B7280]">
              {tag}
            </span>
          )}
          {!tag && price > 0 && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#3ADBA1]/15 text-[#3ADBA1]">
              +{price.toLocaleString("nb-NO")} kr
            </span>
          )}
        </div>
        <p className="text-[#6B7280] text-xs mt-0.5">{sub}</p>
      </div>
    </button>
  );
}

// ─── Price FAQ ────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  { q: "Hva er inkludert i prisen?", a: "Alle pakker inkluderer design, utvikling, responsivt mobildesign, SSL-sertifikat, kontaktskjema og 30 dagers støtte etter levering. Hosting og domene kommer i tillegg." },
  { q: "Kan jeg få en nettside billigere hos noen andre?", a: "Ja, det kan du. Det finnes gratis maler, billige freelancere og automatiserte verktøy. Men resultatet gjenspeiler ofte prisen. En profesjonell nettside er en investering — den selger for deg 24/7 og bygger troverdighet over tid." },
  { q: "Kan jeg endre på nettsiden selv etterpå?", a: "Ja! Nettsider med CMS (innholdssystem) lar deg enkelt redigere tekst og bilder uten teknisk kunnskap. Vi gir deg en kort opplæring ved levering." },
  { q: "Hva skjer hvis jeg vil ha endringer etter levering?", a: "De første 30 dagene tilbyr vi gratis mindre justeringer. Etter det tilbyr vi løpende vedlikeholdsavtaler eller vi fakturerer per time." },
  { q: "Jobber dere alene?", a: "Ja — du kommuniserer direkte med oss gjennom hele prosjektet. Ingen prosjektledere eller mellomledd. Det betyr rask respons og full kontroll på helheten." },
  { q: "Hvor lang tid tar det å lage en nettside?", a: "Standardleveringen er 3 virkedager fra vi har alt innhold klart. Komplekse prosjekter med skreddersydd design eller avansert funksjonalitet kan ta 1–2 uker." },
{ q: "Er estimatet fra kalkulatoren bindende?", a: "Nei — kalkulatoren gir et veiledende estimat basert på standardvalg. Endelig pris avtales etter en kort prat om prosjektet ditt." },
  { q: "Kan dere redesigne en nettside jeg allerede har?", a: "Ja. Vi kan redesigne og fornye eksisterende nettsider — enten du bruker Webflow, WordPress, Framer eller noe annet — uten at du må bytte system. Vi beholder det som fungerer og oppdaterer design og brukeropplevelse. Pris og tidslinje avhenger av omfanget." },
];

function PriceFaq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="mt-20 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#3ADBA1]/15 mb-4"
        >
          <Calculator size={22} className="text-[#3ADBA1]" />
        </motion.div>
        <div className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] mb-3">Spørsmål og svar</div>
        <h2 className="text-4xl font-bold text-[#0F0F0F]">Vanlige spørsmål om pris</h2>
      </motion.div>

      <div className="space-y-3">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`bg-white rounded-xl border overflow-hidden transition-colors duration-200 ${isOpen ? "border-[#3ADBA1]/50 shadow-sm" : "border-gray-100"}`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-[#0F0F0F] pr-4">{item.q}</span>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-[#3ADBA1]"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 text-[#6B7280] leading-relaxed text-sm">{item.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function PriskalkulatorPage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);

  function scrollToCard() {
    if (!cardRef.current) return;
    const cardBottom = cardRef.current.getBoundingClientRect().bottom + window.scrollY;
    const target = cardBottom - window.innerHeight + 32;
    window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
  }

  useEffect(() => { scrollToCard(); }, []);

  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [contact, setContact] = useState({ navn: "", epost: "", melding: "" });
  const [submitted, setSubmitted] = useState(false);
  const [dir, setDir] = useState(1);

  const totalSteps = STEPS.length + 1; // +1 for result step
  const progress = Math.round(((step + 1) / totalSteps) * 100);
  const currentStep = STEPS[step];
  const isResult = step === STEPS.length;

  useEffect(() => {
    if (!isResult || !cardRef.current) return;
    setTimeout(() => {
      const cardBottom = cardRef.current!.getBoundingClientRect().bottom + window.scrollY;
      const target = cardBottom - window.innerHeight + 32;
      window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
    }, 350);
  }, [isResult]);

  const answer = answers[currentStep?.key ?? ""] ?? (currentStep?.type === "multi" ? [] : "");

  const canProceed = isResult
    ? contact.navn && contact.epost
    : currentStep?.type === "multi"
    ? true
    : !!answer;

  function select(id: string) {
    if (!currentStep) return;
    if (currentStep.type === "multi") {
      const current = (answers[currentStep.key] as string[]) ?? [];
      setAnswers({
        ...answers,
        [currentStep.key]: current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
      });
    } else {
      const updated = { ...answers, [currentStep.key]: id };
      setAnswers(updated);
      // auto-advance for radio steps after a short pause
      setTimeout(() => {
        setDir(1);
        setStep((s) => s + 1);
      }, 320);
    }
  }

  function next() {
    setDir(1);
    setStep((s) => s + 1);
  }

  function back() {
    setDir(-1);
    setStep((s) => s - 1);
  }

  const estimate = calcEstimate(answers);

  // collect selected option labels for the summary tags
  const summaryTags: string[] = [];
  STEPS.forEach((s) => {
    if (s.type === "multi") {
      const selected = (answers[s.key] as string[]) ?? [];
      s.options.filter((o) => selected.includes(o.id)).forEach((o) => summaryTags.push(o.label));
    } else {
      const opt = s.options.find((o) => o.id === answers[s.key]);
      if (opt) summaryTags.push(opt.label);
    }
  });

  if (submitted) {
    return (
      <>
        <Nav />
        <div className="min-h-[80vh] bg-[#FAFAFA] flex flex-col items-center justify-center px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#3ADBA1]/15 flex items-center justify-center mb-6">
            <Check size={28} className="text-[#3ADBA1]" strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-bold text-[#0F0F0F] mb-3">Takk, {contact.navn}!</h1>
          <p className="text-[#6B7280] max-w-sm">
            Vi har mottatt forespørselen din og tar kontakt på <span className="text-[#0F0F0F] font-medium">{contact.epost}</span> innen kort tid.
          </p>
          <a href="/" className="mt-10 px-6 py-3 rounded-xl bg-[#3ADBA1] text-white font-semibold hover:bg-[#2BC48A] transition-colors">
            Tilbake til forsiden
          </a>
        </div>
        <ChatWidget />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="min-h-[80vh] bg-[#FAFAFA] py-16 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3ADBA1]/40 bg-[#3ADBA1]/10 text-[#3ADBA1] text-xs font-semibold uppercase tracking-widest mb-5">
              ⚡ Interaktiv kalkulator
            </div>
            <h1 className="text-4xl font-bold text-[#0F0F0F] mb-3">Hva vil din nettside koste?</h1>
            <p className="text-[#6B7280]">Svar på fem enkle spørsmål og få et estimat med en gang. Helt uforpliktende.</p>
          </div>

          {/* Card */}
          <div ref={cardRef} className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 overflow-hidden">
            <div className="h-1 bg-[#3ADBA1]" />
            {/* Card header */}
            <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-[#3ADBA1] flex items-center justify-center shrink-0 shadow-md shadow-[#3ADBA1]/25">
                <Calculator size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-[#0F0F0F] text-sm">Priskalkulator</p>
                <p className="text-[#6B7280] text-xs">Få et estimat på sekunder — helt uforpliktende</p>
              </div>
            </div>

            {/* Progress */}
            {!isResult && <div className="px-6 pt-5 pb-2">
              <div className="flex items-center justify-between text-xs text-[#6B7280] mb-2">
                <span>Steg {step + 1} av {totalSteps}</span>
                <span className="font-semibold text-[#3ADBA1]">{progress}%</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#3ADBA1] rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            </div>}

            {/* Step content */}
            <div className={`px-6 ${isResult ? "pt-4 pb-2" : "py-6 min-h-[360px]"}`}>
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={step}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -30 }}
                  transition={{ duration: 0.25 }}
                >
                  {!isResult ? (
                    <>
                      <h2 className="text-xl font-bold text-[#0F0F0F] mb-1">{currentStep.title}</h2>
                      <p className="text-[#6B7280] text-sm mb-4">{currentStep.subtitle}</p>
                      {currentStep.type === "multi" && (
                        <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#3ADBA1]/8 border border-[#3ADBA1]/20 text-[#2BC48A] text-sm mb-5">
                          <span className="shrink-0">ⓘ</span>
                          <span>Du kan velge null eller flere. Gå videre uten valg hvis du er usikker.</span>
                        </div>
                      )}
                      <div className={currentStep.type === "multi" ? "grid grid-cols-2 gap-3" : "space-y-3"}>
                        {currentStep.options.map((opt) => (
                          <OptionCard
                            key={opt.id}
                            label={opt.label}
                            sub={opt.sub}
                            price={opt.price}
                            tag={"tag" in opt ? (opt as any).tag : undefined}
                            selected={
                              currentStep.type === "multi"
                                ? ((answer as string[]) ?? []).includes(opt.id)
                                : answer === opt.id
                            }
                            onClick={() => select(opt.id)}
                            multi={currentStep.type === "multi"}
                          />
                        ))}
                      </div>
                    </>
                  ) : (
                    <div>
                      {/* Price card */}
                      <div className="bg-[#3ADBA1]/10 border border-[#3ADBA1] rounded-2xl overflow-hidden mb-4">
                        <div className="h-1 bg-[#3ADBA1]" />
                        <div className="p-4">
                        <p className="text-[#3ADBA1] text-xs font-semibold uppercase tracking-widest mb-2">Estimert pris</p>
                        <p className="text-[#0F0F0F] font-bold mb-1">
                          <span className="text-3xl">{estimate.low.toLocaleString("nb-NO")} kr</span>
                          <span className="text-xl text-[#0F0F0F]/50 ml-2">– {estimate.high.toLocaleString("nb-NO")} kr</span>
                        </p>
                        <p className="text-[#6B7280] text-xs mb-4">Veiledende estimat. Endelig pris fastsettes etter en prat om prosjektet ditt.</p>
                        <div className="flex flex-wrap gap-2">
                          {summaryTags.map((tag) => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-[#0F0F0F]/8 text-[#0F0F0F]/70">{tag}</span>
                          ))}
                        </div>
                        </div>
                      </div>

                      {/* Contact form */}
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-semibold text-[#0F0F0F] mb-1.5 block">Navn</label>
                          <input
                            value={contact.navn}
                            onChange={(e) => setContact({ ...contact, navn: e.target.value })}
                            placeholder="Ola Nordmann"
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#0F0F0F] text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#3ADBA1]"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-[#0F0F0F] mb-1.5 flex items-center gap-1 block">
                            E-post <span className="text-[#3ADBA1]">*</span>
                          </label>
                          <input
                            type="email"
                            value={contact.epost}
                            onChange={(e) => setContact({ ...contact, epost: e.target.value })}
                            placeholder="ola@bedrift.no"
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#0F0F0F] text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#3ADBA1]"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-[#0F0F0F] mb-1.5 block">
                            Fortell litt om prosjektet <span className="text-[#6B7280] font-normal">(valgfritt)</span>
                          </label>
                          <textarea
                            value={contact.melding}
                            onChange={(e) => setContact({ ...contact, melding: e.target.value })}
                            placeholder="Hva er målet med nettsiden? Hvem er målgruppen?"
                            rows={2}
                            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#0F0F0F] text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#3ADBA1] resize-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="px-6 pb-6">
              {isResult ? (
                <div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    disabled={!canProceed}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold transition-all ${
                      canProceed
                        ? "bg-[#3ADBA1] text-white hover:bg-[#2BC48A]"
                        : "bg-gray-100 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Send forespørsel <ArrowRight size={16} />
                  </button>
                  <p className="text-center text-[#6B7280] text-xs mt-3">Helt uforpliktende. Ingen spam — lover.</p>
                  <button
                    type="button"
                    onClick={back}
                    className="flex items-center gap-1 text-[#6B7280] text-sm hover:text-[#0F0F0F] transition-colors mt-4"
                  >
                    <ArrowLeft size={14} /> Endre valg
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={back}
                      className="flex items-center gap-2 text-[#6B7280] text-sm hover:text-[#0F0F0F] transition-colors"
                    >
                      <ArrowLeft size={15} /> Tilbake
                    </button>
                  ) : (
                    <div />
                  )}
                  <button
                    type="button"
                    onClick={next}
                    disabled={!canProceed}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                      canProceed
                        ? "bg-[#3ADBA1] text-white hover:bg-[#2BC48A]"
                        : "bg-gray-100 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Neste <ArrowRight size={15} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Below-calculator content ─────────────────────────────── */}

        {/* 1. Editorial article */}
        <section className="mt-24 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3ADBA1]/40 bg-[#3ADBA1]/10 text-[#3ADBA1] text-xs font-semibold uppercase tracking-widest mb-6">
            Prisguide
          </div>
          <h2 className="text-3xl font-bold text-[#0F0F0F] mb-4">Fra 0 til 100 — hva påvirker prisen?</h2>
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Prisen på en nettside avhenger av langt mer enn antall sider. Her er de viktigste faktorene vi ser på når vi setter opp et tilbud.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#0F0F0F] mb-2">Type nettside</h3>
              <p className="text-[#6B7280] leading-relaxed">
                En enkel presentasjonsside for en lokal bedrift krever andre løsninger enn en nettbutikk med hundrevis av produkter. Jo mer funksjonalitet, jo mer arbeid — og jo høyere pris.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F0F0F] mb-2">Design og branding</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Et unikt, skreddersydd design tar tid å lage — men det gir også et mye sterkere inntrykk og høyere konverteringsrate. Vi tilbyr alt fra rene standardmaler til fullt tilpassede grensesnitt med animasjoner og avansert UX.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F0F0F] mb-2">Innhold og tekst</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Mange undervurderer hvor mye arbeid som går inn i godt innhold. Har du tekst og bilder klart, er vi raskere i gang. Trenger du hjelp med copywriting, foto eller grafisk materiale, tar vi oss av det også.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F0F0F] mb-2">Integrasjoner og funksjoner</h3>
              <p className="text-[#6B7280] leading-relaxed">
                Bookingsystemer, betalingsløsninger, CRM-integrasjoner og brukerinnlogging er alle eksempler på funksjoner som øker kompleksiteten. Disse kan likevel lønne seg raskt hvis de automatiserer oppgaver du ellers gjør manuelt.
              </p>
            </div>

            <blockquote className="border-l-4 border-[#3ADBA1] pl-5 py-1">
              <p className="text-[#0F0F0F] font-medium leading-relaxed">
                "En god nettside er ikke en kostnad — det er en investering. Vi jobber for at du skal se avkastning."
              </p>
            </blockquote>
          </div>
        </section>

        {/* 2. Features card */}
        <section className="mt-20 max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/80 p-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3ADBA1]/40 bg-[#3ADBA1]/10 text-[#3ADBA1] text-xs font-semibold uppercase tracking-widest mb-4">
                Alltid inkludert
              </div>
              <h2 className="text-2xl font-bold text-[#0F0F0F]">Hva får du — uansett pakke?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Clock, label: "Klar på 3 dager", sub: "Fast leveringstid — ingen venteliste" },
                { icon: Zap, label: "Rask og optimalisert", sub: "Lastetid under 1 sekund" },
                { icon: Globe, label: "Mobilresponsiv", sub: "Perfekt på alle skjermstørrelser" },
                { icon: Shield, label: "SSL og sikkerhet", sub: "HTTPS og grunnleggende sikkerhetstiltak" },
                { icon: Headphones, label: "30 dagers støtte", sub: "Vi er tilgjengelig etter levering" },
                { icon: FileText, label: "Kontaktskjema", sub: "Ferdig oppsatt og klart til bruk" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-3 p-4 rounded-2xl bg-[#FAFAFA] border border-gray-100">
                  <div className="w-9 h-9 rounded-xl bg-[#3ADBA1]/15 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-[#3ADBA1]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F0F0F] text-sm">{label}</p>
                    <p className="text-[#6B7280] text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Process steps */}
        <section className="mt-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3ADBA1]/40 bg-[#3ADBA1]/10 text-[#3ADBA1] text-xs font-semibold uppercase tracking-widest mb-6">
            Prosessen
          </div>
          <h2 className="text-3xl font-bold text-[#0F0F0F] mb-10">Slik jobber vi</h2>
          <div className="space-y-0">
            {[
              { n: "01", title: "Du tar kontakt", body: "Send oss forespørselen via kalkulatoren eller kontaktskjemaet. Vi svarer deg innen én arbeidsdag med en uforpliktende prat." },
              { n: "02", title: "Vi lager en plan", body: "Basert på dine ønsker og estimatet setter vi opp en konkret plan med innhold, design og funksjonalitet. Du godkjenner før vi starter." },
              { n: "03", title: "Design og utvikling", body: "Vi bygger nettsiden din med fokus på brukeropplevelse, hastighet og konvertering. Du følger prosessen og kan gi tilbakemelding underveis." },
              { n: "04", title: "Levering og lansering", body: "Nettsiden leveres innen avtalt tid — som regel 3 virkedager. Vi setter opp domene, e-post og alt du trenger for å komme i gang." },
            ].map(({ n, title, body }, i) => (
              <div key={n} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-[#3ADBA1] bg-[#3ADBA1]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#3ADBA1] text-xs font-bold">{n}</span>
                  </div>
                  {i < 3 && <div className="w-px flex-1 bg-gray-200 my-2" />}
                </div>
                <div className={`pb-8 ${i === 3 ? "" : ""}`}>
                  <h3 className="font-bold text-[#0F0F0F] text-base mb-1">{title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Testimonials */}
        <section className="mt-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3ADBA1]/40 bg-[#3ADBA1]/10 text-[#3ADBA1] text-xs font-semibold uppercase tracking-widest mb-6">
            Kundene sier
          </div>
          <h2 className="text-3xl font-bold text-[#0F0F0F] mb-8">Hva kundene sier</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { quote: "Nettsiden var klar på tre dager og overgikk alle forventninger. Enkel prosess og toppresultat.", name: "Kari Andersen", role: "Daglig leder, Andersen Regnskap" },
              { quote: "Vi fikk dobbelt så mange henvendelser etter at den nye nettsiden gikk live. Imponerende arbeid.", name: "Thomas Bakke", role: "Grunder, Bakke Konsult" },
              { quote: "Prisen var svært konkurransedyktig og leveransen var rask. Anbefales på det sterkeste!", name: "Lise Strand", role: "Eier, Strand Blomster" },
              { quote: "Profesjonell kommunikasjon og et sluttprodukt vi er stolte av å vise frem til kundene våre.", name: "Erik Haugen", role: "Partner, Haugen & Co" },
            ].map(({ quote, name, role }) => (
              <div key={name} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#3ADBA1]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#0F0F0F] text-sm leading-relaxed mb-4">"{quote}"</p>
                <div>
                  <p className="font-semibold text-[#0F0F0F] text-sm">{name}</p>
                  <p className="text-[#6B7280] text-xs">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Price FAQ */}
        <PriceFaq />

        {/* 6. CTA card */}
        <section className="mt-20 max-w-2xl mx-auto mb-24">
          <div className="relative bg-white rounded-3xl p-10 text-center overflow-hidden border border-gray-100 shadow-xl shadow-gray-100/80">
            {/* teal top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#3ADBA1] rounded-t-3xl" />
            <h2 className="text-3xl font-bold text-[#0F0F0F] mb-3 mt-2">Klar for å bygge din nettside?</h2>
            <p className="text-[#6B7280] mb-8 max-w-sm mx-auto leading-relaxed">
              Ta gjerne en uforpliktende prat. Bruk kalkulatoren over, eller send oss en melding direkte.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollToCard()}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3ADBA1] text-white font-bold hover:bg-[#2BC48A] transition-colors"
              >
                Prøv kalkulatoren <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).openChatWidget) {
                    (window as any).openChatWidget();
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-[#0F0F0F] font-semibold hover:border-[#3ADBA1] transition-colors"
              >
                Ta kontakt direkte
              </button>
            </div>
          </div>
        </section>
      </main>
      <ChatWidget />
    </>
  );
}
