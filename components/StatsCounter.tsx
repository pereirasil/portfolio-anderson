"use client";

import { useEffect, useRef } from "react";

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function StatsCounter({ value, suffix = "", duration = 1200 }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * value);
      if (ref.current) ref.current.textContent = `${current}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
      else if (ref.current) ref.current.textContent = `${value}${suffix}`;
    };

    requestAnimationFrame(tick);
  }, [value, suffix, duration]);

  return <span ref={ref} className="font-bold text-3xl sm:text-4xl text-white" />;
}
