"use client";

const tjenesterLinks = [
  { label: "Nettside", href: "/tjenester" },
  { label: "Logo & Grafisk profil", href: "/tjenester" },
  { label: "Vedlikeholdspakker", href: "/pakker" },
  { label: "Priskalkulator", href: "/priskalkulator" },
];

const selskapLinks = [
  { label: "Om oss", href: "/om" },
  { label: "Prosjekter", href: "/prosjekter" },
  { label: "Artikler", href: "/artikler" },
  { label: "FAQ", href: "/#faq" },
];

export function Footer() {
  const openWidget = () => {
    if (typeof window !== "undefined" && (window as any).openChatWidget) {
      (window as any).openChatWidget();
    }
  };

  return (
    <footer className="bg-[#F3F4F6] text-[#0F0F0F]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">

          {/* Brand */}
          <div>
            <a href="/" className="inline-block mb-6">
              <img src="/sideklar-logo.svg" alt="Sideklar" className="h-8 w-auto" />
            </a>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-xs mb-6">
              Vi lager nettsider, logoer og grafisk profil for norske bedrifter — raskt, ærlig og uten teknisk stress.
            </p>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              <span className="font-semibold text-[#6B7280]">sideklar</span>{" "}
              <em>[adj.]</em> — klar til å gå på nett. Profesjonell digital tilstedeværelse, levert på dager.
            </p>
          </div>

          {/* Tjenester */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-5">Tjenester</p>
            <ul className="space-y-3">
              {tjenesterLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-[#6B7280] hover:text-[#3ADBA1] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Selskapet */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-5">Selskapet</p>
            <ul className="space-y-3">
              {selskapLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-[#6B7280] hover:text-[#3ADBA1] transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#9CA3AF] mb-5">Kom i gang</p>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
              Gratis og uforpliktende. Vi svarer innen én arbeidsdag.
            </p>
            <button
              onClick={openWidget}
              className="w-full px-5 py-3 rounded-full bg-[#3ADBA1] text-[#0F0F0F] text-sm font-semibold hover:bg-[#2BC48A] transition-colors"
            >
              Start samtalen →
            </button>
            <a
              href="mailto:hei@sideklar.no"
              className="block mt-4 text-xs text-[#9CA3AF] hover:text-[#6B7280] transition-colors text-center"
            >
              hei@sideklar.no
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9CA3AF]">
          <span>© {new Date().getFullYear()} Sideklar. Alle rettigheter forbeholdt.</span>
          <span>Laget med ♥ i Norge</span>
        </div>
      </div>
    </footer>
  );
}
