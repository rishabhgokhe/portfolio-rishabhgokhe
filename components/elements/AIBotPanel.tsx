"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useAIBot } from "@/components/elements/AIBotContext";
import { Playfair_Display } from "next/font/google";


const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});


export default function AIBotPanel({
  className,
  showHeader = true,
}: {
  className?: string;
  showHeader?: boolean;
}) {
  const { messages, loading, error, mode, sendMessage, setMode, clearChat } =
    useAIBot();
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, loading]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    await sendMessage(text, mode);
  }

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-2xl border border-emerald-500/15 bg-gradient-to-b from-black/80 via-black/60 to-black/40 p-5 shadow-[0_0_40px_rgba(16,185,129,0.08)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_55%)]" />
      {showHeader ? (
        <div className="relative mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-emerald-500/15 pb-3">
          <div>
            <p
              className={`${playfairDisplay.className} text-lg tracking-[0.06em] text-emerald-100`}
            >
              Talk to Rishu
            </p>
            <div className="mt-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300/60">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              Available
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-emerald-300/80">
            <button
              type="button"
              onClick={() => setMode("bro")}
              className={cn(
                "rounded-full border px-2.5 py-1 transition",
                mode === "bro"
                  ? "border-emerald-400/60 bg-emerald-500/20 text-emerald-100 shadow-[0_0_10px_rgba(16,185,129,0.25)]"
                  : "border-emerald-500/15 text-emerald-300/70 hover:text-emerald-100",
              )}
            >
              Bro
            </button>
            <button
              type="button"
              onClick={() => setMode("hr")}
              className={cn(
                "rounded-full border px-2.5 py-1 transition",
                mode === "hr"
                  ? "border-emerald-400/60 bg-emerald-500/20 text-emerald-100 shadow-[0_0_10px_rgba(16,185,129,0.25)]"
                  : "border-emerald-500/15 text-emerald-300/70 hover:text-emerald-100",
              )}
            >
              HR
            </button>
            <button
              type="button"
              onClick={() => setMode("tech")}
              className={cn(
                "rounded-full border px-2.5 py-1 transition",
                mode === "tech"
                  ? "border-emerald-400/60 bg-emerald-500/20 text-emerald-100 shadow-[0_0_10px_rgba(16,185,129,0.25)]"
                  : "border-emerald-500/15 text-emerald-300/70 hover:text-emerald-100",
              )}
            >
              Tech
            </button>
          </div>
        </div>
      ) : null}

      <div
        ref={listRef}
        className={cn(
          "relative flex-1 space-y-3 overflow-auto pr-2 font-mono text-xs text-zinc-200 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          showHeader ? "" : "pt-1",
        )}
      >
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={cn(
              "max-w-[85%] rounded-2xl border px-3 py-2.5 leading-relaxed",
              message.role === "user"
                ? "ml-auto border-emerald-400/30 bg-emerald-500/15 text-emerald-100 shadow-[0_0_16px_rgba(16,185,129,0.18)]"
                : "border-zinc-700/60 bg-zinc-900/70 text-zinc-200",
            )}
          >
            {message.content}
          </div>
        ))}
        {loading ? (
          <div className="max-w-[85%] rounded-2xl border border-zinc-700/60 bg-zinc-900/70 px-3 py-2.5 text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300/80" />
              Typing…
            </span>
          </div>
        ) : null}
      </div>

      <div className="relative mt-4 pt-3">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-[0.18em] text-emerald-300/60">
          <button
            type="button"
            onClick={clearChat}
            className="rounded-full border border-emerald-500/15 px-2.5 py-1 transition hover:text-emerald-100"
          >
            Clear
          </button>
          <span className="text-emerald-300/60">Mode: {mode}</span>
        </div>
        <div className="flex items-center gap-2 rounded-2xl border border-zinc-700/70 bg-zinc-900/70 px-3 py-2">
          <span className="text-[11px] text-emerald-300/70">$</span>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ask anything..."
            className="w-full bg-transparent font-mono text-xs text-zinc-100 outline-none placeholder:text-zinc-500"
            aria-label="Ask the AI"
          />
          <button
            type="button"
            onClick={handleSend}
            className="rounded-full border border-emerald-500/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-emerald-200/90 transition hover:border-emerald-300/60 hover:text-emerald-100"
          >
            Send
          </button>
        </div>
        {error ? (
          <p className="mt-2 text-[11px] text-rose-300">{error}</p>
        ) : null}
      </div>
    </div>
  );
}
