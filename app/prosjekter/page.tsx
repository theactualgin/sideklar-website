import type { Metadata } from "next";
import { Nav } from "@/components/layout/nav";

export const metadata: Metadata = {
  title: "Prosjekter - Se våre konsepter | Sideklar",
  description: "Se utvalgte konsepter og eksempler på nettsider vi lager for norske bedrifter.",
  openGraph: {
    title: "Prosjekter - Se våre konsepter | Sideklar",
    description: "Se utvalgte konsepter og eksempler på nettsider vi lager for norske bedrifter.",
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
