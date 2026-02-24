"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type NumberGuessingGameProps = {
  onClose: () => void;
};

const MAX_ATTEMPTS = 7;

export default function NumberGuessingGame({ onClose }: NumberGuessingGameProps) {
  const [secretNumber, setSecretNumber] = useState<number | null>(null);
  const [guess, setGuess] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [gameStatus, setGameStatus] = useState<"playing" | "win" | "lose">("playing");
  const [message, setMessage] = useState("");

  const startNewGame = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setAttempts(0);
    setGameStatus("playing");
    setMessage("Adivinhe um número entre 1 e 100!");
  };

  useEffect(() => {
    startNewGame();
  }, []);

  const handleGuess = () => {
    const guessNumber = parseInt(guess, 10);
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
      setMessage("Por favor, digite um número válido entre 1 e 100!");
      return;
    }
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    if (guessNumber === secretNumber) {
      setGameStatus("win");
      setMessage(`Parabéns! Você acertou em ${newAttempts} tentativa${newAttempts > 1 ? "s" : ""}!`);
    } else if (newAttempts >= MAX_ATTEMPTS) {
      setGameStatus("lose");
      setMessage(`Game Over! O número era ${secretNumber}. Tente novamente!`);
    } else {
      const hint = guessNumber > (secretNumber ?? 0) ? "menor" : "maior";
      setMessage(`Errou! O número é ${hint} que ${guessNumber}. Tentativa ${newAttempts}/${MAX_ATTEMPTS}`);
    }
    setGuess("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && gameStatus === "playing") handleGuess();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      className="bg-white rounded-2xl p-8 max-w-[500px] w-full border-4 border-blue-500 shadow-xl text-center"
    >
      <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Joguinho de Adivinhar Número
      </h2>
      <p className="text-gray-600 mb-6">
        Tente adivinhar o número secreto entre 1 e 100! Você tem {MAX_ATTEMPTS} tentativas.
      </p>
      <div className="flex gap-4 justify-between mb-6">
        <div className="flex-1 bg-gray-100 border border-blue-500 rounded-lg p-3">
          <p className="text-gray-500 text-sm">Tentativas</p>
          <p className="text-lg font-bold text-gray-800">{attempts}/{MAX_ATTEMPTS}</p>
        </div>
        <div className="flex-1 bg-gray-100 border border-blue-500 rounded-lg p-3">
          <p className="text-gray-500 text-sm">Status</p>
          <p className="text-lg font-bold text-gray-800">
            {gameStatus === "playing" ? "Jogando" : gameStatus === "win" ? "Vitória!" : "Derrota!"}
          </p>
        </div>
      </div>
      {gameStatus === "playing" && (
        <div className="mb-6">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite seu palpite"
            min={1}
            max={100}
            className="w-full max-w-[200px] mx-auto block px-4 py-3 border-2 border-blue-500 rounded-lg bg-white text-gray-800 text-lg font-bold text-center focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
      )}
      <div
        className={`mb-6 p-4 rounded-xl border-2 ${
          gameStatus === "win" ? "border-green-500 bg-green-50" : gameStatus === "lose" ? "border-red-500 bg-red-50" : "border-blue-500 bg-gray-50"
        }`}
      >
        <p className="font-semibold text-gray-800">{message}</p>
        {gameStatus !== "playing" && (
          <p className="text-sm text-gray-600 mt-2">
            {gameStatus === "win" ? "Você é um verdadeiro programador!" : "Não desista! Programadores aprendem com os erros!"}
          </p>
        )}
      </div>
      {gameStatus !== "playing" && secretNumber !== null && (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold text-blue-500 my-4"
        >
          {secretNumber}
        </motion.div>
      )}
      <div className="flex gap-4 justify-center flex-wrap">
        {gameStatus === "playing" ? (
          <motion.button
            type="button"
            onClick={handleGuess}
            disabled={!guess.trim()}
            className="px-8 py-3 rounded-lg bg-blue-500 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Adivinhar
          </motion.button>
        ) : (
          <motion.button
            type="button"
            onClick={startNewGame}
            className="px-8 py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jogar Novamente
          </motion.button>
        )}
        <motion.button
          type="button"
          onClick={onClose}
          className="px-8 py-3 rounded-lg border-2 border-blue-500 text-blue-600 font-semibold hover:bg-blue-500 hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Fechar
        </motion.button>
      </div>
    </motion.div>
  );
}
