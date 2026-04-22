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
  title: "Sideklar - Nettsider, grafisk og teknisk",
  description: "Vi lager profesjonelle nettsider som gir bedriften din flere kunder. Klar på 3 dager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${inter.variable}`}>
      <head>
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
