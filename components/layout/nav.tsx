"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MenuVertical } from "@/components/ui/menu-vertical";
import { Logo } from "@/components/ui/logo";
import { SiteButton } from "@/components/ui/site-button";

const navLinks = [
  { label: "Tjenester", href: "/tjenester" },
  { label: "Pakker", href: "/pakker" },
  { label: "Prosjekter", href: "/prosjekter" },
  { label: "Artikler", href: "/artikler" },
  { label: "Om oss", href: "/om" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  const openWidget = () => {
    if (typeof window !== "undefined" && (window as any).openChatWidget) {
      (window as any).openChatWidget();
    }
  };

  return (
    <nav className="border-b border-[#0A2349]/10 bg-white px-6">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-between">
        <a href="/">
          <Logo />
        </a>
        <ul className="hidden items-center gap-9 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#0A2349]/70 underline decoration-transparent decoration-2 underline-offset-[8px] transition-colors hover:text-[#0A2349] hover:decoration-[#3ADBA1]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <SiteButton variant="dark" onClick={openWidget} size="sm" className="hidden md:inline-flex">
          Kontakt oss
        </SiteButton>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-8 border-t border-[#0A2349]/10 bg-white py-8">
          <MenuVertical
            menuItems={navLinks}
            onItemClick={() => setOpen(false)}
          />
          <SiteButton variant="dark" onClick={() => { setOpen(false); openWidget(); }} size="lg" className="w-full">
            Kontakt oss
          </SiteButton>
        </div>
      )}
    </nav>
  );
}
