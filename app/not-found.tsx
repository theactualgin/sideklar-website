import { Nav } from "@/components/layout/nav";
import { SiteButton } from "@/components/ui/site-button";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex min-h-[70vh] items-center bg-white px-6">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-4 text-sm font-medium text-[#0A2349]/55">Feil 404</p>
          <h1 className="mb-6 text-5xl font-bold leading-[1.02] tracking-tight text-[#0A2349] md:text-7xl">Siden finnes ikke.</h1>
          <p className="mb-10 max-w-sm text-lg leading-relaxed text-[#0A2349]/70">
            Siden du leter etter finnes ikke eller har blitt flyttet.
          </p>
          <SiteButton href="/" size="lg" arrow>
            Tilbake til forsiden
          </SiteButton>
        </div>
      </main>
      <Footer />
    </>
  );
}
