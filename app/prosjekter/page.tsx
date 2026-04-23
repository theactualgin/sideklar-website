import type { Metadata } from "next";
import { Nav } from "@/components/layout/nav";

export const metadata: Metadata = {
  title: "Prosjekter - Se våre kundearbeider | Sideklar",
  description: "Se utvalgte prosjekter vi har levert for norske bedrifter - nettsider, logoer og grafisk profil.",
  openGraph: {
    title: "Prosjekter - Se våre kundearbeider | Sideklar",
    description: "Se utvalgte prosjekter vi har levert for norske bedrifter - nettsider, logoer og grafisk profil.",
    url: "https://www.sideklar.no/prosjekter",
  },
};
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProsjekterGrid } from "@/components/sections/prosjekter-grid";

export default function ProsjekterPage() {
  return (
    <>
      <Nav />
      <main>
        <PageIntro>
          <ProsjekterGrid />
        </PageIntro>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
