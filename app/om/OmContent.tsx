"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SiteButton } from "@/components/ui/site-button";

const values = [
  { title: "Rask levering", desc: "Nettsiden din er klar på 3 dager, ikke 3 måneder." },
  { title: "Ærlig pris", desc: "Ingen skjulte kostnader. Du vet hva du betaler fra første dag." },
  { title: "Teknisk solid", desc: "Bygget med moderne teknologi som er rask, sikker og skalerbar." },
  { title: "Alltid tilgjengelig", desc: "Du får direkte kontakt, ikke en supportkø." },
];

export function OmContent() {
  function openChat() {
    if (typeof window !== "undefined" && (window as any).openChatWidget) {
      (window as any).openChatWidget();
    }
  }

  return (
    <section className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-[#0A2349]/10 bg-[#F3F4F6]">
              <Image
                src="/noah.jpg"
                alt="Noah Lie, grunnlegger av Sideklar"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <p className="mt-4 text-sm text-[#0A2349]/60">
              <span className="font-semibold text-[#0A2349]">Noah Lie</span> · Grunnlegger og utvikler
            </p>
          </Reveal>

          <div className="flex flex-col justify-center lg:pt-6">
            <Reveal>
              <p className="mb-4 text-sm font-medium text-[#0A2349]/55">Om oss</p>
              <h1 className="mb-10 text-5xl font-bold leading-[1.02] tracking-tight text-[#0A2349] md:text-7xl">
                Hei, jeg er Noah.
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="max-w-xl space-y-5 text-lg leading-relaxed text-[#0A2349]/70">
                <p>
                  Jeg har en bachelor i økonomi og ledelse og er litt i overkant glad i teknologi. Den kombinasjonen er grunnen til at Sideklar finnes.
                </p>
                <p className="font-medium text-[#0A2349]">
                  Jeg så at mange bedrifter trengte en skikkelig nettside, men møtte enten høye priser, lang ventetid eller begge deler. Det ville jeg gjøre noe med.
                </p>
                <p>
                  Sideklar er bygget på én tanke: at en profesjonell digital tilstedeværelse skal være tilgjengelig for alle. Raskt, ærlig og uten teknisk hodepine.
                </p>
              </div>
              <SiteButton size="lg" arrow onClick={openChat} className="mt-10">
                Ta en uforpliktende prat
              </SiteButton>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid gap-x-10 border-t border-[#0A2349] pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="py-4">
                <h2 className="text-lg font-semibold tracking-tight text-[#0A2349]">{v.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-[#0A2349]/65">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
