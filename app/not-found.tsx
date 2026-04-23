import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-[70vh] flex items-center justify-center bg-white px-6">
        <div className="text-center">
          <p className="text-8xl font-bold text-[#3ADBA1] mb-6">404</p>
          <h1 className="text-3xl font-bold text-[#0F0F0F] mb-4">Siden finnes ikke</h1>
          <p className="text-[#6B7280] mb-10 max-w-sm mx-auto leading-relaxed">
            Siden du leter etter finnes ikke eller har blitt flyttet.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#3ADBA1] text-[#0F0F0F] font-semibold text-sm hover:bg-[#2BC48A] transition-colors"
          >
            Tilbake til forsiden →
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
