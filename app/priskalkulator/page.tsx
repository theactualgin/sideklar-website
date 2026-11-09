"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Nav } from "@/components/layout/nav";
import { ChatWidget } from "@/components/ui/chat-widget";
import { SiteButton } from "@/components/ui/site-button";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

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
      className={`w-full flex items-center gap-4 px-5 py-4 rounded-lg text-left transition-all duration-150 ${
        selected
          ? "shadow-[inset_0_0_0_2px_#0A2349] bg-white"
          : "shadow-[inset_0_0_0_1px_rgba(10,35,73,0.15)] bg-white hover:shadow-[inset_0_0_0_1px_#0A2349]"
      }`}
    >
      <div className={`shrink-0 w-5 h-5 ${multi ? "rounded-md" : "rounded-full"} border-2 flex items-center justify-center transition-colors duration-150 ${
        selected ? "border-[#0A2349] bg-[#0A2349]" : "border-[#0A2349]/30"
      }`}>
        {selected && <Check size={11} className="text-white" strokeWidth={3} />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-[#0A2349] text-sm">{label}</span>
          {tag && (
            <span className="text-xs font-medium text-[#0A2349]/60">
              {tag}
            </span>
          )}
          {!tag && price > 0 && (
            <span className="text-xs font-medium text-[#0A2349]/60">
              +{price.toLocaleString("nb-NO")} kr
            </span>
          )}
        </div>
        <p className="text-[#0A2349]/65 text-xs mt-0.5">{sub}</p>
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
    <section className="mt-24 max-w-2xl mx-auto">
      <div className="mb-8">
        <p className="mb-4 text-sm font-medium text-[#0A2349]/55">Spørsmål og svar</p>
        <h2 className="text-3xl font-bold tracking-tight text-[#0A2349] md:text-4xl">Vanlige spørsmål om pris</h2>
      </div>

      <div className="border-b border-[#0A2349]/10">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-t border-[#0A2349]/10">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="text-base font-semibold tracking-tight text-[#0A2349]">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-2xl leading-none text-[#0A2349] transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-[15px] leading-relaxed text-[#0A2349]/70">{item.a}</p>
                </div>
              </div>
            </div>
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
  const [sending, setSending] = useState(false);
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
        <div className="min-h-[80vh] bg-white flex flex-col items-center justify-center px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-[#0A2349] flex items-center justify-center mb-6">
            <Check size={28} className="text-[#0F9F70]" strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-bold text-[#0A2349] mb-3">Takk, {contact.navn}!</h1>
          <p className="text-[#0A2349]/65 max-w-sm">
            Vi har mottatt forespørselen din og tar kontakt på <span className="text-[#0A2349] font-medium">{contact.epost}</span> innen kort tid.
          </p>
          <SiteButton href="/" size="lg" className="mt-10">
            Tilbake til forsiden
          </SiteButton>
        </div>
        <ChatWidget />
      </>
    );
  }

  return (
    <>
      <Nav />
      <main className="min-h-[80vh] bg-white px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-4 text-sm font-medium text-[#0A2349]/55">
              Interaktiv kalkulator
            </div>
            <h1 className="mb-4 text-5xl font-bold leading-[1.05] tracking-tight text-[#0A2349] md:text-6xl">Hva vil din nettside koste?</h1>
            <p className="text-[#0A2349]/65">Svar på fem enkle spørsmål og få et estimat med en gang. Helt uforpliktende.</p>
          </div>

          {/* Card */}
          <div ref={cardRef} className="bg-white rounded-xl border border-[#0A2349]/15 overflow-hidden">
            {/* Card header */}
            <div className="flex items-center gap-4 px-6 py-5 border-b border-[#0A2349]/10">
              <div>
                <p className="font-semibold text-[#0A2349] text-sm">Priskalkulator</p>
                <p className="text-[#0A2349]/65 text-xs">Få et estimat på sekunder — helt uforpliktende</p>
              </div>
            </div>

            {/* Progress */}
            {!isResult && <div className="px-6 pt-5 pb-2">
              <div className="flex items-center justify-between text-xs text-[#0A2349]/65 mb-2">
                <span>Steg {step + 1} av {totalSteps}</span>
                <span className="font-semibold text-[#0F9F70]">{progress}%</span>
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
                      <h2 className="text-xl font-bold text-[#0A2349] mb-1">{currentStep.title}</h2>
                      <p className="text-[#0A2349]/65 text-sm mb-4">{currentStep.subtitle}</p>
                      {currentStep.type === "multi" && (
                        <div className="mb-5 text-sm text-[#0A2349]/60">
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
                      <div className="bg-[#0A2349] text-white rounded-xl overflow-hidden mb-4">
                        <div className="p-4">
                        <p className="text-white/60 text-sm font-medium mb-2">Estimert pris</p>
                        <p className="text-white font-bold mb-1">
                          <span className="text-3xl">{estimate.low.toLocaleString("nb-NO")} kr</span>
                          <span className="text-xl text-white/60 ml-2">– {estimate.high.toLocaleString("nb-NO")} kr</span>
                        </p>
                        <p className="text-white/65 text-xs mb-4">Veiledende estimat. Endelig pris fastsettes etter en prat om prosjektet ditt.</p>
                        <div className="flex flex-wrap gap-2">
                          {summaryTags.map((tag) => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80">{tag}</span>
                          ))}
                        </div>
                        </div>
                      </div>

                      {/* Contact form */}
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-semibold text-[#0A2349] mb-1.5 block">Navn</label>
                          <input
                            value={contact.navn}
                            onChange={(e) => setContact({ ...contact, navn: e.target.value })}
                            placeholder="Ola Nordmann"
                            className="w-full bg-white border border-[#0A2349]/20 rounded-lg px-4 py-3 text-[#0A2349] text-sm placeholder:text-[#0A2349]/35 focus:outline-none focus:border-[#0A2349]"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-[#0A2349] mb-1.5 flex items-center gap-1 block">
                            E-post <span className="text-[#0F9F70]">*</span>
                          </label>
                          <input
                            type="email"
                            value={contact.epost}
                            onChange={(e) => setContact({ ...contact, epost: e.target.value })}
                            placeholder="ola@bedrift.no"
                            className="w-full bg-white border border-[#0A2349]/20 rounded-lg px-4 py-3 text-[#0A2349] text-sm placeholder:text-[#0A2349]/35 focus:outline-none focus:border-[#0A2349]"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-semibold text-[#0A2349] mb-1.5 block">
                            Fortell litt om prosjektet <span className="text-[#0A2349]/65 font-normal">(valgfritt)</span>
                          </label>
                          <textarea
                            value={contact.melding}
                            onChange={(e) => setContact({ ...contact, melding: e.target.value })}
                            placeholder="Hva er målet med nettsiden? Hvem er målgruppen?"
                            rows={2}
                            className="w-full bg-white border border-[#0A2349]/20 rounded-lg px-4 py-3 text-[#0A2349] text-sm placeholder:text-[#0A2349]/35 focus:outline-none focus:border-[#0A2349] resize-none"
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
                    onClick={async () => {
                      setSending(true);
                      const summary = Object.entries(answers)
                        .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(", ") : v}`)
                        .join("\n");
                      await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          type: "priskalkulator",
                          name: contact.navn,
                          email: contact.epost,
                          message: `${contact.melding ? contact.melding + "\n\n" : ""}Kalkulatorsvar:\n${summary}`,
                        }),
                      }).catch(() => {});
                      setSending(false);
                      setSubmitted(true);
                    }}
                    disabled={!canProceed || sending}
                    className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold transition-all ${
                      canProceed && !sending
                        ? "bg-[#3ADBA1] text-white hover:bg-[#2BC48A]"
                        : "bg-gray-100 text-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Send forespørsel <ArrowRight size={16} />
                  </button>
                  <p className="text-center text-[#0A2349]/65 text-xs mt-3">Helt uforpliktende. Ingen spam — lover.</p>
                  <button
                    type="button"
                    onClick={back}
                    className="flex items-center gap-1 text-[#0A2349]/65 text-sm hover:text-[#0A2349] transition-colors mt-4"
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
                      className="flex items-center gap-2 text-[#0A2349]/65 text-sm hover:text-[#0A2349] transition-colors"
                    >
                      <ArrowLeft size={15} /> Tilbake
                    </button>
                  ) : (
                    <div />
                  )}
                  <SiteButton onClick={next} disabled={!canProceed} arrow>
                    Neste
                  </SiteButton>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Below-calculator content ─────────────────────────────── */}

        {/* 1. Editorial article */}
        <section className="mt-24 max-w-2xl mx-auto">
          <div className="mb-4 text-sm font-medium text-[#0A2349]/55">
            Prisguide
          </div>
          <h2 className="text-3xl font-bold text-[#0A2349] mb-4">Fra 0 til 100 — hva påvirker prisen?</h2>
          <p className="text-[#0A2349]/65 leading-relaxed mb-6">
            Prisen på en nettside avhenger av langt mer enn antall sider. Her er de viktigste faktorene vi ser på når vi setter opp et tilbud.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#0A2349] mb-2">Type nettside</h3>
              <p className="text-[#0A2349]/65 leading-relaxed">
                En enkel presentasjonsside for en lokal bedrift krever andre løsninger enn en nettbutikk med hundrevis av produkter. Jo mer funksjonalitet, jo mer arbeid — og jo høyere pris.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A2349] mb-2">Design og branding</h3>
              <p className="text-[#0A2349]/65 leading-relaxed">
                Et unikt, skreddersydd design tar tid å lage — men det gir også et mye sterkere inntrykk og høyere konverteringsrate. Vi tilbyr alt fra rene standardmaler til fullt tilpassede grensesnitt med animasjoner og avansert UX.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A2349] mb-2">Innhold og tekst</h3>
              <p className="text-[#0A2349]/65 leading-relaxed">
                Mange undervurderer hvor mye arbeid som går inn i godt innhold. Har du tekst og bilder klart, er vi raskere i gang. Trenger du hjelp med copywriting, foto eller grafisk materiale, tar vi oss av det også.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0A2349] mb-2">Integrasjoner og funksjoner</h3>
              <p className="text-[#0A2349]/65 leading-relaxed">
                Bookingsystemer, betalingsløsninger, CRM-integrasjoner og brukerinnlogging er alle eksempler på funksjoner som øker kompleksiteten. Disse kan likevel lønne seg raskt hvis de automatiserer oppgaver du ellers gjør manuelt.
              </p>
            </div>

            <blockquote className="border-l-2 border-[#0A2349] pl-5 py-1">
              <p className="text-[#0A2349] font-medium leading-relaxed">
                "En god nettside er ikke en kostnad — det er en investering. Vi jobber for at du skal se avkastning."
              </p>
            </blockquote>
          </div>
        </section>

        {/* 2. Features card */}
        <section className="mt-20 max-w-2xl mx-auto">
          <div className="border-t border-[#0A2349] pt-8">
            <div className="mb-6">
              <div className="mb-4 text-sm font-medium text-[#0A2349]/55">
                Alltid inkludert
              </div>
              <h2 className="text-2xl font-bold text-[#0A2349]">Hva får du — uansett pakke?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Klar på 3 dager", sub: "Fast leveringstid — ingen venteliste" },
                { label: "Rask og optimalisert", sub: "Lastetid under 1 sekund" },
                { label: "Mobilresponsiv", sub: "Perfekt på alle skjermstørrelser" },
                { label: "SSL og sikkerhet", sub: "HTTPS og grunnleggende sikkerhetstiltak" },
                { label: "30 dagers støtte", sub: "Vi er tilgjengelig etter levering" },
                { label: "Kontaktskjema", sub: "Ferdig oppsatt og klart til bruk" },
              ].map(({ label, sub }) => (
                <div key={label} className="border-t border-[#0A2349]/10 pt-4">
                  <div>
                    <p className="font-semibold text-[#0A2349] text-sm">{label}</p>
                    <p className="text-[#0A2349]/65 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Process steps */}
        <section className="mt-20 max-w-2xl mx-auto">
          <div className="mb-4 text-sm font-medium text-[#0A2349]/55">
            Prosessen
          </div>
          <h2 className="text-3xl font-bold text-[#0A2349] mb-10">Slik jobber vi</h2>
          <div className="space-y-0">
            {[
              { n: "01", title: "Du tar kontakt", body: "Send oss forespørselen via kalkulatoren eller kontaktskjemaet. Vi svarer deg innen én arbeidsdag med en uforpliktende prat." },
              { n: "02", title: "Vi lager en plan", body: "Basert på dine ønsker og estimatet setter vi opp en konkret plan med innhold, design og funksjonalitet. Du godkjenner før vi starter." },
              { n: "03", title: "Design og utvikling", body: "Vi bygger nettsiden din med fokus på brukeropplevelse, hastighet og konvertering. Du følger prosessen og kan gi tilbakemelding underveis." },
              { n: "04", title: "Levering og lansering", body: "Nettsiden leveres innen avtalt tid — som regel 3 virkedager. Vi setter opp domene, e-post og alt du trenger for å komme i gang." },
            ].map(({ n, title, body }, i) => (
              <div key={n} className="grid gap-2 border-t border-[#0A2349]/10 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <span className="text-sm font-medium text-[#0F9F70]">{n}</span>
                <div>
                  <h3 className="font-bold text-[#0A2349] text-base mb-1">{title}</h3>
                  <p className="text-[#0A2349]/65 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Price FAQ */}
        <PriceFaq />

        {/* 5. CTA card */}
        <section className="mt-20 max-w-2xl mx-auto mb-24">
          <div className="relative bg-white rounded-3xl p-10 text-center overflow-hidden border border-gray-100 shadow-xl shadow-gray-100/80">
            {/* teal top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#3ADBA1] rounded-t-3xl" />
            <h2 className="text-3xl font-bold text-[#0A2349] mb-3 mt-2">Klar for å bygge din nettside?</h2>
            <p className="text-[#0A2349]/65 mb-8 max-w-sm mx-auto leading-relaxed">
              Ta gjerne en uforpliktende prat. Bruk kalkulatoren over, eller send oss en melding direkte.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <SiteButton onClick={() => scrollToCard()} size="lg" arrow>
                Prøv kalkulatoren
              </SiteButton>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).openChatWidget) {
                    (window as any).openChatWidget();
                  }
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-[#0A2349] font-semibold hover:border-[#3ADBA1] transition-colors"
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
