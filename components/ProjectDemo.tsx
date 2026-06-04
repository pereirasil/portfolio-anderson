"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import StatsCounter from "./StatsCounter";
import ProjectCard from "./ProjectCard";
import ChatDemo from "./ChatDemo";

export default function ProjectDemo() {
  return (
    <section id="sistema-gestao" className="py-20 sm:py-24 px-4 sm:px-6 bg-[linear-gradient(135deg,#0f172a,rgba(13,31,52,0.9))] text-white scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-start">
          <div className="flex-1">
            <motion.h2 className="text-2xl sm:text-3xl font-bold mb-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Sistema de Gestão Escolar — Demonstração
            </motion.h2>
            <p className="text-slate-300 mb-6 max-w-2xl">Sistema completo para gerenciar alunos, professores, turmas, pagamentos e comunicação.</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href="https://escola.simplesmente.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-emerald-400 hover:bg-emerald-500 text-slate-900 font-semibold py-3 px-5 rounded-2xl shadow-xl transition-transform transform-gpu hover:scale-105"
              >
                Acessar Sistema
              </a>
              <a href="#sistema-gestao-chat" className="inline-flex items-center gap-3 bg-white/8 hover:bg-white/12 text-white font-semibold py-3 px-5 rounded-2xl transition">
                Abrir Chat Demo
              </a>
            </div>

            {/* Credenciais de teste */}
            <CredentialsBox />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-white/6 rounded-xl text-center">
                <div className="text-sm text-white/80">Alunos</div>
                <StatsCounter value={1240} />
              </div>
              <div className="p-4 bg-white/6 rounded-xl text-center">
                <div className="text-sm text-white/80">Professores</div>
                <StatsCounter value={86} />
              </div>
              <div className="p-4 bg-white/6 rounded-xl text-center">
                <div className="text-sm text-white/80">Turmas</div>
                <StatsCounter value={42} />
              </div>
              <div className="p-4 bg-white/6 rounded-xl text-center">
                <div className="text-sm text-white/80">Pagamentos</div>
                <StatsCounter value={3214} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <ProjectCard title="Matrículas e histórico" desc="Fluxo de matrícula, histórico escolar e geração de relatórios em PDF." />
              <ProjectCard title="Gestão de turmas" desc="Criação de turmas, atribuição de professores e horários." />
              <ProjectCard title="Financeiro" desc="Controle de cobranças, integrações de pagamento e conciliação automática." />
              <ProjectCard title="Comunicação" desc="Mensageria interna, envio de notificações e integração com WhatsApp." />
            </div>
          </div>

          <aside className="w-full lg:w-96">
            <div id="sistema-gestao-chat" className="mb-6">
              <ChatDemo />
            </div>
            <div className="p-4 bg-white/6 rounded-2xl">
              <h4 className="font-semibold mb-2">Principais integrações</h4>
              <ul className="text-sm text-slate-200 space-y-2">
                <li>API de pagamentos (PagSeguro, Stripe)</li>
                <li>Sistemas de boletos e conciliação</li>
                <li>Autenticação SSO / OAuth</li>
                <li>Relatórios exportáveis (CSV, PDF)</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function CredentialsBox() {
  const [copied, setCopied] = useState<string | null>(null);

  const creds = [
    { title: "Escola (Administrador)", email: "ceag@gmail.com", password: "12345678" },
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
    <div className="mt-4 p-4 bg-white/6 rounded-2xl">
      <h5 className="font-semibold text-white mb-2">Credenciais para Teste</h5>
      <p className="text-sm text-white/80 mb-3">Sistema online: <a href="https://escola.simplesmente.app/" target="_blank" rel="noreferrer" className="underline">escola.simplesmente.app</a></p>
      <div className="space-y-3">
        {creds.map((c) => (
          <div key={c.title} className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm font-medium text-white">{c.title}</div>
              <div className="text-xs text-white/70">Login: {c.email} • Senha: {c.password}</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copy(c.email)}
                className="px-3 py-1 text-sm rounded-md bg-white/8 hover:bg-white/12"
              >
                Copiar login
              </button>
              <button
                onClick={() => copy(c.password)}
                className="px-3 py-1 text-sm rounded-md bg-white/8 hover:bg-white/12"
              >
                Copiar senha
              </button>
            </div>
          </div>
        ))}
      </div>
      {copied && <div className="mt-3 text-sm text-emerald-300">Copiado: {copied}</div>}
      <div className="mt-4 text-sm text-white/80">
        <div className="font-semibold">Principais Funcionalidades</div>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Gestão de alunos, professores e responsáveis</li>
          <li>Controle de turmas e disciplinas</li>
          <li>Registro de notas e frequência</li>
          <li>Agenda e calendário escolar</li>
          <li>Chat e comunicação em tempo real</li>
          <li>Gestão financeira e pagamentos</li>
          <li>Sistema de notificações</li>
          <li>Upload e gerenciamento de arquivos</li>
          <li>Controle de acesso por perfil</li>
          <li>Dashboard administrativo completo</li>
        </ul>

        <div className="font-semibold mt-3">Tecnologias</div>
        <div className="mt-2 text-sm text-white/80 grid grid-cols-2 gap-1">
          {[
            "React 19",
            "Vite 7",
            "JavaScript",
            "NestJS",
            "TypeScript",
            "MySQL",
            "TypeORM",
            "JWT Authentication",
            "Socket.IO",
            "Zustand",
            "TanStack Query",
            "Axios",
            "Tailwind CSS",
            "Redis",
          ].map((t) => (
            <div key={t} className="text-xs">{t}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
