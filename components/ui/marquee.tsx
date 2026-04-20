"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
  pauseOnHover?: boolean;
  paused?: boolean;
  direction?: "left" | "right";
  fade?: boolean;
  fadeAmount?: number;
}

export function Marquee({
  children,
  className,
  duration = 30,
  pauseOnHover = false,
  paused = false,
  direction = "left",
  fade = true,
  fadeAmount = 8,
  ...props
}: MarqueeProps) {
  const [isPaused, setIsPaused] = React.useState(false);
  const items = React.Children.toArray(children);

  return (
    <>
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          animation: ${direction === "left" ? "marquee-left" : "marquee-right"} ${duration}s linear infinite;
        }
        .marquee-track.paused { animation-play-state: paused; }
      `}</style>
      <div
        className={cn("flex w-full overflow-x-hidden", className)}
        style={{
          ...(fade && {
            maskImage: `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to right, transparent 0%, black ${fadeAmount}%, black ${100 - fadeAmount}%, transparent 100%)`,
          }),
        }}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        {...props}
      >
        <div className={cn("marquee-track shrink-0", (isPaused || paused) && "paused")}>
          {[...Array(4)].flatMap((_, rep) =>
            items.map((item, i) => <div key={`${rep}-${i}`} className="flex shrink-0">{item}</div>)
          )}
        </div>
      </div>
    </>
  );
}
