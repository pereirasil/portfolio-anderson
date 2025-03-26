"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        <img
          src="/certificados/imagem-perfil.png"
          alt="Foto de Anderson Pereira"
          className="w-[5rem] h-[5rem] rounded-full object-cover"
        />
        <h1 className="text-lg font-bold text-white">Anderson Pereira</h1>
      </div>
      <div className="flex space-x-6">
        <Link href="/" className="text-white hover:text-blue-300">
          Início
        </Link>
        <Link href="/projetos" className="text-white hover:text-blue-300">
          Projetos
        </Link>
        <Link href="/curriculo" className="text-white hover:text-blue-300">
          Currículo
        </Link>
        <Link href="/certificados" className="text-white hover:text-blue-300">
          Certificados
        </Link>
      </div>
    </nav>
  );
}
