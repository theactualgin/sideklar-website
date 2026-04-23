"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";

const values = [
  { title: "Rask levering", desc: "Nettsiden din er klar på 3 dager — ikke 3 måneder." },
  { title: "Ærlig pris", desc: "Ingen skjulte kostnader. Du vet hva du betaler fra første dag." },
  { title: "Teknisk solid", desc: "Bygget med moderne teknologi som er rask, sikker og skalerbar." },
  { title: "Alltid tilgjengelig", desc: "Du får direkte kontakt — ikke en supportkø." },
];

export default function OmPage() {
  function openChat() {
    if (typeof window !== "undefined" && (window as any).openChatWidget) {
      (window as any).openChatWidget();
    }
  }

  return (
    <>
      <Nav />
      <main>
        <section className="py-24 px-6 bg-[#FAFAFA]">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">

              {/* Left — Portrait */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl">
                  <Image
                    src="/noah.jpg"
                    alt="Noah Lie — grunnlegger av Sideklar"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </motion.div>

              {/* Right — Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] mb-4"
                >
                  Om oss
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="text-4xl sm:text-5xl font-bold text-[#0F0F0F] leading-tight mb-8"
                >
                  Hei, jeg er Noah.
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-5 text-[#6B7280] leading-relaxed"
                >
                  <p>
                    Jeg har en bachelor i økonomi og ledelse og er litt i overkant glad i teknologi. Den kombinasjonen er grunnen til at Sideklar finnes.
                  </p>
                  <p className="text-[#0F0F0F] font-medium">
                    Jeg så at mange bedrifter trengte en skikkelig nettside, men møtte enten høye priser, lang ventetid eller begge deler. Det ville jeg gjøre noe med.
                  </p>
                  <p>
                    Sideklar er bygget på én tanke: at en profesjonell digital tilstedeværelse skal være tilgjengelig for alle — raskt, ærlig og uten teknisk hodepine.
                  </p>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  onClick={openChat}
                  className="mt-10 self-start px-7 py-3.5 rounded-full bg-[#3ADBA1] text-[#0F0F0F] font-semibold text-sm hover:bg-[#2BC48A] transition-colors shadow-lg shadow-[#3ADBA1]/30"
                >
                  Ta en uforpliktende prat
                </motion.button>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-24 border-t border-gray-100 pt-16"
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((v, i) => (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="w-8 h-1 bg-[#3ADBA1] rounded-full mb-4" />
                    <h3 className="font-bold text-[#0F0F0F] mb-2">{v.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{v.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
