# Sideklar Website Redesign — Design Spec

## Overview

Rebuild the Sideklar.no website from plain HTML into a Next.js + Tailwind + TypeScript app. Modern minimal design with purple accent, off-white base, rotating hero headline, and framer-motion animations.

## Stack

- Next.js (App Router) — already scaffolded at `/app`
- Tailwind CSS
- TypeScript
- framer-motion (already installed)
- lucide-react (already installed)

## Design Tokens

- Background: `#FAFAFA` (off-white base), `#F3F0FF` (soft purple tint for alternating sections)
- Text: `#0F0F0F` (near-black), `#6B7280` (muted)
- Accent: `#7C3AED` (purple), `#6D28D9` (purple dark hover)
- Font: Inter (Google Fonts)
- Border radius: `rounded-xl` (12px)

## Sections

### 1. Nav
- White background, sticky, subtle bottom border
- Logo (Sideklar SVG) on the left
- Links: Tjenester, Pakker, Om oss — center/right
- CTA button: "Kontakt oss" — purple, right side
- Mobile: hamburger menu

### 2. Hero
- Centered layout, full-width
- Rotating headline using `RotateWords` component:
  - Static text: "Nettsiden din —"
  - Rotating words: "klar på 3 dager", "gir bedriften flere kunder", "uten teknisk stress", "fra 7 500 kr"
- Subtext: "Vi hjelper bedrifter av alle størrelser med å etablere en profesjonell tilstedeværelse på nett."
- Two CTAs: "Få et gratis utkast" (purple filled) + "Se priser" (outline)
- Trust stats below: 3 dager leveringstid / 7 500 kr startpris / 100% mobiloptimalisert

### 3. How It Works
- Soft purple tint background (`#F3F0FF`)
- Label: "Slik fungerer det"
- Title: "Enkelt, raskt og uten stress"
- 3 numbered steps:
  1. Du forteller oss om bedriften din
  2. Vi bygger nettsiden på 1–3 dager
  3. Nettsiden er live — du får kunder
- Scroll reveal animation (framer-motion)

### 4. Pricing
- White background
- Label: "Priser"
- Title: "Enkle priser, ingen overraskelser"
- 2–3 cards (keep existing pricing from HTML)
- Purple highlight/border on recommended plan
- Scroll reveal animation

### 5. FAQ
- Off-white background
- Accordion component (shadcn Accordion)
- Keep existing FAQ questions from HTML

### 6. Footer
- Dark background (`#0F0F0F`)
- Logo, links, "Kontakt oss" button that opens chat widget
- Copyright

## Components to Create

- `components/ui/rotate-words.tsx` — rotating headline (provided component, adapted)
- `components/layout/nav.tsx`
- `components/layout/footer.tsx`
- `components/sections/hero.tsx`
- `components/sections/how-it-works.tsx`
- `components/sections/pricing.tsx`
- `components/sections/faq.tsx`
- `app/page.tsx` — assembles all sections

## Deployment

- Cloudflare Pages via GitHub push
- `git add . && git commit -m "..." && git push` triggers auto-deploy
