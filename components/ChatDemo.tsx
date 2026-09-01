"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const messagesSeed = [
  { id: 1, sender: "Escola", text: "Bom dia! A agenda da turma 6A foi atualizada.", time: "08:00" },
  { id: 2, sender: "Professor", text: "Acabei de lançar as notas de matemática.", time: "08:02" },
  { id: 3, sender: "Aluno", text: "Recebi a notificação aqui no portal.", time: "08:03" },
  { id: 4, sender: "Escola", text: "O boleto de setembro já está disponível para consulta.", time: "08:04" },
  { id: 5, sender: "Responsável", text: "Consigo baixar o comprovante pelo sistema?", time: "08:05" },
  { id: 6, sender: "Escola", text: "Sim, fica em Financeiro > Pagamentos.", time: "08:06" },
  {
    id: 7,
    sender: "Escola",
    text: "Teste o sistema online:",
    time: "08:07",
    url: "https://escola.simplesmente.app/",
  },
];

export default function ChatDemo() {
  const [messages, setMessages] = useState(messagesSeed);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setTyping(true);
    }, 1200);

    const messageTimer = setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: Date.now(), sender: "Professor", text: "Lembrete: reunião com responsáveis amanhã às 19h.", time: "08:10" },
      ]);
      setTyping(false);
      if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, 3000);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(messageTimer);
    };
  }, []);

  return (
    <div className="mx-auto flex h-[430px] w-full max-w-[320px] flex-col rounded-[1.75rem] border border-white/[0.12] bg-black p-1.5 shadow-2xl shadow-black/50 sm:h-[460px]">
      <div className="flex flex-1 flex-col overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#07140f]">
        <div className="flex items-center justify-center bg-black px-4 py-2">
          <div className="h-1.5 w-16 rounded-full bg-white/20" />
        </div>

        <div className="flex items-center gap-3 border-b border-white/10 bg-[#111b21] px-3 py-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#22C55E] text-sm font-bold text-white">
            E
          </div>
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold text-white">Escola Municipal</div>
            <div className="text-xs text-[#86efac]">online</div>
          </div>
          <div className="flex gap-1">
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span className="h-1 w-1 rounded-full bg-white/50" />
            <span className="h-1 w-1 rounded-full bg-white/50" />
          </div>
        </div>

        <div
          ref={scrollRef}
          className="min-h-0 flex-1 space-y-2.5 overflow-auto p-3 custom-scroll"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18px 18px, rgba(255,255,255,0.035) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {messages.map((message) => {
              const isUser = message.sender === "Aluno" || message.sender === "Responsável";

              return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.35 }}
                  className={`max-w-[86%] rounded-2xl px-3 py-2 shadow-sm ${
                    isUser
                      ? "ml-auto rounded-tr-sm bg-[#005c4b] text-white"
                      : "rounded-tl-sm bg-[#202c33] text-white"
                  }`}
                >
                  <div className="mb-1 text-[11px] font-semibold text-white/55">{message.sender}</div>
                  <div className="text-[13px] leading-5">
                    {message.text}{" "}
                    {message.url && (
                      <a href={message.url} target="_blank" rel="noreferrer" className="break-all text-[#86efac] underline">
                        {message.url}
                      </a>
                    )}
                  </div>
                  <div className="mt-1 text-right text-[10px] text-white/50">{message.time}</div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {typing && (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#202c33] text-xs text-white/90">
                P
              </div>
              <motion.div
                className="typing rounded-2xl rounded-tl-sm bg-[#202c33] px-3 py-2 text-sm text-white/75"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.9 }}
              >
                digitando
              </motion.div>
            </div>
          )}
        </div>

        <div className="border-t border-white/10 bg-[#111b21] p-2.5">
          <div className="flex items-center gap-2 rounded-full bg-[#202c33] px-3 py-2.5 text-[11px] text-white/45">
            Mensagem automatizada do sistema
            <span className="ml-auto text-[#22C55E]">●</span>
          </div>
        </div>
      </div>
    </div>
  );
}
