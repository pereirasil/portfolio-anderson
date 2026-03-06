"use client";

import {
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaDatabase,
  FaWhatsapp,
  FaLaptopCode,
  FaServer,
  FaCogs,
  FaPlug,
  FaTasks as FaManual,
  FaPhp,
  FaMobileAlt,
} from "react-icons/fa";
import { SiTypescript, SiNestjs } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "5521981413688";
const EMAIL = "anderson.informata@gmail.com";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: "hero", label: "Início" },
    { id: "problema", label: "Problema" },
    { id: "solucoes", label: "Soluções" },
    { id: "processo", label: "Processo" },
    { id: "tecnologias", label: "Tecnologias" },
    { id: "sobre", label: "Sobre" },
    { id: "contato", label: "Contato" },
    { id: "curriculo", label: "Currículo", href: "/curriculo" },
  ];

  const scrollTo = (id: string) => {
    if (id === "curriculo") return;
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Navbar fixa */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-shadow">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="font-bold text-lg text-slate-900">
              Anderson Pereira
            </a>
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) =>
                item.href ? (
                  <a
                    key={item.id}
                    href={item.href}
                    className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <>
                <motion.div
                  key="menu-overlay"
                  className="fixed inset-0 top-16 bg-black/20 z-40 md:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                  aria-hidden="true"
                />
                <motion.div
                  key="menu-panel"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden overflow-hidden border-t border-slate-200 relative z-50 bg-white"
                >
                  <nav className="py-3" aria-label="Menu mobile">
                    {menuItems.map((item) =>
                      item.href ? (
                        <a
                          key={item.id}
                          href={item.href}
                          className="block py-3.5 px-4 text-slate-600 font-medium active:bg-slate-100 min-h-[44px] flex items-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => scrollTo(item.id)}
                          className="block w-full text-left py-3.5 px-4 text-slate-600 font-medium active:bg-slate-100 min-h-[44px] flex items-center"
                        >
                          {item.label}
                        </button>
                      )
                    )}
                  </nav>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="pt-16">
        {/* 1. Hero - ocupa quase toda a tela */}
        <section
          id="hero"
          className="min-h-[95vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden scroll-mt-16"
        >
          {/* Fundo tecnológico: gradiente + grid sutil */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
            <motion.div
              className="flex-shrink-0 mx-auto md:mx-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src="/certificados/imagem-perfil.png"
                alt="Anderson Pereira - Desenvolvedor Full Stack"
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl object-cover shadow-2xl ring-2 ring-white/20"
              />
            </motion.div>
            <div className="text-center md:text-left flex-1">
              <motion.p
                className="text-slate-400 font-medium text-sm mb-2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Anderson Pereira
              </motion.p>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Desenvolvimento de Sistemas Web e Aplicativos Sob Medida
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-slate-300 mb-4 max-w-2xl md:max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Transformo ideias e processos manuais em sistemas web modernos, automatizados e eficientes.
              </motion.p>
              <motion.p
                className="text-slate-400 mb-10 max-w-2xl md:max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                Ajudo empresas a organizar informações, automatizar tarefas e criar plataformas digitais e aplicativos
                através de soluções tecnológicas personalizadas.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25"
                >
                  Solicitar Orçamento
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-6 rounded-xl border border-white/30 transition-all duration-200"
                >
                  <FaWhatsapp size={20} />
                  Falar no WhatsApp
                </a>
              </motion.div>
              <motion.div
                className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
              >
                <span>Contato:</span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FaWhatsapp size={18} className="text-emerald-400" />
                  21 98141-3688
                </a>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                  <FaEnvelope size={16} />
                  {EMAIL}
                </a>
              </motion.div>
            </div>
          </div>

          {/* Indicador de scroll animado */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* 2. Problema das empresas */}
        <section id="problema" className="py-20 sm:py-24 px-4 sm:px-6 bg-white transition-colors scroll-mt-16">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              Muitas empresas ainda dependem de planilhas
            </motion.h2>
            <motion.p
              className="text-slate-600 text-center max-w-3xl mx-auto mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
            >
              Muitos negócios ainda utilizam planilhas ou processos manuais para gerenciar informações importantes.
              Isso gera perda de produtividade, retrabalho e dificuldade de organização.
              <br />
              <span className="mt-2 block font-medium text-slate-700">
                Um sistema desenvolvido sob medida permite centralizar dados, automatizar tarefas e melhorar a eficiência
                da empresa.
              </span>
            </motion.p>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  icon: FaManual,
                  title: "Processos manuais",
                  desc: "Tarefas repetitivas que consomem tempo e aumentam o risco de erros.",
                },
                {
                  icon: FaDatabase,
                  title: "Informações desorganizadas",
                  desc: "Dados espalhados em planilhas e sistemas que não se comunicam.",
                },
                {
                  icon: FaCogs,
                  title: "Falta de automação",
                  desc: "Trabalho que poderia ser automatizado continua dependendo de intervenção manual.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-brand-primary/30 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.1 }}
                >
                  <card.icon className="text-brand-primary mb-4" size={32} />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Soluções */}
        <section id="solucoes" className="py-20 sm:py-24 px-4 sm:px-6 bg-slate-50 scroll-mt-16">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Soluções que posso desenvolver
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: FaLaptopCode,
                  title: "Sistemas Web Sob Medida",
                  desc: "Desenvolvimento de plataformas completas para empresas, incluindo sistemas administrativos, painéis de controle e plataformas online.",
                  examples: ["CRM", "Sistemas administrativos", "Plataformas web", "Dashboards"],
                },
                {
                  icon: FaMobileAlt,
                  title: "Desenvolvimento de Aplicativos",
                  desc: "Criação de aplicativos mobile (Android e iOS) para gestão, vendas, atendimento ou uso interno da empresa.",
                  examples: ["Apps nativos e híbridos", "Integração com sistemas", "Interface moderna"],
                },
                {
                  icon: FaCogs,
                  title: "Automação de Processos",
                  desc: "Soluções que substituem tarefas manuais por sistemas automatizados.",
                  examples: ["Automação de dados", "Integração entre sistemas", "Geração automática de relatórios"],
                },
                {
                  icon: FaPlug,
                  title: "APIs e Integrações",
                  desc: "Desenvolvimento de APIs e integração entre diferentes sistemas e serviços.",
                  examples: ["Pagamentos", "Serviços externos", "Integrações entre plataformas"],
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1 }}
                >
                  <card.icon className="text-brand-primary mb-5 transition-transform group-hover:scale-110" size={36} />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                  <p className="text-slate-600 text-sm mb-5">{card.desc}</p>
                  <ul className="space-y-2">
                    {card.examples.map((ex) => (
                      <li key={ex} className="text-slate-500 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Processo - timeline */}
        <section id="processo" className="py-20 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden scroll-mt-16">
          <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto w-full min-w-0">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Como funciona o desenvolvimento do projeto
            </motion.h2>
            <div className="relative w-full min-w-0">
              {/* Linha vertical da timeline */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-200 sm:left-6 md:left-1/2 md:-translate-x-px" />
              {[
                {
                  step: 1,
                  title: "Entendimento da necessidade",
                  text: "Análise do problema e entendimento do objetivo do projeto.",
                },
                {
                  step: 2,
                  title: "Planejamento da solução",
                  text: "Definição da arquitetura do sistema e das tecnologias utilizadas.",
                },
                {
                  step: 3,
                  title: "Desenvolvimento",
                  text: "Construção do sistema com foco em performance, organização e segurança.",
                },
                {
                  step: 4,
                  title: "Testes e validação",
                  text: "Testes para garantir que o sistema funcione corretamente.",
                },
                {
                  step: 5,
                  title: "Entrega e suporte",
                  text: "Entrega da aplicação funcionando e suporte para melhorias.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  className="relative flex items-start gap-4 sm:gap-5 pl-14 sm:pl-16 md:pl-0 md:flex md:gap-0 mb-10 sm:mb-12 last:mb-0 md:odd:flex-row md:even:flex-row-reverse md:odd:pr-[calc(50%+2rem)] lg:odd:pr-[calc(50%+2.5rem)] md:even:pl-[calc(50%+2rem)] lg:even:pl-[calc(50%+2.5rem)] min-w-0"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="flex-shrink-0 absolute left-0 sm:left-1 md:relative md:left-auto flex items-start md:items-center md:absolute md:left-1/2 md:translate-x-[-50%]">
                    <span className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center text-sm md:text-base shadow-md z-10 flex-shrink-0">
                      {item.step}
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border border-slate-200 min-w-0 w-full overflow-hidden md:max-w-[calc(50%-2.5rem)] lg:max-w-[calc(50%-3rem)] md:odd:mr-auto md:even:ml-auto">
                    <h3 className="font-bold text-slate-900 mb-2 text-base sm:text-lg md:text-xl break-words">{item.title}</h3>
                    <p className="text-slate-600 text-sm md:text-base break-words">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Tecnologias - logos grandes com hover */}
        <section id="tecnologias" className="py-20 sm:py-24 px-4 sm:px-6 bg-slate-50 scroll-mt-16">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Tecnologias modernas
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-500" },
                { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
                { name: "React.js", icon: FaReact, color: "text-cyan-400" },
                { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
                { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
                { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
                { name: "SQL", icon: FaDatabase, color: "text-slate-600" },
                { name: "NoSQL", icon: FaDatabase, color: "text-slate-600" },
                { name: "APIs REST", icon: FaServer, color: "text-slate-600" },
              ].map((t) => (
                <motion.div
                  key={t.name}
                  className="flex flex-col items-center gap-3 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-brand-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-default min-w-[120px]"
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, scale: 0.95 }}
                >
                  <t.icon size={48} className={t.color} />
                  <span className="font-semibold text-slate-800 text-center">{t.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Sobre - com foto ao lado */}
        <section id="sobre" className="py-20 sm:py-24 px-4 sm:px-6 bg-white scroll-mt-16">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Sobre o desenvolvedor
            </motion.h2>
            <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14">
              <motion.div
                className="flex-shrink-0 mx-auto md:mx-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="/certificados/imagem-perfil.png"
                  alt="Anderson Pereira"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover shadow-xl border border-slate-200"
                />
              </motion.div>
              <div className="text-slate-600 space-y-4 text-center md:text-left">
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Sou desenvolvedor full stack especializado na criação de sistemas web, desenvolvimento de aplicativos e
                  soluções tecnológicas sob medida.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                >
                  Trabalho desenvolvendo aplicações completas (web e mobile), desde a interface do usuário até a
                  construção de APIs e integrações com diferentes serviços.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Meu foco é criar sistemas que realmente ajudem empresas a organizar processos, automatizar tarefas e
                  melhorar sua operação.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA Final - gradiente */}
        <section
          id="contato"
          className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden scroll-mt-16"
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Vamos transformar sua ideia em um sistema?
            </motion.h2>
            <motion.p
              className="text-slate-300 mb-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              Se você precisa de um sistema web, aplicativo, automatização de processos ou uma plataforma digital para
              sua empresa, entre em contato.
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-6 mb-10 text-slate-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <FaWhatsapp size={20} className="text-emerald-400" />
                21 98141-3688
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <FaEnvelope size={18} />
                {EMAIL}
              </a>
            </motion.div>
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20falar%20sobre%20meu%20projeto.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg shadow-emerald-500/30"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <FaWhatsapp size={24} />
              Falar sobre meu projeto
            </motion.a>
          </div>
        </section>
      </main>

      {/* Botão WhatsApp flutuante */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40 transition-transform hover:scale-110"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
        aria-label="Abrir WhatsApp"
      >
        <FaWhatsapp size={28} />
      </motion.a>
    </div>
  );
}
