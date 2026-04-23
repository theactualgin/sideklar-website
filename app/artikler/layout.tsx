import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artikler - Tips om nettsider og branding | Sideklar",
  description: "Les våre artikler om nettsider, SEO, grafisk profil og digital markedsføring for norske bedrifter.",
  openGraph: {
    title: "Artikler - Tips om nettsider og branding | Sideklar",
    description: "Les våre artikler om nettsider, SEO, grafisk profil og digital markedsføring for norske bedrifter.",
    url: "https://www.sideklar.no/artikler",
  },
};

export default function ArtiklerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
