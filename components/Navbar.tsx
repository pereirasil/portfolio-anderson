"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-white">Anderson Pereira</h1>
      <div className="flex space-x-4">
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
