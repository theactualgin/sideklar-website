"use client";
import { RotateWords } from "@/components/ui/rotate-words";
import { AuroraBackground } from "@/components/ui/aurora-background";

export function Hero() {
  function openChat() {
    if (typeof window !== "undefined" && (window as any).openChatWidget) {
      (window as any).openChatWidget();
    }
  }

  return (
    <AuroraBackground className="min-h-screen text-center px-6 pt-36 pb-24" showRadialGradient={true}>
      <div className="max-w-5xl mx-auto relative z-10">
        <RotateWords
          text="Nettsiden din"
          words={["klar på rekordtid", "synlig på Google", "uten teknisk stress"]}
        />
        <p className="mt-8 text-lg text-[#6B7280] dark:text-[#9CA3AF] max-w-xl mx-auto leading-relaxed">
          Vi lager nettsider, logoer og grafisk profil for bedrifter som vil fremstå profesjonelt og tiltrekke seg flere kunder.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <button onClick={openChat} className="w-full max-w-sm text-center px-6 py-3.5 rounded-full bg-[#3ADBA1] text-[#0F0F0F] font-semibold text-sm hover:bg-[#2BC48A] transition-colors shadow-lg shadow-[#3ADBA1]/30">
            Bestill nettsiden din nå
          </button>
          <a href="/priskalkulator" className="w-full max-w-sm flex items-center gap-3 px-6 py-3.5 rounded-full bg-transparent border border-[#0F0F0F]/30 dark:border-white/30 text-[#0F0F0F] dark:text-white text-sm font-medium hover:border-[#0F0F0F] dark:hover:border-white transition-colors">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0F0F0F]/10 dark:bg-white/10 text-[#0F0F0F] dark:text-white text-xs font-semibold shrink-0">
              ⚡ Nytt
            </span>
            Priskalkulator — få et estimat
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto sm:flex sm:flex-wrap sm:justify-center sm:gap-12 sm:max-w-none">
          {[
            { num: "3", unit: "dager", label: "Leveringstid" },
            { num: "Gratis", unit: "", label: "Uforpliktende samtale" },
            { num: "100", unit: "%", label: "Mobiloptimalisert" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-[#0F0F0F] dark:text-white">
                {stat.num}<span className="text-lg font-medium text-[#3ADBA1] ml-1">{stat.unit}</span>
              </div>
              <div className="text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </AuroraBackground>
  );
}
