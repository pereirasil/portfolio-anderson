"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type CalculatorProps = {
  onClose: () => void;
};

export default function Calculator({ onClose }: CalculatorProps) {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: number) => {
    if (waitingForOperand) {
      setDisplay(String(num));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(num) : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const calculate = (a: number, b: number, op: string) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "×":
        return a * b;
      case "÷":
        return a / b;
      default:
        return b;
    }
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);
    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }
    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const equals = () => {
    const inputValue = parseFloat(display);
    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const btn = "p-4 border-2 border-blue-500 rounded-xl font-bold text-lg transition-all hover:-translate-y-0.5 active:translate-y-0";
  const btnNum = `${btn} bg-white text-gray-800`;
  const btnOp = `${btn} bg-gradient-to-br from-cyan-400 to-blue-500 text-white`;
  const btnEq = `${btn} bg-gradient-to-br from-blue-500 to-blue-600 text-white`;
  const btnClear = `${btn} bg-amber-400 text-gray-900`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      className="bg-white rounded-2xl p-8 max-w-[400px] w-full border-4 border-blue-500 shadow-xl"
    >
      <h2 className="text-center text-2xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Calculadora
      </h2>
      <div className="bg-gray-100 border-2 border-blue-500 rounded-xl p-4 mb-6 min-h-[60px] flex items-center justify-end">
        <span className="text-2xl font-bold text-gray-800 break-all">{display}</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <motion.button type="button" className={btnClear} onClick={clear} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          C
        </motion.button>
        <motion.button type="button" className={btnOp} onClick={() => performOperation("÷")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          ÷
        </motion.button>
        <motion.button type="button" className={btnOp} onClick={() => performOperation("×")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          ×
        </motion.button>
        <motion.button type="button" className={btnNum} onClick={() => inputNumber(7)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          7
        </motion.button>
        <motion.button type="button" className={btnNum} onClick={() => inputNumber(8)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          8
        </motion.button>
        <motion.button type="button" className={btnNum} onClick={() => inputNumber(9)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          9
        </motion.button>
        <motion.button type="button" className={btnOp} onClick={() => performOperation("-")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          -
        </motion.button>
        <motion.button type="button" className={btnNum} onClick={() => inputNumber(4)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          4
        </motion.button>
        <motion.button type="button" className={btnNum} onClick={() => inputNumber(5)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          5
        </motion.button>
        <motion.button type="button" className={btnNum} onClick={() => inputNumber(6)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          6
        </motion.button>
        <motion.button type="button" className={btnOp} onClick={() => performOperation("+")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          +
        </motion.button>
        <motion.button type="button" className={btnNum} onClick={() => inputNumber(1)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          1
        </motion.button>
        <motion.button type="button" className={btnNum} onClick={() => inputNumber(2)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          2
        </motion.button>
        <motion.button type="button" className={btnNum} onClick={() => inputNumber(3)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          3
        </motion.button>
        <motion.button type="button" className={`${btnEq} row-span-2`} onClick={equals} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          =
        </motion.button>
        <motion.button type="button" className={`${btnNum} col-span-2`} onClick={() => inputNumber(0)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          0
        </motion.button>
        <motion.button type="button" className={btnNum} onClick={inputDecimal} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          .
        </motion.button>
      </div>
      <div className="flex justify-center mt-6">
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
