"use client";

export default function BackgroundAnimated() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-[#071021] via-[#0b1f2f] to-[#052033] opacity-80" />
      <div className="absolute left-0 top-1/4 w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-emerald-400/10 to-blue-500/6 filter blur-3xl transform -translate-x-1/3 animate-blob" />
      <div className="absolute right-0 bottom-0 w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-purple-500/6 to-pink-500/8 filter blur-2xl animate-blob animation-delay-2000" />
    </div>
  );
}
