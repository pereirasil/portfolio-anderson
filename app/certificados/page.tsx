"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Certificados() {
  const [showFrente, setShowFrente] = useState<number | null>(null);
  const [showVerso, setShowVerso] = useState<number | null>(null);

  const certificadosMilitarismo = [
    { frente: "/certificados/certificado1-frente.png", verso: "/certificados/certificado1-verso.png" },
    { frente: "/certificados/certificado2-frente.png", verso: "/certificados/certificado2-verso.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Navbar />
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        {/* Seção de Certificados */}
        <section className="snap-start h-screen flex flex-col items-center justify-center bg-gray-800">
          <h1 className="text-4xl font-bold text-center mb-8">Certificados</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {certificadosMilitarismo.map((certificado, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Certificado {index + 1}</h2>
                <button
                  onClick={() => setShowFrente(showFrente === index ? null : index)}
                  className="text-blue-400 hover:underline"
                >
                  {showFrente === index ? "Ocultar Frente" : "Exibir Frente"}
                </button>
                {showFrente === index && (
                  <img
                    src={certificado.frente}
                    alt={`Certificado ${index + 1} Frente`}
                    className="w-full rounded-lg mt-4"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
