import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import CookieBanner from "./components/CookieBanner";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sideklar — Nettsider og grafisk profil for norske bedrifter",
  description: "Vi lager profesjonelle nettsider, logoer og grafisk profil for norske bedrifter. Klar på 3 dager, ærlig pris og uten teknisk stress.",
  metadataBase: new URL("https://www.sideklar.no"),
  openGraph: {
    title: "Sideklar — Nettsider og grafisk profil for norske bedrifter",
    description: "Vi lager profesjonelle nettsider, logoer og grafisk profil for norske bedrifter. Klar på 3 dager, ærlig pris og uten teknisk stress.",
    url: "https://www.sideklar.no",
    siteName: "Sideklar",
    locale: "nb_NO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sideklar — Nettsider og grafisk profil for norske bedrifter",
    description: "Vi lager profesjonelle nettsider, logoer og grafisk profil for norske bedrifter. Klar på 3 dager.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sideklar",
  url: "https://www.sideklar.no",
  email: "hei@sideklar.no",
  description: "Vi lager profesjonelle nettsider, logoer og grafisk profil for norske bedrifter.",
  areaServed: "NO",
  founder: { "@type": "Person", name: "Noah Lie" },
  serviceType: ["Web Design", "Web Development", "Graphic Design", "SEO", "Logo Design"],
  priceRange: "$$",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sideklar",
  url: "https://www.sideklar.no",
};

const navJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "SiteNavigationElement", position: 1, name: "Tjenester", url: "https://www.sideklar.no/tjenester" },
    { "@type": "SiteNavigationElement", position: 2, name: "Pakker", url: "https://www.sideklar.no/pakker" },
    { "@type": "SiteNavigationElement", position: 3, name: "Prosjekter", url: "https://www.sideklar.no/prosjekter" },
    { "@type": "SiteNavigationElement", position: 4, name: "Artikler", url: "https://www.sideklar.no/artikler" },
    { "@type": "SiteNavigationElement", position: 5, name: "Om oss", url: "https://www.sideklar.no/om" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navJsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G3DNGZTD8V"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G3DNGZTD8V');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#0F0F0F] antialiased">
        <PageTransition>{children}</PageTransition>
        <CookieBanner />
      </body>
    </html>
  );
}
