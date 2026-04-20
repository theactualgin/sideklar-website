"use client";

export function Footer() {
  const openWidget = () => {
    if (typeof window !== "undefined" && (window as any).openWidget) {
      (window as any).openWidget();
    }
  };

  return (
    <footer className="bg-white text-[#0F0F0F] py-12 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <img src="/sideklar-logo.svg" alt="Sideklar" className="h-8 w-auto" />
        <ul className="flex gap-6 text-sm text-[#6B7280]">
          <li><a href="/tjenester" className="hover:text-[#0F0F0F] transition-colors">Tjenester</a></li>
          <li><a href="/pakker" className="hover:text-[#0F0F0F] transition-colors">Pakker</a></li>
          <li><a href="/#faq" className="hover:text-[#0F0F0F] transition-colors">FAQ</a></li>
        </ul>
        <button onClick={openWidget} className="px-5 py-2 rounded-lg bg-[#3ADBA1] text-white text-sm font-semibold hover:bg-[#2BC48A] transition-colors">
          Kontakt oss
        </button>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-100 text-center text-sm text-[#6B7280]">
        © {new Date().getFullYear()} Sideklar. Alle rettigheter forbeholdt.
      </div>
    </footer>
  );
}
