import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss | Sideklar",
  description: "Sideklar ble grunnlagt av Noah Lie. Vi hjelper norske bedrifter med profesjonelle nettsider og grafisk profil - raskt, ærlig og uten stress.",
  openGraph: {
    title: "Om oss | Sideklar",
    description: "Sideklar ble grunnlagt av Noah Lie. Vi hjelper norske bedrifter med profesjonelle nettsider og grafisk profil.",
    url: "https://www.sideklar.no/om",
  },
};

export default function OmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
