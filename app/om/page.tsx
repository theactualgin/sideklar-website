import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";

export default function OmPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#3ADBA1] mb-3">Hvem er vi?</div>
            <h1 className="text-4xl font-bold text-[#0F0F0F] mb-6">Om Sideklar</h1>

            <div className="space-y-5 text-[#6B7280] leading-relaxed">
              <p>
                Sideklar er et norsk designstudio som hjelper bedrifter med å etablere en sterk digital tilstedeværelse. Vi lager nettsider, logoer og grafiske profiler som er enkle, effektive og profesjonelle.
              </p>
              <p>
                Vi ble startet med én tanke: at alle bedrifter — uansett størrelse — fortjener et godt design. For mange er prislappen og ventetiden en hindring. Vi har løst begge deler.
              </p>
              <p>
                Hos oss er nettsiden din klar på 3 dager, og du slipper teknisk stress. Vi tar oss av alt fra domene og hosting til design og innhold.
              </p>
            </div>

            <div className="mt-16 grid sm:grid-cols-3 gap-8">
              {[
                { num: "3", label: "dagers leveringstid" },
                { num: "50+", label: "fornøyde kunder" },
                { num: "100%", label: "mobiloptimalisert" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
                  <div className="text-4xl font-bold text-[#0F0F0F] mb-2">{s.num}</div>
                  <div className="text-sm text-[#6B7280]">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold text-[#0F0F0F] mb-6">Ta kontakt</h2>
              <p className="text-[#6B7280] mb-4">Har du spørsmål eller vil starte et prosjekt? Vi høres gjerne fra deg.</p>
              <a
                href="mailto:hei@sideklar.no"
                className="inline-block px-7 py-3 rounded-lg bg-[#3ADBA1] text-[#0F0F0F] font-semibold hover:bg-[#2BC48A] transition-colors"
              >
                Send oss en e-post
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
