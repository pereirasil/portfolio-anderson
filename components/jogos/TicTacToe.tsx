"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type TicTacToeProps = {
  onClose: () => void;
};

function calculateWinner(squares: (string | null)[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe({ onClose }: TicTacToeProps) {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "draw">("playing");

  const winner = calculateWinner(board);
  const isDraw = board.every((s) => s !== null) && !winner;

  const handleClick = (index: number) => {
    if (board[index] || gameStatus !== "playing") return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    if (calculateWinner(newBoard)) setGameStatus("won");
    else if (newBoard.every((s) => s !== null)) setGameStatus("draw");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameStatus("playing");
  };

  const statusMessage =
    gameStatus === "won"
      ? `${winner} ganhou!`
      : gameStatus === "draw"
        ? "Empate!"
        : `Vez do jogador: ${isXNext ? "X" : "O"}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      className="bg-white rounded-2xl p-8 max-w-[500px] w-full border-4 border-blue-500 shadow-xl"
    >
      <h2 className="text-center text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Jogo da Velha
      </h2>
      <div className="bg-gray-100 border-2 border-blue-500 rounded-xl p-4 mb-6 text-center">
        <p className="text-lg font-bold text-gray-800">{statusMessage}</p>
        <p className="text-gray-600 text-sm mt-1">
          {gameStatus === "playing" ? `Jogador atual: ${isXNext ? "X" : "O"}` : gameStatus === "won" ? "Parabéns!" : "Jogo empatado!"}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 max-w-[300px] mx-auto mb-8">
        {board.map((value, index) => (
          <motion.button
            key={index}
            type="button"
            onClick={() => handleClick(index)}
            disabled={value !== null || gameStatus !== "playing"}
            className={`aspect-square border-2 border-blue-500 rounded-xl bg-white text-3xl font-bold flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed hover:bg-gray-50 ${value === "X" ? "text-blue-500" : value === "O" ? "text-cyan-500" : "text-gray-400"}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {value}
          </motion.button>
        ))}
      </div>
      <div className="flex gap-4 justify-center flex-wrap">
        <motion.button
          type="button"
          onClick={resetGame}
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Novo Jogo
        </motion.button>
        <motion.button
          type="button"
          onClick={onClose}
          className="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-600 font-bold hover:bg-blue-500 hover:text-white transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Fechar
        </motion.button>
      </div>
    </motion.div>
  );
}
