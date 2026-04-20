# Sideklar Website Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild Sideklar.no as a modern minimal Next.js app with purple accent color, rotating hero headline, and framer-motion animations.

**Architecture:** Single-page Next.js app (App Router) with server components for static sections and `"use client"` only where interactivity is needed (Nav mobile menu, RotateWords, FAQ accordion). Each section is its own component file. `app/page.tsx` assembles them all.

**Tech Stack:** Next.js (App Router), Tailwind CSS v4, TypeScript, framer-motion, lucide-react, shadcn Accordion

---

## File Map

| File | Purpose |
|---|---|
| `app/layout.tsx` | Root layout — Inter font, metadata, globals |
| `app/globals.css` | Add purple CSS variables |
| `app/page.tsx` | Assembles all sections |
| `components/ui/rotate-words.tsx` | Rotating headline animation |
| `components/layout/nav.tsx` | Sticky nav with mobile menu |
| `components/layout/footer.tsx` | Dark footer |
| `components/sections/hero.tsx` | Hero with RotateWords + stats |
| `components/sections/how-it-works.tsx` | 3-step process section |
| `components/sections/pricing.tsx` | 3 pricing cards |
| `components/sections/faq.tsx` | FAQ accordion |

---

## Task 1: Setup — fonts, CSS variables, layout

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Update `app/layout.tsx` to use Inter font and correct metadata**

```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sideklar | Nettsider for bedrifter",
  description: "Vi lager profesjonelle nettsider som gir bedriften din flere kunder. Klar på 3 dager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#0F0F0F] antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Add purple CSS variables to `app/globals.css`**

Add after the existing `:root` block:

```css
:root {
  --purple: #7C3AED;
  --purple-dark: #6D28D9;
  --purple-tint: #F3F0FF;
  --off-white: #FAFAFA;
  --near-black: #0F0F0F;
  --muted: #6B7280;
}
```

- [ ] **Step 3: Verify it compiles**

```bash
cd /Users/noah/Sideklar.no/app && npm run build 2>&1 | tail -5
```
Expected: no errors

- [ ] **Step 4: Commit**

```bash
cd /Users/noah/Sideklar.no/app
git add app/layout.tsx app/globals.css
git commit -m "feat: setup Inter font and purple design tokens"
```

---

## Task 2: RotateWords component

**Files:**
- Create: `components/ui/rotate-words.tsx`

- [ ] **Step 1: Create the component**

```tsx
"use client";
import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function RotateWords({
  text = "Rotate",
  words = ["Word 1", "Word 2", "Word 3"],
}: {
  text: string;
  words: string[];
}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-x-3 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight">
      <span>{text}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4 }}
          className="text-[#7C3AED]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/noah/Sideklar.no/app
git add components/ui/rotate-words.tsx
git commit -m "feat: add RotateWords animated headline component"
```

---

## Task 3: Nav component

**Files:**
- Create: `components/layout/nav.tsx`

- [ ] **Step 1: Create the nav**

```tsx
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hjem" className="font-bold text-xl tracking-tight text-[#0F0F0F]">
          Sideklar
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B7280]">
          <li><a href="#tjenester" className="hover:text-[#0F0F0F] transition-colors">Tjenester</a></li>
          <li><a href="#priser" className="hover:text-[#0F0F0F] transition-colors">Pakker</a></li>
          <li><a href="#faq" className="hover:text-[#0F0F0F] transition-colors">FAQ</a></li>
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).openWidget) {
              (window as any).openWidget();
            }
          }}
          className="hidden md:inline-flex items-center px-5 py-2 rounded-lg bg-[#7C3AED] text-white text-sm font-semibold hover:bg-[#6D28D9] transition-colors"
        >
          Kontakt oss
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <a href="#tjenester" className="text-sm font-medium" onClick={() => setOpen(false)}>Tjenester</a>
          <a href="#priser" className="text-sm font-medium" onClick={() => setOpen(false)}>Pakker</a>
          <a href="#faq" className="text-sm font-medium" onClick={() => setOpen(false)}>FAQ</a>
          <button
            onClick={() => {
              setOpen(false);
              if (typeof window !== "undefined" && (window as any).openWidget) {
                (window as any).openWidget();
              }
            }}
            className="w-full px-5 py-2 rounded-lg bg-[#7C3AED] text-white text-sm font-semibold"
          >
            Kontakt oss
          </button>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/noah/Sideklar.no/app
git add components/layout/nav.tsx
git commit -m "feat: add sticky nav with mobile menu"
```

---

## Task 4: Hero section

**Files:**
- Create: `components/sections/hero.tsx`

- [ ] **Step 1: Create the hero**

```tsx
import { RotateWords } from "@/components/ui/rotate-words";

export function Hero() {
  return (
    <section id="hjem" className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7C3AED]/20 bg-[#F3F0FF] text-[#7C3AED] text-sm font-medium mb-10">
          <span className="w-2 h-2 rounded-full bg-[#7C3AED] animate-pulse" />
          Rask levering · Ingen binding
        </div>

        {/* Rotating headline */}
        <RotateWords
          text="Nettsiden din —"
          words={[
            "klar på 3 dager",
            "gir bedriften flere kunder",
            "uten teknisk stress",
            "fra 7 500 kr",
          ]}
        />

        {/* Subtext */}
        <p className="mt-8 text-lg text-[#6B7280] max-w-xl mx-auto leading-relaxed">
          Vi hjelper bedrifter av alle størrelser med å etablere en profesjonell tilstedeværelse på nett.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#priser"
            className="px-7 py-3 rounded-lg bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition-colors"
          >
            Få et gratis utkast
          </a>
          <a
            href="#priser"
            className="px-7 py-3 rounded-lg border border-[#0F0F0F]/20 text-[#0F0F0F] font-semibold hover:border-[#7C3AED] hover:text-[#7C3AED] transition-colors"
          >
            Se priser
          </a>
        </div>

        {/* Trust stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-12">
          {[
            { num: "3", unit: "dager", label: "Leveringstid" },
            { num: "7 500", unit: "kr", label: "Startpris nettside" },
            { num: "100", unit: "%", label: "Mobiloptimalisert" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#0F0F0F]">
                {stat.num}<span className="text-lg font-medium text-[#7C3AED] ml-1">{stat.unit}</span>
              </div>
              <div className="text-sm text-[#6B7280] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/noah/Sideklar.no/app
git add components/sections/hero.tsx
git commit -m "feat: add hero section with rotating headline and trust stats"
```

---

## Task 5: How It Works section

**Files:**
- Create: `components/sections/how-it-works.tsx`

- [ ] **Step 1: Create the section**

```tsx
"use client";
import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Du forteller oss om bedriften din",
    desc: "Fyll ut ett enkelt skjema med litt info om hvem du er og hva du tilbyr. Det tar bare noen minutter.",
  },
  {
    num: "2",
    title: "Vi bygger nettsiden på 1–3 dager",
    desc: "Teamet vårt lager en profesjonell, mobiloptimalisert nettside skreddersydd for din bedrift.",
  },
  {
    num: "3",
    title: "Nettsiden er live — du får kunder",
    desc: "Vi publiserer alt og sender deg lenken. Kunder kan finne deg på nett fra dag én.",
  },
];

export function HowItWorks() {
  return (
    <section id="tjenester" className="py-24 px-6 bg-[#F3F0FF]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED] mb-3">
            Slik fungerer det
          </div>
          <h2 className="text-4xl font-bold text-[#0F0F0F]">Enkelt, raskt og uten stress</h2>
          <p className="mt-4 text-[#6B7280]">Du trenger ingen teknisk erfaring. Vi tar oss av alt.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-[#7C3AED] text-white flex items-center justify-center font-bold text-lg mb-5">
                {step.num}
              </div>
              <h3 className="font-bold text-lg text-[#0F0F0F] mb-3">{step.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/noah/Sideklar.no/app
git add components/sections/how-it-works.tsx
git commit -m "feat: add how it works section with scroll animations"
```

---

## Task 6: Pricing section

**Files:**
- Create: `components/sections/pricing.tsx`

- [ ] **Step 1: Create the section**

```tsx
"use client";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    eyebrow: "Kom i gang",
    name: "Enkel",
    featured: false,
    features: [
      { text: "Eget domene inkludert", included: true },
      { text: "Bedrifts-e-post inkludert", included: true },
      { text: "Mobiloptimalisert", included: true },
      { text: "Kontaktskjema", included: true },
      { text: "SSL-sikkerhet inkludert", included: true },
      { text: "Hosting inkludert", included: true },
      { text: "SEO-oppsett inkludert", included: true },
      { text: "Google Analytics", included: false },
      { text: "Google Maps-integrasjon", included: false },
      { text: "Google Business-oppsett", included: false },
      { text: "Nettbutikk eller booking", included: false },
      { text: "Teknisk support", included: false },
    ],
  },
  {
    eyebrow: "Anbefalt",
    name: "Profesjonell",
    featured: true,
    features: [
      { text: "Eget domene inkludert", included: true },
      { text: "Bedrifts-e-post inkludert", included: true },
      { text: "Mobiloptimalisert", included: true },
      { text: "Kontaktskjema", included: true },
      { text: "SSL-sikkerhet inkludert", included: true },
      { text: "Hosting inkludert", included: true },
      { text: "SEO-oppsett inkludert", included: true },
      { text: "Google Analytics", included: true },
      { text: "Google Maps-integrasjon", included: true },
      { text: "Google Business-oppsett", included: false },
      { text: "Nettbutikk eller booking", included: false },
      { text: "Teknisk support", included: true },
    ],
  },
  {
    eyebrow: "For vekst",
    name: "Premium",
    featured: false,
    features: [
      { text: "Eget domene inkludert", included: true },
      { text: "Bedrifts-e-post inkludert", included: true },
      { text: "Mobiloptimalisert", included: true },
      { text: "Kontaktskjema", included: true },
      { text: "SSL-sikkerhet inkludert", included: true },
      { text: "Hosting inkludert", included: true },
      { text: "SEO-oppsett inkludert", included: true },
      { text: "Google Analytics", included: true },
      { text: "Google Maps-integrasjon", included: true },
      { text: "Google Business-oppsett", included: true },
      { text: "Nettbutikk eller booking", included: true },
      { text: "Teknisk support", included: true },
    ],
  },
];

export function Pricing() {
  return (
    <section id="priser" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED] mb-3">Priser</div>
          <h2 className="text-4xl font-bold text-[#0F0F0F]">Enkle priser, ingen overraskelser</h2>
          <p className="mt-4 text-[#6B7280]">Velg pakken som passer din bedrift. Ingen skjulte kostnader.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.featured
                  ? "bg-[#7C3AED] text-white shadow-xl shadow-purple-200 ring-2 ring-[#7C3AED]"
                  : "bg-[#FAFAFA] border border-gray-100"
              }`}
            >
              {plan.featured && (
                <div className="text-xs font-bold uppercase tracking-widest bg-white/20 text-white rounded-full px-3 py-1 w-fit mb-4">
                  Mest populær
                </div>
              )}
              <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${plan.featured ? "text-white/70" : "text-[#7C3AED]"}`}>
                {plan.eyebrow}
              </div>
              <h3 className={`text-2xl font-bold mb-6 ${plan.featured ? "text-white" : "text-[#0F0F0F]"}`}>
                {plan.name}
              </h3>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className={`flex items-center gap-3 text-sm ${f.included ? "" : "opacity-40"}`}>
                    {f.included
                      ? <Check size={16} className={plan.featured ? "text-white" : "text-[#7C3AED]"} />
                      : <X size={16} />
                    }
                    <span className={plan.featured ? "text-white" : "text-[#0F0F0F]"}>{f.text}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && (window as any).openWidget) {
                    (window as any).openWidget();
                  }
                }}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.featured
                    ? "bg-white text-[#7C3AED] hover:bg-gray-100"
                    : "bg-[#7C3AED] text-white hover:bg-[#6D28D9]"
                }`}
              >
                Kom i gang
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/noah/Sideklar.no/app
git add components/sections/pricing.tsx
git commit -m "feat: add pricing section with 3 cards"
```

---

## Task 7: FAQ section

**Files:**
- Create: `components/sections/faq.tsx`

- [ ] **Step 1: Install shadcn accordion**

```bash
cd /Users/noah/Sideklar.no/app && npx shadcn@latest add accordion --yes 2>&1 | tail -5
```
Expected: accordion component added to `components/ui/accordion.tsx`

- [ ] **Step 2: Create the FAQ section**

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Hva er inkludert i månedsprisen?",
    a: "Hosting, SSL-sertifikat, domene, bedrifts-e-post, sikkerhetsoppdateringer og teknisk support. Du trenger ikke tenke på det tekniske — vi holder nettsiden din i gang og oppdatert.",
  },
  {
    q: "Hvor lang tid tar det å få en nettside?",
    a: "De fleste nettsider er klare innen 1–3 virkedager etter at vi har mottatt informasjon fra deg.",
  },
  {
    q: "Trenger jeg å gjøre noe selv?",
    a: "Nei. Du sender oss litt info om bedriften din — vi ordner resten. Domene, e-post, nettside og hosting.",
  },
  {
    q: "Kan jeg få en nettside selv om jeg akkurat har startet?",
    a: "Absolutt — vi spesialiserer oss på nyetablerte bedrifter. Ingen erfaring med nettside nødvendig.",
  },
  {
    q: "Hva skjer hvis jeg vil endre noe på nettsiden?",
    a: "Månedspakken inkluderer mindre endringer som tekstoppdateringer og bilder. Større endringer avtales separat til fornuftige priser.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-[#FAFAFA]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED] mb-3">
            Spørsmål og svar
          </div>
          <h2 className="text-4xl font-bold text-[#0F0F0F]">Lurer du på noe?</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white border border-gray-100 rounded-xl px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-[#0F0F0F] hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7280] leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /Users/noah/Sideklar.no/app
git add components/sections/faq.tsx components/ui/accordion.tsx
git commit -m "feat: add FAQ section with shadcn accordion"
```

---

## Task 8: Footer

**Files:**
- Create: `components/layout/footer.tsx`

- [ ] **Step 1: Create the footer**

```tsx
export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-bold text-xl tracking-tight">Sideklar</div>
        <ul className="flex gap-6 text-sm text-white/60">
          <li><a href="#tjenester" className="hover:text-white transition-colors">Tjenester</a></li>
          <li><a href="#priser" className="hover:text-white transition-colors">Pakker</a></li>
          <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
        </ul>
        <button
          onClick={() => {
            if (typeof window !== "undefined" && (window as any).openWidget) {
              (window as any).openWidget();
            }
          }}
          className="px-5 py-2 rounded-lg bg-[#7C3AED] text-white text-sm font-semibold hover:bg-[#6D28D9] transition-colors"
        >
          Kontakt oss
        </button>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Sideklar. Alle rettigheter forbeholdt.
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /Users/noah/Sideklar.no/app
git add components/layout/footer.tsx
git commit -m "feat: add dark footer"
```

---

## Task 9: Assemble page + verify

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update `app/page.tsx` to assemble all sections**

```tsx
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Run build to check for errors**

```bash
cd /Users/noah/Sideklar.no/app && npm run build 2>&1 | tail -20
```
Expected: `✓ Compiled successfully` with no TypeScript errors

- [ ] **Step 3: Start dev server and visually verify**

```bash
cd /Users/noah/Sideklar.no/app && npm run dev
```
Open `http://localhost:3000` and check:
- Nav renders with logo and links
- Hero shows rotating headline cycling every 3 seconds
- Purple accent color visible throughout
- How It Works cards animate on scroll
- Pricing cards render, middle card is purple
- FAQ accordion opens/closes
- Footer is dark with Kontakt oss button

- [ ] **Step 4: Commit**

```bash
cd /Users/noah/Sideklar.no/app
git add app/page.tsx
git commit -m "feat: assemble full Sideklar homepage"
```

---

## Task 10: Deploy to Cloudflare Pages

- [ ] **Step 1: Push to GitHub**

```bash
cd /Users/noah/Sideklar.no/app
git push
```

- [ ] **Step 2: Configure Cloudflare Pages build settings**

In Cloudflare Pages dashboard for `sideklar-website`:
- **Framework preset:** Next.js
- **Build command:** `npm run build`
- **Build output directory:** `.next`

- [ ] **Step 3: Add custom domain in Cloudflare Pages**

In the Pages project → Custom domains:
- Add `sideklar.no`
- Add `www.sideklar.no`

- [ ] **Step 4: Verify live at sideklar.no**

Open `https://sideklar.no` — should show the new React site.
