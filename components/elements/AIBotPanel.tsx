"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function AIBotPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-emerald-500/20 bg-black/45 p-5",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between border-b border-emerald-500/20 pb-3 font-mono">
        <p className="text-[11px] uppercase tracking-[0.12em] text-emerald-200">
          Personal AI (Demo)
        </p>
        <span className="text-[10px] uppercase tracking-[0.14em] text-emerald-300/80">
          Ask Rishu
        </span>
      </div>

      <div className="space-y-3 font-mono text-xs">
        <div className="max-w-[85%] rounded-md border border-zinc-700/70 bg-zinc-900/80 px-2.5 py-2 text-zinc-200">
          Hi Rishabh, I can help with portfolio reviews, resumes, and DSA prep.
        </div>
        <div className="ml-auto max-w-[85%] rounded-md border border-emerald-500/35 bg-emerald-500/10 px-2.5 py-2 text-emerald-100">
          Show me best projects to highlight for recruiters.
        </div>
        <div className="max-w-[85%] rounded-md border border-zinc-700/70 bg-zinc-900/80 px-2.5 py-2 text-zinc-200">
          Demo mode: add backend later to connect real AI responses.
        </div>
      </div>

      <div className="mt-4 border-t border-emerald-500/20 pt-3">
        <div className="flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900/80 px-2 py-1.5">
          <span className="text-[11px] text-zinc-500">$</span>
          <input
            value="Ask anything... (demo)"
            readOnly
            className="w-full bg-transparent font-mono text-xs text-zinc-500 outline-none"
            aria-label="Demo AI input"
          />
          <span className="text-[11px] text-emerald-300/80">SEND</span>
        </div>
      </div>
    </div>
  );
}
