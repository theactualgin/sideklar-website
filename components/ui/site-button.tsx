import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "outline" | "onDark" | "ghostOnDark";
type Size = "sm" | "md" | "lg";

const base =
  "group/sb relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold tracking-tight " +
  "transition-[background-color,box-shadow,transform,border-color,color] duration-200 ease-out " +
  "active:translate-y-px focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A2349] dark:focus-visible:outline-[#3ADBA1] " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Mint: the main action
  primary:
    "bg-[#3ADBA1] text-[#0A2349] hover:bg-[#2fcb93]",
  // Navy: strong secondary on light backgrounds
  dark:
    "bg-[#0A2349] text-white hover:bg-[#12315f] dark:bg-white dark:text-[#0A2349] dark:hover:bg-[#e8eef7]",
  // Outline on light backgrounds
  outline:
    "border border-[#0A2349]/25 bg-transparent text-[#0A2349] hover:border-[#0A2349] hover:bg-[#0A2349]/5 dark:border-white/30 dark:text-white dark:hover:border-white dark:hover:bg-white/10",
  // Mint on navy backgrounds
  onDark:
    "bg-[#3ADBA1] text-[#0A2349] hover:bg-white",
  // Outline on navy backgrounds
  ghostOnDark:
    "border border-white/35 bg-white/5 text-white hover:border-white hover:bg-white/15",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-[15px]",
};

/** Same look for elements that must stay custom (e.g. animated buttons). */
export function siteButtonClass(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type Common = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  /** Show a small arrow that nudges on hover. */
  arrow?: boolean;
};

type AsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function SiteButton(props: AsButton | AsLink) {
  const { variant = "primary", size = "md", arrow, className, children, ...rest } = props;
  const cls = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {arrow && (
        <span aria-hidden="true" className="transition-transform duration-200 group-hover/sb:translate-x-0.5">
          →
        </span>
      )}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchor } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return (
      <a href={href} className={cls} {...anchor}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
