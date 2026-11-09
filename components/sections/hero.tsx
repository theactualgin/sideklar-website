"use client";
import { useEffect, useRef, useState } from "react";
import GlyphPortal from "@/components/ui/glyph-portal";
import { RotateWords } from "@/components/ui/rotate-words";
import { SiteButton } from "@/components/ui/site-button";

const STATS = [
  { num: "3", unit: "dager", label: "Leveringstid" },
  { num: "Gratis", unit: "", label: "Uforpliktende samtale" },
  { num: "100", unit: "%", label: "Mobiloptimalisert" },
];

function openChat() {
  if (typeof window !== "undefined" && (window as any).openChatWidget) {
    (window as any).openChatWidget();
  }
}

/** What shows through the letters, and what the camera ends up inside. */
function Field() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        transform: "scale(var(--gp-field-scale,1))",
        background:
          "radial-gradient(circle at 86% 12%, rgba(58,219,161,.85), transparent 32%)," +
          "radial-gradient(circle at 8% 96%, rgba(58,219,161,.35), transparent 38%)," +
          "linear-gradient(135deg,#0a2349 0%,#0d3a66 48%,#0a2349 100%)",
      }}
    />
  );
}

/**
 * Quiet scenery behind the word: three flat mountain ridges that drift very slowly.
 * Pinned like the hero, and fades out as the zoom begins.
 */
function HeroDecor() {
  return (
    <div data-hero-decor aria-hidden="true">
      <div data-hero-ridges>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            fill="rgba(10,35,73,.07)"
            d="M0 200V120L110 70L210 110L330 40L450 105L560 60L700 125L830 55L960 110L1090 45L1210 100L1330 65L1440 95V200Z"
          />
          <path
            fill="rgba(58,219,161,.28)"
            d="M0 200V150L140 100L250 140L380 80L520 145L650 105L790 150L930 90L1060 140L1200 95L1320 135L1440 110V200Z"
          />
          <path
            fill="rgba(10,35,73,.12)"
            d="M0 200V175L160 140L300 170L450 125L600 172L760 138L900 175L1050 130L1190 170L1330 145L1440 165V200Z"
          />
        </svg>
      </div>
    </div>
  );
}

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);
  // The portal measures real letter shapes, so it needs the actual loaded font name
  // (not a CSS variable) and must start only after that font is ready.
  const [face, setFace] = useState<string | null>(null);
  useEffect(() => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      const family = getComputedStyle(document.body).fontFamily;
      setFace(family || "Arial, sans-serif");
    };
    const timeout = window.setTimeout(finish, 1800);
    document.fonts.ready.then(() => { window.clearTimeout(timeout); finish(); });
    return () => { done = true; window.clearTimeout(timeout); };
  }, []);

  return (
    <div data-hero ref={rootRef}>
      <style>{`
        [data-hero]{position:relative;background:#ffffff;}
        [data-hero] > section{--gp-paper:transparent;--gp-ink:#0A2349;--gp-field:#0a2349;--gp-foreground:#ffffff;}
        [data-hero-decor]{position:sticky;top:0;height:100svh;margin-bottom:-100svh;overflow:hidden;pointer-events:none;opacity:calc(1 - var(--hero-p,0) * 5);}
        [data-hero]:has(> section[data-gp-motion=off]) [data-hero-decor]{position:absolute;inset:0 0 auto 0;margin-bottom:0;}
        [data-hero-ridges]{position:absolute;left:-5%;right:-5%;bottom:0;height:24%;transform:translateY(calc(var(--hero-p,0) * 160px));}
        [data-hero-ridges] svg{display:block;width:100%;height:100%;}
        [data-hero-ridges] path:nth-child(1){animation:hero-drift 46s ease-in-out infinite alternate;}
        [data-hero-ridges] path:nth-child(2){animation:hero-drift 36s ease-in-out infinite alternate-reverse;}
        [data-hero-ridges] path:nth-child(3){animation:hero-drift 28s ease-in-out infinite alternate;}
        @keyframes hero-drift{from{transform:translateX(-22px)}to{transform:translateX(22px)}}
        @media (prefers-reduced-motion:reduce){[data-hero-ridges] path{animation:none!important;}}
        [data-hero] [data-gp-touch-picker]{display:none!important;}
        [data-hero] [data-gp-hint]{display:none;}
        [data-hero] [data-gp-caption]{inset:auto 0 88px;justify-content:center;font-size:13px;}
        [data-hero] [data-gp-enter]{color:var(--gp-ink);opacity:.7;gap:10px;font-weight:500;}
        [data-hero] [data-gp-enter]:hover{opacity:1;}
        [data-hero-eyebrow]{position:absolute;left:0;right:0;bottom:calc(100% - var(--gp-word-top,35%) + 24px);display:flex;flex-direction:column;align-items:center;gap:16px;padding:0 20px;text-align:center;}
        [data-hero-lower]{position:absolute;left:0;right:0;top:calc(var(--gp-word-bottom,50%) + 26px);display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 20px;}
        [data-hero-inside]{display:flex;flex-direction:column;align-items:flex-start;gap:clamp(1.5rem,4svh,2.75rem);width:min(100%,72rem);margin:auto;}
        [data-hero-stats]{display:grid;grid-template-columns:1fr;gap:1.5rem;width:100%;}
        [data-hero-stat]{border-top:1px solid rgba(255,255,255,.25);padding-top:1rem;}
        @container (min-width:640px){[data-hero-stats]{grid-template-columns:repeat(3,minmax(0,1fr));gap:3rem;}}
        @media (min-width:640px){[data-hero-stats]{grid-template-columns:repeat(3,minmax(0,1fr));gap:3rem;}}
      `}</style>

      <h1 className="sr-only">Sideklar – nettsider, logoer og grafisk profil for norske bedrifter</h1>

      <HeroDecor />

      {!face ? <div style={{ height: "100svh" }} aria-hidden="true" /> : <GlyphPortal
        word="SIDEKLAR"
        fontFamily={face}
        fontWeight={800}
        scrollLength={2.2}
        enterLabel="Se hvordan det fungerer"
        onProgress={(p) => rootRef.current?.style.setProperty("--hero-p", String(p))}
        background={<Field />}
        front={
          <>
            <div data-hero-eyebrow>
              <span className="text-sm font-medium text-[#0A2349]/60 dark:text-white/60">Nettsider for norske bedrifter</span>
              <RotateWords
                text="Nettsiden din"
                words={["klar på rekordtid", "synlig på Google", "uten teknisk stress"]}
                className="flex flex-wrap items-center justify-center gap-x-3 text-[1.7rem] font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl"
              />
            </div>

            <div data-hero-lower>
              <p className="max-w-xl text-[15px] leading-relaxed text-[#0A2349]/70 dark:text-white/70 sm:text-base">
                Vi lager nettsider, logoer og grafisk profil for bedrifter som vil fremstå profesjonelt og tiltrekke seg
                flere kunder.
              </p>
              <div className="mt-6 flex w-full max-w-md flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center">
                <SiteButton size="lg" arrow onClick={openChat} className="w-full sm:w-auto">
                  Bestill nettsiden din nå
                </SiteButton>
                <SiteButton href="/priskalkulator" variant="outline" size="lg" className="w-full sm:w-auto">
                  Se hva det koster
                </SiteButton>
              </div>
            </div>
          </>
        }
      >
        <div data-hero-inside>
          <p className="text-sm font-medium text-[#3ADBA1]">Slik jobber vi</p>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Fra første samtale til ferdig nettside – på tre dager.
          </h2>
          <div data-hero-stats>
            {STATS.map((s) => (
              <div key={s.label} data-hero-stat>
                <div className="text-4xl font-bold tracking-tight sm:text-5xl">
                  {s.num}
                  <span className="ml-1.5 text-xl font-medium text-[#3ADBA1]">{s.unit}</span>
                </div>
                <div className="mt-1.5 text-sm text-white/75">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <SiteButton variant="onDark" size="lg" arrow onClick={openChat}>
              Bestill nettsiden din nå
            </SiteButton>
            <SiteButton href="/priskalkulator" variant="ghostOnDark" size="lg">
              Se priser
            </SiteButton>
          </div>
        </div>
      </GlyphPortal>}
    </div>
  );
}
