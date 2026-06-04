"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  icon?: React.ReactNode;
}

export default function ProjectCard({ title, desc, icon }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-2xl overflow-hidden"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center text-white text-xl shadow-md">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-lg text-white mb-1">{title}</h4>
          <p className="text-sm text-white/80">{desc}</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-px rounded-2xl blur-xl bg-gradient-to-r from-emerald-400/30 to-blue-500/30" />
      </div>
    </motion.div>
  );
}
