import type { ReactNode } from "react";

/** One header style for every section: a plain label, a big headline, an optional link. */
export function SectionHead({
  label,
  title,
  intro,
  action,
  onDark = false,
  as: Heading = "h2",
  className = "",
}: {
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  action?: ReactNode;
  onDark?: boolean;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div className={`mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between ${className}`}>
      <div>
        <p className={`mb-4 text-sm font-medium ${onDark ? "text-white/60" : "text-[#0A2349]/55"}`}>{label}</p>
        <Heading
          className={`max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl ${
            onDark ? "text-white" : "text-[#0A2349]"
          }`}
        >
          {title}
        </Heading>
        {intro && (
          <p className={`mt-5 max-w-xl text-base leading-relaxed md:text-lg ${onDark ? "text-white/70" : "text-[#0A2349]/65"}`}>
            {intro}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

/** Text link with a mint underline. */
export function TextLink({ href, children, onDark = false }: { href: string; children: ReactNode; onDark?: boolean }) {
  return (
    <a
      href={href}
      className={`self-start text-sm font-semibold underline decoration-[#3ADBA1] decoration-2 underline-offset-[6px] transition-colors hover:decoration-[3px] md:self-auto ${
        onDark ? "text-white" : "text-[#0A2349]"
      }`}
    >
      {children}
    </a>
  );
}
