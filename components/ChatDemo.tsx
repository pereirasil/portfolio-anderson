"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messagesSeed = [
  { id: 1, sender: "Escola", text: "Bem-vindo ao Sistema de Gestão Escolar!", time: "08:00" },
  { id: 2, sender: "Professor", text: "Olá, acabei de lançar as notas da turma 6A.", time: "08:02" },
  { id: 3, sender: "Aluno", text: "Recebi a notificação, obrigado!", time: "08:03" },
  {
    id: 4,
    sender: "Escola",
    text: "Teste o sistema online:",
    time: "08:05",
    url: "https://escola.simplesmente.app/",
  },
];

export default function ChatDemo() {
  const [messages, setMessages] = useState(messagesSeed);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setTyping(true);
    }, 1200);
    const t2 = setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: Date.now(), sender: "Professor", text: "Lembrete: reunião com pais amanhã às 19h.", time: "08:10" },
      ]);
      setTyping(false);
      if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, 3000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="w-full max-w-2xl bg-white/5 backdrop-blur-md border border-white/8 rounded-2xl overflow-hidden">
      <div className="px-4 py-3 border-b border-white/6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white font-semibold">E</div>
        <div>
          <div className="text-sm font-semibold text-white">Escola Municipal</div>
          <div className="text-xs text-white/70">Atendimento, professor e alunos</div>
        </div>
      </div>
      <div ref={scrollRef} className="h-64 overflow-auto p-4 space-y-3 custom-scroll">
        <AnimatePresence initial={false} mode="popLayout">
          {messages.map((m) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className={`max-w-[80%] ${m.sender === "Aluno" ? "ml-auto bg-gradient-to-br from-slate-700 to-slate-800 text-white" : "bg-white/6 text-white"} p-3 rounded-xl`}
            >
              <div className="text-sm">
                {m.text} {m.url && (
                  <a href={m.url} target="_blank" rel="noreferrer" className="underline text-emerald-300">{m.url}</a>
                )}
              </div>
              <div className="text-xs text-white/60 mt-1 text-right">{m.time} • {m.sender}</div>
            </motion.div>
          ))}
        </AnimatePresence>

        {typing && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/6 flex items-center justify-center text-white/90">P</div>
            <motion.div
              className="typing text-white/80 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.9 }}
            >
              digitando
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
