"use client";

import { FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaJsSquare, FaDatabase, FaPhp, FaVoteYea, FaGithub, FaCalculator, FaTh, FaSortNumericDown, FaProjectDiagram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "@/components/Modal";
import Calculator from "@/components/jogos/Calculator";
import TicTacToe from "@/components/jogos/TicTacToe";
import NumberGuessingGame from "@/components/jogos/NumberGuessingGame";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const [currentGameType, setCurrentGameType] = useState<"calculator" | "tictactoe" | "numberguessing" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const mailtoLink = `mailto:anderson.informata@gmail.com?subject=Contato de ${formData.nome}&body=Nome: ${formData.nome}%0D%0AEmail: ${formData.email}%0D%0AMensagem: ${formData.mensagem}`;
    window.location.href = mailtoLink;
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  const menuItems = [
    { id: "section-0", label: "Início" },
    { id: "section-1", label: "Habilidades" },
    { id: "section-2", label: "Projetos" },
    { id: "section-3", label: "Contato" },
    { id: "curriculo", label: "Currículo", href: "/curriculo" },
  ];

  const habilidades = [
    { nome: "PHP", icone: <FaPhp size={32} className="text-gray-400" />, nivel: "Avançado" },
    { nome: "Node.js", icone: <FaNodeJs size={32} className="text-green-500" />, nivel: "Avançado" },
    { nome: "JavaScript", icone: <FaJsSquare size={32} className="text-yellow-500" />, nivel: "Avançado" },
    { nome: "SQL / NoSQL", icone: <FaDatabase size={32} className="text-gray-400" />, nivel: "Intermediário" },
    { nome: "React.js", icone: <FaReact size={32} className="text-blue-500" />, nivel: "Avançado" },
    { nome: "TypeScript", icone: <FaJsSquare size={32} className="text-blue-500" />, nivel: "Intermediário" },
  ];

  const projetos = [
    {
      titulo: "Calculadora",
      descricao: "Calculadora simples com operações básicas. Clique para jogar!",
      gameType: "calculator" as const,
      icone: <FaCalculator size={48} className="text-blue-400" />,
      tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
      titulo: "Domine a Arte da Conquista",
      descricao: "Landing page do curso/livro. Clique para acessar!",
      link: "https://domine-a-arte-da-conquista.vercel.app/",
      icone: <FaVoteYea size={48} className="text-blue-400" />,
      tecnologias: ["React", "TypeScript", "Node.js"]
    },
    {
      titulo: "Jogo da Velha",
      descricao: "Clássico Jogo da Velha. Clique para jogar!",
      gameType: "tictactoe" as const,
      icone: <FaTh size={48} className="text-blue-400" />,
      tecnologias: ["HTML", "CSS", "JavaScript"]
    },
    {
      titulo: "Adivinhe o Número",
      descricao: "Tente adivinhar o número secreto entre 1 e 100. Clique para jogar!",
      gameType: "numberguessing" as const,
      icone: <FaSortNumericDown size={48} className="text-blue-400" />,
      tecnologias: ["React", "JavaScript"]
    },
    {
      titulo: "Sistema de acompanhante",
      descricao: "Monorepo: frontend React/Vite (TypeScript) e backend Laravel 11 (PHP). API REST, JWT. Clique para acessar!",
      link: "https://acompanhanteshots.com.br/",
      icone: <FaProjectDiagram size={48} className="text-blue-400" />,
      tecnologias: ["React", "TypeScript", "Vite", "Laravel", "PHP"],
      maiorDezoito: true,
    },
  ];

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        setActiveSection(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header com navegação */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center min-w-0">
              <a href="/" className="text-white font-bold text-base sm:text-xl truncate">
                Anderson Pereira
              </a>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href || `#${item.id}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Botão Menu Mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Mobile */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {menuItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href || `#${item.id}`}
                      className="text-gray-300 hover:text-white block px-3 py-3 rounded-md text-base font-medium touch-manipulation"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Conteúdo Principal */}
      <main className="pt-14 sm:pt-16">
        {/* Seção de Boas-vindas */}
        <section id="section-0" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 text-white py-12 sm:py-16 px-4">
          <motion.div
            className="flex flex-col items-center md:flex-row md:items-center md:space-x-8 max-w-6xl mx-auto px-4 sm:px-8 w-full"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
          >
            <img
              src="/certificados/imagem-perfil.png"
              alt="Foto de Anderson Pereira"
              className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover shadow-2xl border-4 border-white"
            />
            </motion.div>
            <div className="text-center md:text-left mt-6 md:mt-0 w-full">
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Anderson Pereira
              </motion.h1>
              <motion.p 
                className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 max-w-2xl mx-auto md:mx-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes.
              </motion.p>
              <motion.div 
                className="flex space-x-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <a
                  href="https://www.linkedin.com/in/anderson-pereira-61375a254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 p-2.5 sm:p-3 rounded-full hover:bg-blue-50 transition-colors touch-manipulation"
                >
                  <FaLinkedin size={22} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://github.com/seu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-800 p-2.5 sm:p-3 rounded-full hover:bg-gray-50 transition-colors touch-manipulation"
                >
                  <FaGithub size={22} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="mailto:anderson.informata@gmail.com"
                  className="bg-white text-blue-600 p-2.5 sm:p-3 rounded-full hover:bg-blue-50 transition-colors touch-manipulation"
                >
                  <FaEnvelope size={24} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Seção de Habilidades */}
        <section id="section-1" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 sm:py-16">
          <motion.div
            className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Habilidades Técnicas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {habilidades.map((habilidade, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className="flex-shrink-0">{habilidade.icone}</span>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold truncate">{habilidade.nome}</h3>
                      <p className="text-gray-500 text-sm sm:text-base">{habilidade.nivel}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Seção de Projetos */}
        <section id="section-2" className="min-h-screen flex flex-col items-center justify-center bg-white py-12 sm:py-16">
          <motion.div
            className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Projetos Recentes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {projetos.map((projeto, index) => {
                const cardContent = (
                  <div className="flex flex-col items-center text-center min-w-0">
                    <span className="flex-shrink-0">{projeto.icone}</span>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-3 sm:mt-4 px-1 break-words">{projeto.titulo}</h3>
                    <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base px-1">{projeto.descricao}</p>
                    <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                      {projeto.tecnologias.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
                const tarjaMaiorDezoito = "maiorDezoito" in projeto && projeto.maiorDezoito ? (
                  <div className="bg-red-600 text-white text-center text-xs sm:text-sm font-semibold py-2 px-2 rounded-t-xl w-[calc(100%+2rem)] sm:w-[calc(100%+2.5rem)] md:w-[calc(100%+3rem)] -ml-4 -mt-4 sm:-ml-5 sm:-mt-5 md:-ml-6 md:-mt-6 mb-3">
                    Acesso permitido para maiores de 18 anos
                  </div>
                ) : null;
                const cardClass = "bg-gray-50 p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 min-h-[140px] touch-manipulation relative overflow-hidden";
                if ("link" in projeto && projeto.link) {
                  return (
                    <motion.a
                      key={index}
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tarjaMaiorDezoito}
                      {cardContent}
                    </motion.a>
                  );
                }
                const gameType = "gameType" in projeto ? projeto.gameType : null;
                return (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => {
                      if (gameType) {
                        setCurrentGameType(gameType);
                        setIsGameModalOpen(true);
                      }
                    }}
                    className={`${cardClass} w-full text-left cursor-pointer border-0`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {cardContent}
                  </motion.button>
                );
              })}
            </div>

          <Modal isOpen={isGameModalOpen} onClose={() => setIsGameModalOpen(false)}>
            {currentGameType === "calculator" && <Calculator onClose={() => setIsGameModalOpen(false)} />}
            {currentGameType === "tictactoe" && <TicTacToe onClose={() => setIsGameModalOpen(false)} />}
            {currentGameType === "numberguessing" && <NumberGuessingGame onClose={() => setIsGameModalOpen(false)} />}
          </Modal>
          </motion.div>
        </section>

        {/* Seção de Contato */}
        <section id="section-3" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 sm:py-16">
          <motion.div
            className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Entre em Contato</h2>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                  required
                rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
              type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
                Enviar Mensagem
            </button>
          </form>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
