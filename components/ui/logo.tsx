export function LogoMark({ height = 30, className = "" }: { height?: number; className?: string }) {
  const width = Math.round((height * 84) / 70);
  return (
    <svg
      width={width}
      height={height}
      viewBox="8 18 84 70"
      role="img"
      aria-label="Sideklar"
      className={className}
    >
      <circle cx="62" cy="40" r="17" fill="#3ADBA1" />
      <path
        d="M14 82 L38 46 L52 64 L64 52 L86 82 Z"
        strokeWidth="5"
        strokeLinejoin="round"
        className="fill-[#0A2349] stroke-[#0A2349] dark:fill-white dark:stroke-white"
      />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark height={30} />
      <span className="text-[22px] font-extrabold leading-none tracking-tight text-[#0A2349] dark:text-white">
        Sideklar
      </span>
    </span>
  );
}
