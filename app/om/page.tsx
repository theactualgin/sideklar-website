import type { Metadata } from "next";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/ui/chat-widget";
import { PageIntro } from "@/components/ui/PageIntro";
import { OmContent } from "./OmContent";

export const metadata: Metadata = {
  title: "Om oss | Sideklar",
  description: "Sideklar ble grunnlagt av Noah Lie. Vi hjelper norske bedrifter med profesjonelle nettsider og grafisk profil - raskt, ærlig og uten stress.",
  openGraph: {
    title: "Om oss | Sideklar",
    description: "Sideklar ble grunnlagt av Noah Lie. Vi hjelper norske bedrifter med profesjonelle nettsider og grafisk profil.",
    url: "https://www.sideklar.no/om",
  },
};

export default function OmPage() {
  return (
    <>
      <Nav />
      <main>
        <PageIntro>
          <OmContent />
        </PageIntro>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
