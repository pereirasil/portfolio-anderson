"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import { FaVoteYea } from "react-icons/fa";
import { useState } from "react";

export default function Projetos() {
  const projetos = [
    {
      titulo: "Sistema de Votação de Tarefas",
      descricao: "Um sistema simples para votação de tarefas. Clique para acessar!",
      link: "https://timeboard.site/",
      icone: <FaVoteYea size={48} className="text-brand-primary mb-4" />,
    },
    {
      titulo: "Projeto Exemplo 2",
      descricao: "Descrição do projeto exemplo 2.",
      link: "https://timeboard.site/",
      icone: <FaVoteYea size={48} className="text-brand-primary mb-4" />,
    },
    {
      titulo: "Projeto Exemplo 3",
      descricao: "Descrição do projeto exemplo 3.",
      link: "https://timeboard.site/",
      icone: <FaVoteYea size={48} className="text-brand-primary mb-4" />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projetos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projetos.length) % projetos.length);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Seção de Projetos */}
        <section className="snap-start h-screen flex flex-col items-center justify-center bg-brand-dark">
          <h1 className="text-4xl font-bold mb-8">Meus Projetos</h1>
          <div className="relative w-full max-w-4xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-brand-dark-surface p-6 rounded-lg shadow-lg flex flex-col items-center text-center border border-brand-dark-border"
            >
              {projetos[currentIndex].icone}
              <h2 className="text-2xl font-bold mb-2">{projetos[currentIndex].titulo}</h2>
              <p className="text-slate-400">{projetos[currentIndex].descricao}</p>
              <a
                href={projetos[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-slate-300 hover:text-white transition-colors"
              >
                Acessar Projeto
              </a>
            </motion.div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-brand-dark-surface p-2 rounded-full hover:bg-brand-dark-border border border-brand-dark-border"
            >
              {"<"}
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-brand-dark-surface p-2 rounded-full hover:bg-brand-dark-border border border-brand-dark-border"
            >
              {">"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
