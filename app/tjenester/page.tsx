import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { PageIntro } from "@/components/ui/PageIntro";

const tjenester = [
  {
    title: "Nettside",
    description: "Vi designer og utvikler profesjonelle nettsider som er raske, mobiloptimaliserte og enkle å bruke. Klar på 3 dager.",
    items: ["Responsivt design", "SEO-optimalisert", "Rask leveringstid", "Hosting inkludert"],
  },
  {
    title: "Logo & Grafisk profil",
    description: "En sterk visuell identitet gjør at bedriften din skiller seg ut. Vi lager logoer og grafiske profiler som passer din bedrift.",
    items: ["Logoutforming", "Fargepalett", "Typografi", "Branding-guide"],
  },
  {
    title: "Vedlikehold & Support",
    description: "Vi holder nettsiden din oppdatert, sikker og i toppform. Du slipper å tenke på det tekniske.",
    items: ["Sikkerhetsoppdateringer", "Tekstendringer", "Teknisk support", "Månedlig rapport"],
  },
];

export default function TjenesterPage() {
  return (
    <>
      <Nav />
      <main><PageIntro>
        <section className="py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] mb-3">Hva vi tilbyr</div>
            <h1 className="text-4xl font-bold text-[#0F0F0F] mb-4">Tjenester</h1>
            <p className="text-[#6B7280] max-w-xl mx-auto">
              Alt bedriften trenger for å se profesjonell ut på nett — på ett sted.
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {tjenester.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-[#0F0F0F] mb-3">{t.title}</h2>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-6">{t.description}</p>
                <ul className="space-y-2">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#0F0F0F]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3ADBA1]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </PageIntro></main>
      <Footer />
      <ChatWidget />
    </>
  );
}
