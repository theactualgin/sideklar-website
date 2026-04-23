import type { Metadata } from "next";
import { Nav } from "@/components/layout/nav";

export const metadata: Metadata = {
  title: "Tjenester - Nettside, logo og grafisk profil | Sideklar",
  description: "Vi designer og utvikler profesjonelle nettsider, logoer og grafisk profil for norske bedrifter. Se hva vi kan hjelpe deg med.",
  openGraph: {
    title: "Tjenester - Nettside, logo og grafisk profil | Sideklar",
    description: "Vi designer og utvikler profesjonelle nettsider, logoer og grafisk profil for norske bedrifter.",
    url: "https://www.sideklar.no/tjenester",
  },
};
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { PageIntro } from "@/components/ui/PageIntro";
import { TjenesterFeatures } from "@/components/sections/tjenester-features";

export default function TjenesterPage() {
  return (
    <>
      <Nav />
      <main>
        <PageIntro>
          <TjenesterFeatures />
        </PageIntro>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
