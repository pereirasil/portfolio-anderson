"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMobileAlt,
  FaNodeJs,
  FaReact,
  FaServer,
  FaWhatsapp,
} from "react-icons/fa";
import { SiJavascript, SiNestjs, SiNextdotjs, SiPostgresql, SiRedis, SiTailwindcss, SiTypescript } from "react-icons/si";
import NavbarNew from "../components/NavbarNew";
import HeroProduct from "../components/HeroProduct";
import ProjectDemo from "../components/ProjectDemo";

const WHATSAPP_NUMBER = "5521981413688";
const EMAIL = "anderson.informata@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/anderson-pereira-06a372429/";
const GITHUB_URL = "https://github.com/pereirasil";

const techGroups = [
  {
    title: "Frontend",
    icon: FaReact,
    items: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "NestJS", icon: SiNestjs },
      { name: "APIs REST", icon: FaCode },
    ],
  },
  {
    title: "Banco e infraestrutura",
    icon: FaDatabase,
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "PostGIS", icon: FaDatabase },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "Ferramentas",
    icon: FaGithub,
    items: [
      { name: "Git", icon: FaCode },
      { name: "GitHub", icon: FaGithub },
      { name: "Jest", icon: FaCode },
      { name: "Cypress", icon: FaCode },
    ],
  },
];

const processSteps = [
  { number: "01", title: "Planejamento", text: "Entendimento do problema, objetivo do produto e prioridades." },
  { number: "02", title: "Desenvolvimento", text: "Construção das telas, APIs, banco de dados e integrações." },
  { number: "03", title: "Testes", text: "Validação dos fluxos principais, responsividade e comportamento." },
  { number: "04", title: "Entrega", text: "Publicação, ajustes finais e suporte para evolução do produto." },
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white">
      <NavbarNew />

      <main>
        <HeroProduct />
        <ProjectDemo />

        <section id="tecnologias" className="bg-brand-surface px-4 py-20 text-slate-950 sm:px-6 sm:py-24 scroll-mt-16">
          <div className="mx-auto max-w-6xl">
            <SectionIntro
              eyebrow="Tecnologias"
              title="Stack clara para produtos modernos"
              text="Uma visão rápida das principais ferramentas que uso para construir interfaces, APIs, bancos e automações."
            />

            <div className="grid gap-5 md:grid-cols-2">
              {techGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-2xl border border-brand-border bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-brand-primary">
                      <group.icon size={18} />
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-950">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700"
                      >
                        <item.icon size={15} className="text-brand-primary" />
                        {item.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-white px-4 py-20 text-slate-950 sm:px-6 sm:py-24 scroll-mt-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionIntro
              eyebrow="Sobre mim"
              title="Desenvolvedor focado em sistemas que resolvem problemas reais"
              text="Gosto de construir produtos digitais com base em contexto, clareza e evolução constante."
            />

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {[
                { title: "Web e mobile", text: "Aplicações responsivas, apps e interfaces pensadas para uso contínuo.", icon: FaMobileAlt },
                { title: "APIs e dados", text: "Back-end organizado, integrações e estruturas de dados consistentes.", icon: FaServer },
                { title: "Produto", text: "Fluxos simples, hierarquia clara e foco no usuário final.", icon: FaCode },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <item.icon size={22} className="mb-4 text-brand-primary" />
                  <h3 className="text-base font-extrabold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Processo</span>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Do plano a entrega</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-400">
                Um fluxo objetivo para sair da ideia, construir com consistência e entregar algo pronto para uso.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="mb-5 text-sm font-extrabold text-cyan-300">{step.number}</div>
                  <h3 className="text-lg font-extrabold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="relative overflow-hidden bg-white px-4 py-20 text-slate-950 sm:px-6 sm:py-24 scroll-mt-16">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Contato</span>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Vamos construir algo juntos?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Empresas, recrutadores e clientes podem falar comigo para projetos web, aplicativos, APIs e automações.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: 0.08 }}
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20falar%20sobre%20um%20projeto.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#22C55E] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-green-600"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition-colors hover:border-brand-primary hover:text-brand-primary"
              >
                <FaEnvelope size={17} />
                E-mail
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition-colors hover:border-brand-primary hover:text-brand-primary"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-105 hover:bg-green-600"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        aria-label="Abrir WhatsApp"
      >
        <FaWhatsapp size={26} />
      </motion.a>
    </div>
  );
}

function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      className="mb-10 max-w-3xl"
    >
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-slate-950 sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{text}</p>
    </motion.div>
  );
}
