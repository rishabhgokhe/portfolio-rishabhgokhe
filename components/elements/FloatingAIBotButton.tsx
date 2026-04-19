"use client";

import { useEffect, useState } from "react";
import AIBotPanel from "@/components/elements/AIBotPanel";

export default function FloatingAIBotButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openAI = () => setIsOpen(true);

    window.addEventListener("rishu-ai:open", openAI);
    return () => window.removeEventListener("rishu-ai:open", openAI);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-[120] sm:bottom-8 sm:right-8">
      <div
        className={`mb-3 w-[min(92vw,360px)] overflow-hidden rounded-xl border border-emerald-500/30 bg-black/90 shadow-[0_0_40px_rgba(16,185,129,0.14)] backdrop-blur-md transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-emerald-500/20 px-3 py-2 font-mono">
          <p className="text-[11px] uppercase tracking-[0.12em] text-emerald-200">
            Personal AI
          </p>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="text-zinc-400 transition hover:text-white"
            aria-label="Close AI popup"
          >
            ✕
          </button>
        </div>

        <AIBotPanel showHeader={false} className="h-[420px] border-0 bg-transparent p-3" />
      </div>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Open personal AI bot"
        className="pointer-events-auto group relative inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/80 px-3 py-2 font-mono text-xs font-semibold tracking-[0.08em] text-emerald-200 backdrop-blur-md transition hover:border-emerald-300/70 hover:text-emerald-100"
      >
        <span className="relative grid h-8 w-8 place-items-center rounded-full border border-emerald-400/35 bg-emerald-500/12 text-emerald-200">
          <span className="absolute inset-0 rounded-full bg-emerald-400/15 blur-sm" />
          <span className="absolute -left-0.5 -top-0.5 h-2 w-2 rounded-full bg-cyan-300/80 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
          <span className="absolute -bottom-0.5 -right-0.5 h-1.5 w-1.5 rounded-full bg-emerald-300/80 shadow-[0_0_10px_rgba(110,231,183,0.9)]" />
          <svg
            viewBox="0 0 24 24"
            className="relative z-10 h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v4m0 10v4M4 12h4m8 0h4M6.9 6.9l2.8 2.8m4.6 4.6 2.8 2.8m0-10.2-2.8 2.8m-4.6 4.6-2.8 2.8"
            />
          </svg>
        </span>
        <span className="whitespace-nowrap">
          <span className="text-emerald-300">$</span> {isOpen ? "Close" : "Ask Rishu"}
        </span>
        <span className="absolute -inset-1 -z-10 rounded-full bg-emerald-400/20 opacity-0 blur-xl transition group-hover:opacity-100" />
      </button>
    </div>
  );
}
