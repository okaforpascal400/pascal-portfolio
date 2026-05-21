"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { formatCompact } from "@/lib/utils";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
  format?: "compact" | "default";
  duration?: number;
};

export function AnimatedCounter({
  value,
  suffix = "",
  format = "default",
  duration = 2000,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let rafId: number;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value, duration]);

  const formatted =
    format === "compact" ? formatCompact(display) : display.toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  );
}
