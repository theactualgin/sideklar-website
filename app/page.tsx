import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ProsjekterPreview } from "@/components/sections/prosjekter-preview";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FAQ } from "@/components/sections/faq";
import { ArticlesSlider } from "@/components/sections/articles-slider";
import { CTA } from "@/components/sections/cta";
import { ChatWidget } from "@/components/ui/chat-widget";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProsjekterPreview />
        <HowItWorks />
        <FAQ />
        <ArticlesSlider />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
