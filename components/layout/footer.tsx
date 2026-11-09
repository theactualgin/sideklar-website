"use client";

import { SiteButton } from "@/components/ui/site-button";

const tjenesterLinks = [
  { label: "Nettside", href: "/tjenester" },
  { label: "Logo og grafisk profil", href: "/tjenester" },
  { label: "Vedlikeholdspakker", href: "/pakker" },
  { label: "Priskalkulator", href: "/priskalkulator" },
];

const selskapLinks = [
  { label: "Om oss", href: "/om" },
  { label: "Prosjekter", href: "/prosjekter" },
  { label: "Artikler", href: "/artikler" },
  { label: "FAQ", href: "/#faq" },
];

const linkClass =
  "text-[15px] text-white/70 underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors hover:text-white hover:decoration-[#3ADBA1]";

export function Footer() {
  const openWidget = () => {
    if (typeof window !== "undefined" && (window as any).openChatWidget) {
      (window as any).openChatWidget();
    }
  };

  return (
    <footer className="bg-[#0A2349] px-6 text-white">
      <div className="mx-auto max-w-6xl pb-10 pt-20">
        <div className="grid gap-14 md:grid-cols-[1.6fr_1fr_1fr_1.4fr] md:gap-10">
          <div>
            <a href="/" className="inline-block text-3xl font-extrabold tracking-tight">
              Sideklar
            </a>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/70">
              Nettsider, logoer og grafisk profil for norske bedrifter. Raskt, ærlig og uten teknisk stress.
            </p>
          </div>

          <div>
            <p className="mb-5 text-sm font-medium text-white/50">Tjenester</p>
            <ul className="space-y-3">
              {tjenesterLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-sm font-medium text-white/50">Selskapet</p>
            <ul className="space-y-3">
              {selskapLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-sm font-medium text-white/50">Kom i gang</p>
            <p className="mb-6 text-[15px] leading-relaxed text-white/70">
              Gratis og uforpliktende. Vi svarer innen én arbeidsdag.
            </p>
            <SiteButton variant="onDark" onClick={openWidget} arrow>
              Start samtalen
            </SiteButton>
            <a href="mailto:hei@sideklar.no" className={`${linkClass} mt-5 block`}>
              hei@sideklar.no
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 text-sm text-white/50 sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Sideklar. Alle rettigheter forbeholdt.</span>
          <a href="/personvern" className="transition-colors hover:text-white">
            Personvern
          </a>
        </div>
      </div>
    </footer>
  );
}
