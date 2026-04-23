import { Nav } from "@/components/layout/nav";
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
