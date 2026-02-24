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
      className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-[500px] w-full border-2 sm:border-4 border-brand-primary shadow-xl text-center"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-brand-primary">
        Joguinho de Adivinhar Número
      </h2>
      <p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
        Tente adivinhar o número secreto entre 1 e 100! Você tem {MAX_ATTEMPTS} tentativas.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between mb-4 sm:mb-6">
        <div className="flex-1 bg-brand-surface border border-brand-primary rounded-lg p-3 min-w-0">
          <p className="text-brand-muted text-xs sm:text-sm">Tentativas</p>
          <p className="text-base sm:text-lg font-bold text-slate-800">{attempts}/{MAX_ATTEMPTS}</p>
        </div>
        <div className="flex-1 bg-brand-surface border border-brand-primary rounded-lg p-3 min-w-0">
          <p className="text-brand-muted text-xs sm:text-sm">Status</p>
          <p className="text-base sm:text-lg font-bold text-slate-800">
            {gameStatus === "playing" ? "Jogando" : gameStatus === "win" ? "Vitória!" : "Derrota!"}
          </p>
        </div>
      </div>
      {gameStatus === "playing" && (
        <div className="mb-4 sm:mb-6">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite seu palpite"
            min={1}
            max={100}
            className="w-full max-w-[200px] mx-auto block px-4 py-3 border-2 border-brand-primary rounded-lg bg-white text-slate-800 text-base sm:text-lg font-bold text-center focus:outline-none focus:ring-2 focus:ring-brand-primary touch-manipulation"
          />
        </div>
      )}
      <div
        className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 ${
          gameStatus === "win" ? "border-green-600 bg-green-50" : gameStatus === "lose" ? "border-red-600 bg-red-50" : "border-brand-primary bg-brand-surface"
        }`}
      >
        <p className="font-semibold text-slate-800 text-sm sm:text-base">{message}</p>
        {gameStatus !== "playing" && (
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            {gameStatus === "win" ? "Você é um verdadeiro programador!" : "Não desista! Programadores aprendem com os erros!"}
          </p>
        )}
      </div>
      {gameStatus !== "playing" && secretNumber !== null && (
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-brand-primary my-3 sm:my-4"
        >
          {secretNumber}
        </motion.div>
      )}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
        {gameStatus === "playing" ? (
          <motion.button
            type="button"
            onClick={handleGuess}
            disabled={!guess.trim()}
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-brand-primary text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-primary-hover transition-colors touch-manipulation min-h-[44px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Adivinhar
          </motion.button>
        ) : (
          <motion.button
            type="button"
            onClick={startNewGame}
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg bg-brand-primary text-white font-semibold hover:bg-brand-primary-hover transition-colors touch-manipulation min-h-[44px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jogar Novamente
          </motion.button>
        )}
        <motion.button
          type="button"
          onClick={onClose}
          className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg border-2 border-brand-primary text-brand-primary font-semibold hover:bg-brand-primary hover:text-white transition-colors touch-manipulation min-h-[44px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Fechar
        </motion.button>
      </div>
    </motion.div>
  );
}
