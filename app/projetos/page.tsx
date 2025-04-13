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
      link: "https://votacaodetarefa.vercel.app/",
      icone: <FaVoteYea size={48} className="text-blue-400 mb-4" />,
    },
    {
      titulo: "Projeto Exemplo 2",
      descricao: "Descrição do projeto exemplo 2.",
      link: "https://exemplo2.com",
      icone: <FaVoteYea size={48} className="text-blue-400 mb-4" />,
    },
    {
      titulo: "Projeto Exemplo 3",
      descricao: "Descrição do projeto exemplo 3.",
      link: "https://exemplo3.com",
      icone: <FaVoteYea size={48} className="text-blue-400 mb-4" />,
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
    <div className="min-h-screen bg-gray-800 text-white">
      <Navbar />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Seção de Projetos */}
        <section className="snap-start h-screen flex flex-col items-center justify-center bg-gray-800">
          <h1 className="text-4xl font-bold mb-8">Meus Projetos</h1>
          <div className="relative w-full max-w-4xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {projetos[currentIndex].icone}
              <h2 className="text-2xl font-bold mb-2">{projetos[currentIndex].titulo}</h2>
              <p className="text-gray-400">{projetos[currentIndex].descricao}</p>
              <a
                href={projetos[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-400 hover:underline"
              >
                Acessar Projeto
              </a>
            </motion.div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              {"<"}
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              {">"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
