"use client";

import Navbar from "../../components/Navbar";

export default function Curriculo() {
  return (
    <div className="min-h-screen bg-gray-100 text-black p-8">
      <Navbar />
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center border-b-2 border-gray-300 pb-4">
          Anderson Pereira
        </h1>
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Informações de Contato</h2>
          <p><strong>Localização:</strong> Mesquita, RJ</p>
          <p><strong>Email:</strong> anderjulya580@gmail.com</p>
          <p><strong>Telefone:</strong> (21) 98141-3688</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/anderson-pereira-61375a254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              https://www.linkedin.com/in/anderson-pereira-61375a254/
            </a>
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Objetivo Profissional</h2>
          <p>
            Atuar como desenvolvedor Full-Stack, criando soluções eficientes e
            contribuindo para o crescimento da empresa e a melhoria da experiência do
            usuário.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Resumo</h2>
          <p>
            Atualmente, atuo na Markts, desenvolvendo um aplicativo com tecnologias
            como React Native, Node.js, React, TypeScript e NestJS. Fiz um curso de PHP
            na Coti Informática e um curso de HTML, JavaScript, React Native e
            Desenvolvimento de API com Node.js na Udemy. Estou cursando Análise e
            Desenvolvimento de Sistemas e busco continuamente aprimorar minhas
            habilidades técnicas e contribuir para o sucesso dos projetos em que estou
            envolvido.
          </p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Formação</h2>
          <p>• Analise e Desenvolvimento de Sistemas - UniFAVENI, conclusão em Julho de 2025.</p>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Outros Cursos</h2>
          <ul className="list-disc ml-6">
            <li>PHP - Coti Informática</li>
            <li>HTML, JavaScript, React Native, Desenvolvimento de API com Node.js - Udemy</li>
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Principais Tecnologias</h2>
          <ul className="list-disc ml-6">
            <li>PHP</li>
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>NestJS</li>
            <li>React.js</li>
            <li>TypeScript</li>
            <li>NoSQL</li>
          </ul>
        </section>
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Experiência</h2>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Markts</h3>
            <p><strong>Cargo:</strong> Desenvolvedor Full Stack</p>
            <p><strong>Tecnologias Utilizadas:</strong> React Native, React.js, Node.js, NestJS, Styled-Components, TypeScript.</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Idea Queue</h3>
            <p><strong>Cargo:</strong> Desenvolvedor Full Stack</p>
            <p><strong>Tecnologias Utilizadas:</strong> Java, Next.js, React.js, Node.js, SQL, NoSQL e Docker.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
