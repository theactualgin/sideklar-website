import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { RetainerIntro } from "@/components/sections/retainer-intro";
import { RetainerPricing } from "@/components/sections/retainer-pricing";
import { RetainerCredibility } from "@/components/sections/retainer-credibility";
import { RetainerFaq } from "@/components/sections/retainer-faq";
import { RetainerCta } from "@/components/sections/retainer-cta";

export default function PakkerPage() {
  return (
    <>
      <Nav />
      <main>
        <RetainerIntro />
        <RetainerPricing />
        <RetainerCredibility />
        <RetainerFaq />
        <RetainerCta />
      </main>
      <Footer />
    </>
  );
}
