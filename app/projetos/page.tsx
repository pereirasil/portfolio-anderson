"use client";

import Navbar from "../../components/Navbar";
import { FaVoteYea } from "react-icons/fa";

export default function Projetos() {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-8">Meus Projetos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {Array.from({ length: 8 }).map((_, index) => (
            <a
              key={index}
              href="https://votacaodetarefa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 transition-all flex flex-col items-center text-center"
            >
              <FaVoteYea size={48} className="text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Sistema de Votação de Tarefas</h2>
              <p className="text-gray-400">
                Um sistema simples para votação de tarefas. Clique para acessar!
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
