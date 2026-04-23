import type { Metadata } from "next";
import { Nav } from "@/components/layout/nav";

export const metadata: Metadata = {
  title: "Pakker og priser | Sideklar",
  description: "Transparente priser uten overraskelser. Velg en pakke som passer din bedrift - fra enkel nettside til full grafisk profil fra 7 500 kr.",
  openGraph: {
    title: "Pakker og priser | Sideklar",
    description: "Transparente priser uten overraskelser. Velg en pakke som passer din bedrift fra 7 500 kr.",
    url: "https://www.sideklar.no/pakker",
  },
};
import { Footer } from "@/components/layout/footer";
import { PageIntro } from "@/components/ui/PageIntro";
import { PakkerFeatures } from "@/components/sections/pakker-features";
import { RetainerPricing } from "@/components/sections/retainer-pricing";
import { RetainerCredibility } from "@/components/sections/retainer-credibility";
import { RetainerFaq } from "@/components/sections/retainer-faq";
import { RetainerCta } from "@/components/sections/retainer-cta";

export default function PakkerPage() {
  return (
    <>
      <Nav />
      <main>
        <PageIntro>
          <PakkerFeatures />
          <div id="pakker">
            <RetainerPricing />
          </div>
          <RetainerCredibility />
          <RetainerFaq />
          <RetainerCta />
        </PageIntro>
      </main>
      <Footer />
    </>
  );
}
