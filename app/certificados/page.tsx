"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Certificados() {
  const [showFrente, setShowFrente] = useState<number | null>(null);
  const [showVerso, setShowVerso] = useState<number | null>(null);

  const certificadosMilitarismo = [
    { frente: "/certificados/certificado1-frente.png", verso: "/certificados/certificado1-verso.png" },
    { frente: "/certificados/certificado2-frente.png", verso: "/certificados/certificado2-verso.png" },
    { frente: "/certificados/certificado3-frente.png", verso: "/certificados/certificado3-verso.png" },
    { frente: "/certificados/certificado4-frente.png", verso: "/certificados/certificado4-verso.png" },
  ];

  const certificadosTecnologia = [
    { frente: "/certificados/tecnologia1-frente.png", verso: "/certificados/tecnologia1-verso.png" },
    { frente: "/certificados/tecnologia2-frente.png", verso: "/certificados/tecnologia2-verso.png" },
  ];

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <Navbar />
      <div className="max-w-5xl mx-auto bg-gray-900 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center border-b-2 border-gray-600 pb-4">
          Certificados
        </h1>

        {/* Certificados do Militarismo */}
        <h2 className="text-3xl font-bold mt-8 border-b-2 border-gray-600 pb-2">
          Certificados do Militarismo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {certificadosMilitarismo.map((certificado, index) => (
            <div key={index} className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold">
                  {index === 0
                    ? "Estágio Distúrbio Civil"
                    : index === 1
                    ? "Estágio de Patrulhamento Motorizado"
                    : index === 2
                    ? "Instrução de Nivelamento"
                    : index === 3
                    ? "Estágio de Fronteira"
                    : "Frente"}
                </h2>
                <button
                  onClick={() =>
                    setShowFrente(showFrente === index ? null : index)
                  }
                  className="text-blue-400 hover:underline"
                >
                  {showFrente === index ? "Ocultar Frente" : "Exibir Frente"}
                </button>
                {showFrente === index && (
                  <img
                    src={certificado.frente}
                    alt={`Certificado Militarismo ${index + 1} Frente`}
                    className="w-full rounded-lg shadow-md mt-4"
                  />
                )}
              </div>
              <div>
                <h2 className="text-lg font-semibold">
                  {index === 0
                    ? "Estágio Distúrbio Civil"
                    : index === 1
                    ? "Estágio de Patrulhamento Motorizado"
                    : index === 2
                    ? "Instrução de Nivelamento"
                    : index === 3
                    ? "Estágio de Fronteira"
                    : "Verso"}
                </h2>
                <button
                  onClick={() =>
                    setShowVerso(showVerso === index ? null : index)
                  }
                  className="text-blue-400 hover:underline"
                >
                  {showVerso === index ? "Ocultar Verso" : "Exibir Verso"}
                </button>
                {showVerso === index && (
                  <img
                    src={certificado.verso}
                    alt={`Certificado Militarismo ${index + 1} Verso`}
                    className="w-full rounded-lg shadow-md mt-4"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certificados de Tecnologia */}
        <h2 className="text-3xl font-bold mt-12 border-b-2 border-gray-600 pb-2">
          Certificados de Tecnologia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {certificadosTecnologia.map((certificado, index) => (
            <div key={index} className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold">
                  {index === 0 ? "Curso de PHP, JavaScript e MySQL" : "Frente"}
                </h2>
                <button
                  onClick={() =>
                    setShowFrente(showFrente === index + certificadosMilitarismo.length ? null : index + certificadosMilitarismo.length)
                  }
                  className="text-blue-400 hover:underline"
                >
                  {showFrente === index + certificadosMilitarismo.length ? "Ocultar Frente" : "Exibir Frente"}
                </button>
                {showFrente === index + certificadosMilitarismo.length && (
                  <img
                    src={certificado.frente}
                    alt={`Certificado Tecnologia ${index + 1} Frente`}
                    className="w-full rounded-lg shadow-md mt-4"
                  />
                )}
              </div>
              <div>
                <h2 className="text-lg font-semibold">Verso</h2>
                <button
                  onClick={() =>
                    setShowVerso(showVerso === index + certificadosMilitarismo.length ? null : index + certificadosMilitarismo.length)
                  }
                  className="text-blue-400 hover:underline"
                >
                  {showVerso === index + certificadosMilitarismo.length ? "Ocultar Verso" : "Exibir Verso"}
                </button>
                {showVerso === index + certificadosMilitarismo.length && (
                  <img
                    src={certificado.verso}
                    alt={`Certificado Tecnologia ${index + 1} Verso`}
                    className="w-full rounded-lg shadow-md mt-4"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
