"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return; // disable on touch devices

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;
    let lastEventTime = 0;

    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      // throttle to ~60fps via simple time check
      if (now - lastEventTime < 8) return;
      lastEventTime = now;
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const loop = () => {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      if (ring.current) ring.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onEnter = () => document.body.classList.add("cursor-hover");
    const onLeave = () => document.body.classList.remove("cursor-hover");

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    raf = requestAnimationFrame(loop);

    // interactive elements
    const selectors = ["button", "a", "input", "textarea", "label", "[role=button]"];
    const els = Array.from(document.querySelectorAll(selectors.join(",")));
    els.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(raf);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="pointer-events-none fixed top-0 left-0 w-10 h-10 rounded-full bg-white/5 ring-1 ring-white/10 blur-md mix-blend-screen transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out opacity-90 z-[9998]"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dot}
        className="pointer-events-none fixed top-0 left-0 w-2 h-2 rounded-full bg-white z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
