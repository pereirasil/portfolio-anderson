"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NavbarNew() {
  const [open, setOpen] = useState(false);
  const items = ["Início", "Projetos", "Tecnologias", "Sobre", "Contato", "Currículo"];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="glass flex items-center justify-between px-4 py-3 rounded-2xl border border-white/6 shadow-md"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white font-bold">AP</div>
          <div>
            <div className="font-semibold text-white">Anderson Pereira</div>
            <div className="text-xs text-white/70">Full Stack Developer</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/90">
          {items.map((it) => (
            <button key={it} className="hover:text-white transition-colors">{it}</button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="/curriculo" className="hidden md:inline-flex text-sm bg-emerald-400 text-slate-900 px-3 py-1.5 rounded-lg font-semibold">Currículo</a>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">{open ? '✕' : '☰'}</button>
        </div>
      </motion.nav>
    </header>
  );
}
