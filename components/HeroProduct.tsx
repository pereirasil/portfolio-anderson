"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

const LINKEDIN_URL = "https://www.linkedin.com/in/anderson-pereira-06a372429/";
const GITHUB_URL = "https://github.com/pereirasil";

export default function HeroProduct() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden px-4 pb-16 pt-28 text-white scroll-mt-16"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_340px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
            Desenvolvedor Full Stack
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Transformo ideias em produtos digitais.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Olá, eu sou Anderson Pereira, Desenvolvedor Web Full Stack. Desenvolvo aplicações modernas, APIs e sistemas
            digitais com foco em performance, experiência do usuário e soluções para problemas reais.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projetos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-brand-primary-hover"
            >
              Ver projetos
              <FaArrowRight size={14} />
            </a>
            <a
              href="#contato"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/[0.14] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Falar comigo
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/[0.14] px-4 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/[0.14] px-4 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </div>

          <div className="mt-8 text-sm font-medium text-slate-400">
            TypeScript <span className="text-cyan-300">•</span> React <span className="text-cyan-300">•</span> Next.js{" "}
            <span className="text-cyan-300">•</span> Node.js <span className="text-cyan-300">•</span> PostgreSQL
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-none"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-[28px] bg-blue-500/[0.16] blur-2xl" />
            <div className="relative rounded-2xl border border-white/[0.12] bg-white/[0.08] p-3 shadow-2xl shadow-black/30">
              <img
                src="/certificados/imagem-perfil.png"
                alt="Anderson Pereira"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
              <div className="mt-3 rounded-lg border border-white/10 bg-slate-950/70 p-4">
                <div className="text-sm font-bold text-white">Anderson Pereira</div>
                <div className="mt-1 text-xs text-slate-400">Web Full Stack Developer</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
