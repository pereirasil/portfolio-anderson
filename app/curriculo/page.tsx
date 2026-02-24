"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Curriculo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-surface to-slate-100 text-slate-900">
      <Navbar />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-8 pt-20"
      >
        <div className="bg-brand-surface-elevated rounded-2xl shadow-xl p-8 border border-brand-border">
          <h1 className="text-4xl font-bold text-center text-slate-900 border-b-2 border-brand-border pb-4 mb-8">
          Anderson Pereira
        </h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Informações de Contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p className="flex items-center">
                <span className="font-medium text-slate-700">Localização:</span>
                <span className="ml-2">Mesquita, RJ</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium text-slate-700">Email:</span>
                <span className="ml-2">anderson.informata@gmail.com</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium text-slate-700">Telefone:</span>
                <span className="ml-2">(21) 98141-3688</span>
              </p>
              <p className="flex items-center">
                <span className="font-medium text-slate-700">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/anderson-pereira-61375a254/"
              target="_blank"
              rel="noopener noreferrer"
                  className="ml-2 text-brand-primary hover:text-brand-primary-hover transition-colors"
            >
                  Anderson Pereira
            </a>
          </p>
            </div>
        </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Objetivo Profissional</h2>
            <p className="text-slate-700 leading-relaxed">
              Atuar como desenvolvedor Full-Stack, criando soluções eficientes e
            contribuindo para o crescimento da empresa e a melhoria da experiência do
            usuário.
          </p>
        </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Resumo</h2>
            <p className="text-slate-700 leading-relaxed">
            Atualmente, atuo na Markts, desenvolvendo um aplicativo com tecnologias
            como React Native, Node.js, React, TypeScript e NestJS. Fiz um curso de PHP
            na Coti Informática e um curso de HTML, JavaScript, React Native e
            Desenvolvimento de API com Node.js na Udemy. Estou cursando Análise e
            Desenvolvimento de Sistemas e busco continuamente aprimorar minhas
            habilidades técnicas e contribuir para o sucesso dos projetos em que estou
            envolvido.
          </p>
        </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Formação</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">Análise e Desenvolvimento de Sistemas - UniFAVENI</p>
              <p className="text-gray-500 text-sm mt-1">Conclusão prevista: Julho 2025</p>
            </div>
        </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Outros Cursos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-brand-surface p-4 rounded-lg border border-brand-border">
                <p className="font-medium text-slate-700">PHP</p>
                <p className="text-brand-muted text-sm">Coti Informática</p>
              </div>
              <div className="bg-brand-surface p-4 rounded-lg border border-brand-border">
                <p className="font-medium text-slate-700">Desenvolvimento Web</p>
                <p className="text-brand-muted text-sm">Udemy</p>
              </div>
            </div>
        </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Principais Tecnologias</h2>
            <div className="flex flex-wrap gap-2">
              {["PHP", "Node.js", "JavaScript", "SQL", "NestJS", "React.js", "TypeScript", "NoSQL"].map((tech) => (
                <span key={tech} className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm border border-brand-border">
                  {tech}
                </span>
              ))}
            </div>
        </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Experiência</h2>
            <div className="space-y-6">
              <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
                <h3 className="text-xl font-bold text-slate-800">Markts</h3>
                <p className="text-slate-600 mt-2">Desenvolvedor Full Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React Native", "React.js", "Node.js", "NestJS", "Styled-Components", "TypeScript"].map((tech) => (
                    <span key={tech} className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-brand-surface p-6 rounded-lg border border-brand-border">
                <h3 className="text-xl font-bold text-slate-800">Idea Queue</h3>
                <p className="text-slate-600 mt-2">Desenvolvedor Full Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Java", "Next.js", "React.js", "Node.js", "SQL", "NoSQL", "Docker"].map((tech) => (
                    <span key={tech} className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
          </div>
          </div>
        </section>
      </div>
      </motion.div>
    </div>
  );
}
