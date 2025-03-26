"use client";

import { FaLinkedin, FaEnvelope, FaReact, FaNodeJs, FaJsSquare, FaDatabase, FaPhp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xzzegnzy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Mensagem enviada com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      alert("Erro ao enviar a mensagem. Verifique sua conexão e tente novamente.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto p-4">
        <section className="mt-8 text-center">
          <motion.h1
            className="text-4xl font-bold text-blue-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Seja Bem-vindo ao Meu Portfólio!
          </motion.h1>
          <p className="mt-4 text-lg text-gray-300">
            Aqui você encontrará informações sobre minha experiência, habilidades e projetos. Fique à vontade para explorar!
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-bold border-b-2 border-blue-500 inline-block">
            Objetivo Profissional
          </h2>
          <p className="mt-4 text-lg">
            Atuar como desenvolvedor Full-Stack, criando soluções eficientes e
            contribuindo para o crescimento da empresa e a melhoria da experiência do
            usuário. Atualmente, atuo na Markts, desenvolvendo um aplicativo com
            tecnologias como React Native, Node.js, React, TypeScript e NestJS.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-bold border-b-2 border-blue-500 inline-block">
            Experiência Profissional
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Markts</h3>
              <p className="text-sm italic">Desenvolvedor Full Stack</p>
              <p>Tecnologias: React Native, React.js, Node.js, NestJS, TypeScript.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Idea Queue</h3>
              <p className="text-sm italic">Desenvolvedor Full Stack</p>
              <p>Tecnologias: Java, Next.js, React.js, Node.js, SQL, NoSQL e Docker.</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-bold border-b-2 border-blue-500 inline-block">
            Formação Acadêmica
          </h2>
          <p className="mt-4">
            <strong>Analise e Desenvolvimento de Sistemas</strong> - UniFAVENI,
            conclusão em Julho de 2025.
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-bold border-b-2 border-blue-500 inline-block my-[10px]">
            Habilidades Técnicas
          </h2>

          <Swiper spaceBetween={20} slidesPerView={2} breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}>
            <SwiperSlide>
              <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg shadow-lg">
                <FaPhp size={24} className="text-gray-400" />
                <span>PHP</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg shadow-lg">
                <FaNodeJs size={24} className="text-green-500" />
                <span>Node.js</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg shadow-lg">
                <FaJsSquare size={24} className="text-yellow-500" />
                <span>JavaScript</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg shadow-lg">
                <FaDatabase size={24} className="text-gray-400" />
                <span>SQL / NoSQL</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg shadow-lg">
                <FaReact size={24} className="text-blue-500" />
                <span>React.js</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg shadow-lg">
                <FaNodeJs size={24} className="text-green-500" />
                <span>NestJS</span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg shadow-lg">
                <FaJsSquare size={24} className="text-blue-500" />
                <span>TypeScript</span>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-bold border-b-2 border-blue-500 inline-block">
            Redes Sociais
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/anderson-pereira-61375a254/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700"
            >
              <FaLinkedin size={24} className="text-blue-500" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:anderson.informata@gmail.com"
              className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700"
            >
              <FaEnvelope size={24} className="text-red-500" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/pereirasil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700"
            >
              <FaReact size={24} className="text-white" />
              <span>GitHub</span>
            </a>
            {/* Adicione mais redes sociais aqui, se necessário */}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-bold border-b-2 border-blue-500 inline-block">
            Contato
          </h2>
          <p className="mt-4 text-lg">
            <strong>Localização:</strong> Mesquita, RJ
          </p>
          <p className="mt-2 text-lg">
            <strong>Email:</strong> <a href="mailto:anderjulya580@gmail.com" className="text-blue-500">anderjulya580@gmail.com</a>
          </p>
          <p className="mt-2 text-lg">
            <strong>Telefone:</strong> (21) 98141-3688
          </p>
          <p className="mt-2 text-lg">
            <strong>GitHub:</strong> <a href="https://github.com/pereirasil" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-300">https://github.com/pereirasil</a>
          </p>
        </section>

        <section className="mt-8">
          <h2 className="text-3xl font-bold border-b-2 border-blue-500 inline-block">
            Contribuições no GitHub
          </h2>
          <div className="mt-4 flex justify-center">
            <img
              src="https://ghchart.rshah.org/pereirasil"
              alt="Gráfico de contribuições do GitHub"
              className="w-full max-w-2xl rounded-lg shadow-lg"
            />
          </div>
        </section>

        <motion.section
          className="mt-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold border-b-2 border-blue-500 inline-block">
            Enviar Mensagem
          </h2>
          {successMessage && (
            <div className="mt-4 p-4 bg-green-500 text-white rounded-md">
              {successMessage}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="mt-4 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-lg">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg">Mensagem</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 mt-2 bg-gray-800 text-white border border-gray-700 rounded-md"
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full py-2 mt-4 rounded-md ${
                isSubmitting ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-400"
              } text-white`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </motion.section>

         <footer className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>© {new Date().getFullYear()} Anderson Pereira. Todos os direitos reservados.</p>
        </footer>
        
      </main>
    </div>
  );
}
