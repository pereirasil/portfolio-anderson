"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavbarNew() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const items = [
    { label: "Início", href: "#hero" },
    { label: "Projetos", href: "#projetos" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className={`flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-slate-950/20" : "border border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center gap-3">
          <a href="#hero" className="text-lg font-bold text-white tracking-normal">
            Anderson<span className="text-brand-primary">.</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/[0.72]">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/curriculo"
            className="hidden md:inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:bg-slate-100 transition-colors"
          >
            Currículo
          </a>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.12] text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </motion.nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-slate-950/95 shadow-xl md:hidden"
        >
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 px-4 py-3 text-sm font-medium text-white/[0.85] last:border-b-0 hover:bg-white/10"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/curriculo"
            onClick={() => setOpen(false)}
            className="block px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Currículo
          </a>
        </motion.div>
      )}
    </header>
  );
}
