import { Nav } from "@/components/layout/nav";
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
