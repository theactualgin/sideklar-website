import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sideklar | Nettsider for bedrifter",
  description: "Vi lager profesjonelle nettsider som gir bedriften din flere kunder. Klar på 3 dager.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-[#FAFAFA] text-[#0F0F0F] antialiased">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
