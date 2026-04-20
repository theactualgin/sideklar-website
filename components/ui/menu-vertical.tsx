"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type MenuItem = {
  label: string;
  href: string;
};

interface MenuVerticalProps {
  menuItems: MenuItem[];
  color?: string;
  onItemClick?: () => void;
}

const MotionLink = motion.create(Link);

export const MenuVertical = ({
  menuItems = [],
  color = "#3ADBA1",
  onItemClick,
}: MenuVerticalProps) => {
  return (
    <div className="flex w-fit flex-col gap-4">
      {menuItems.map((item, index) => (
        <motion.div
          key={`${item.href}-${index}`}
          className="group/nav flex items-center gap-2 cursor-pointer text-[#0F0F0F]"
          initial="initial"
          whileHover="hover"
        >
          <motion.div
            variants={{
              initial: { x: "-100%", opacity: 0 },
              hover: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ color }}
          >
            <ArrowRight strokeWidth={3} className="size-8" />
          </motion.div>

          <MotionLink
            href={item.href}
            onClick={onItemClick}
            variants={{
              initial: { x: -32, color: "inherit" },
              hover: { x: 0, color },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="font-bold text-3xl no-underline"
          >
            {item.label}
          </MotionLink>
        </motion.div>
      ))}
    </div>
  );
};
