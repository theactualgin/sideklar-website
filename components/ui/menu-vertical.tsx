"use client";

import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  onItemClick?: () => void;
}

/** The phone menu: large plain links, nothing that only works on hover. */
export const MenuVertical = ({ menuItems = [], onItemClick }: MenuVerticalProps) => {
  return (
    <ul className="flex flex-col">
      {menuItems.map((item) => (
        <li key={item.href} className="border-b border-[#0A2349]/10">
          <Link
            href={item.href}
            onClick={onItemClick}
            className="block py-4 text-3xl font-bold tracking-tight text-[#0A2349] no-underline transition-colors hover:text-[#0F9F70]"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
