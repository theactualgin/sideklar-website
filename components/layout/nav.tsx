"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { MenuVertical } from "@/components/ui/menu-vertical";

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
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/">
          <img src="/sideklar-logo.svg" alt="Sideklar" className="h-8 w-auto dark:hidden" />
          <img src="/sideklar-logo-white.svg" alt="Sideklar" className="h-8 w-auto hidden dark:block" />
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6B7280] dark:text-[#9CA3AF]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="relative inline-block"
              >
                <motion.span
                  variants={{
                    rest: { color: "#6B7280", y: 0 },
                    hover: { color: "#3ADBA1", y: -1 },
                  }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  {link.label}
                </motion.span>
                <motion.span
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ originX: 0 }}
                  className="absolute -bottom-0.5 left-0 right-0 h-px bg-[#3ADBA1] block"
                />
              </motion.a>
            </li>
          ))}
        </ul>
        <button onClick={openWidget} className="hidden md:inline-flex items-center px-5 py-2 rounded-lg bg-[#3ADBA1] text-white text-sm font-semibold hover:bg-[#2BC48A] transition-colors">
          Kontakt oss
        </button>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-8 py-8 flex flex-col gap-8">
          <MenuVertical
            menuItems={navLinks}
            onItemClick={() => setOpen(false)}
          />
          <button onClick={() => { setOpen(false); openWidget(); }} className="w-full px-5 py-3 rounded-lg bg-[#3ADBA1] text-[#0F0F0F] font-semibold">
            Kontakt oss
          </button>
        </div>
      )}
    </nav>
  );
}
