import { Nav } from "@/components/layout/nav";
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
