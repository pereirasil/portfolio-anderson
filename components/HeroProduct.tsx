"use client";

import { motion } from "framer-motion";

export default function HeroProduct() {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center px-4 py-20 relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-[#071021] to-[#071831]" />
      <div className="relative z-10 max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="flex-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">Crio produtos digitais completos — do front ao backend</h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">Sistemas sob medida, APIs robustas e experiências de usuário elegantes. Transformo processos manuais em fluxos automáticos e escaláveis.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#sistema-gestao" className="px-6 py-3 rounded-xl bg-emerald-400 text-slate-900 font-semibold shadow-lg hover:scale-105 transition-transform">Ver demonstração</a>
              <a href="/curriculo" className="px-6 py-3 rounded-xl border border-white/10 text-white/90 hover:bg-white/6 transition">Baixar currículo</a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { k: "React", v: "Front-end" },
                { k: "Node / Nest", v: "Back-end" },
                { k: "MySQL", v: "Banco de dados" },
                { k: "Socket.IO", v: "Tempo real" },
              ].map((t) => (
                <div key={t.k} className="p-3 bg-white/6 rounded-lg">
                  <div className="text-sm text-white/80">{t.k}</div>
                  <div className="font-semibold text-white text-lg">{t.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-1/3">
            <div className="p-4 rounded-2xl glass">
              <img src="/certificados/imagem-perfil.png" alt="Anderson" className="w-full rounded-xl object-cover" />
              <div className="mt-4 text-white/80">
                <div className="font-semibold text-white">Anderson Pereira</div>
                <div className="text-sm">Full Stack Developer — produto, APIs, infra</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
