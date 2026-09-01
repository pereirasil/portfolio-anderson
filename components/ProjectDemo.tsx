"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight, FaCheck, FaClipboard, FaExternalLinkAlt } from "react-icons/fa";
import ChatDemo from "./ChatDemo";

const SCHOOL_URL = "https://escola.simplesmente.app/";

const featuredFeatures = [
  "Gestão de alunos, professores e responsáveis",
  "Controle de turmas, notas e frequência",
  "Financeiro, pagamentos e relatórios",
  "Comunicação em tempo real",
];

const featuredTechs = ["React", "NestJS", "TypeScript", "MySQL", "Socket.IO", "Redis"];

export default function ProjectDemo() {
  return (
    <section id="projetos" className="bg-white px-4 py-20 text-slate-950 sm:px-6 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mb-10 max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Projetos</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-slate-950 sm:text-4xl">
            Produtos digitais com foco em uso real
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Projetos criados para resolver problemas de operação, organizar informações e entregar uma experiência clara
            para usuários finais.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-200/70"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="mb-5 flex flex-wrap gap-2">
                {featuredTechs.map((tech) => (
                  <span key={tech} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-extrabold text-slate-950 sm:text-3xl">
                Sistema de Gestão Escolar
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Plataforma completa para gerenciar alunos, professores, turmas, pagamentos, arquivos e comunicação entre
                escola, professores e alunos.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {featuredFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-primary">
                      <FaCheck size={11} />
                    </span>
                    <span className="text-sm font-medium leading-6 text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="hidden lg:block">
                <ProjectActions />
                <CredentialsBox />
              </div>
            </div>

            <div className="flex items-center justify-center border-t border-slate-200 bg-slate-950 p-4 text-white lg:min-h-full lg:border-l lg:border-t-0 lg:p-5">
              <div id="sistema-gestao-chat" className="flex w-full items-stretch">
                <ChatDemo />
              </div>
            </div>

            <div className="p-6 pt-0 sm:p-8 sm:pt-0 lg:hidden">
              <ProjectActions />
              <CredentialsBox />
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

function ProjectActions() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        href={SCHOOL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-primary-hover"
      >
        Ver projeto
        <FaExternalLinkAlt size={13} />
      </a>
      <a
        href="#sistema-gestao-chat"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition-colors hover:border-brand-primary hover:text-brand-primary"
      >
        Detalhes
        <FaArrowRight size={13} />
      </a>
    </div>
  );
}

function CredentialsBox() {
  const [copied, setCopied] = useState<string | null>(null);

  const creds = [
    { title: "Escola", email: "ceag@gmail.com", password: "12345678" },
    { title: "Professor", email: "11223344590", password: "12345678" },
    { title: "Aluno", email: "14544349702", password: "12345678" },
  ];

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="mt-8 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-950">
        <FaClipboard size={14} className="text-brand-primary" />
        Credenciais para teste
      </div>
      <div className="grid gap-3">
        {creds.map((cred) => (
          <div
            key={cred.title}
            className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="text-sm font-bold text-slate-800">{cred.title}</div>
              <div className="mt-1 text-xs text-slate-500">
                Login: {cred.email} | Senha: {cred.password}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copy(cred.email)}
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:border-brand-primary hover:text-brand-primary"
              >
                Login
              </button>
              <button
                onClick={() => copy(cred.password)}
                className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:border-brand-primary hover:text-brand-primary"
              >
                Senha
              </button>
            </div>
          </div>
        ))}
      </div>
      {copied && <div className="mt-3 text-sm font-medium text-brand-primary">Copiado: {copied}</div>}
    </div>
  );
}
