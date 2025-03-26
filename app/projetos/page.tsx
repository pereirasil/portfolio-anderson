"use client";

import Navbar from "../../components/Navbar";

export default function Projetos() {
  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center leading-relaxed mb-8">
          Tela de projetos está em manutenção, <br /> mas em breve vai estar disponível.
        </h1>
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">Confira meu projetinho:</h2>
          <a
            href="https://votacaodetarefa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Sistema de Votação de Tarefas
          </a>
        </div>
      </div>
    </div>
  );
}
