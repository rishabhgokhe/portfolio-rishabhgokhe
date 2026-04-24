"use client";

import type { MouseEvent } from "react";
import { Playfair_Display } from "next/font/google";
import SectionTag from "@/components/elements/SectionTag";
import { articlesData } from "@/lib/Data";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Articles() {
  const openRishuAI = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    window.dispatchEvent(new CustomEvent("rishu-ai:open"));
  };

  return (
    <div className="services-right-column order-2 p-4 sm:p-6 md:order-2">
      <SectionTag
        label="Writing"
        containerClassName="mb-5"
        badgeClassName="border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
      />

      <h2
        className={`${playfairDisplay.className} mb-3 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl`}
      >
        Articles
      </h2>
      <p className="mb-6 font-mono text-[12px] leading-relaxed text-zinc-400 sm:text-sm">
        Crazzzy things are happening around and we have to get our hands on it..
      </p>

      <div className="relative max-h-[420px] overflow-y-auto border border-cyan-500/20 bg-zinc-950/65 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent" />
        <div className="w-full">
          {articlesData.map((article, index) => (
            <a
              key={article.slug}
              href={article.link}
              className={`block w-full ${article.link == "#" ? "cursor-not-allowed" : "cursor-pointer"} border-b border-cyan-500/20 p-4 transition hover:bg-cyan-400/10`}
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-300/80">
                  {article.meta}
                </span>
                <span className="font-mono text-[10px] text-zinc-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.08em] text-zinc-100">
                  {article.title}
                </h3>
                <button
                  type="button"
                  onClick={openRishuAI}
                  className="shrink-0 border border-cyan-400/35 bg-cyan-400/10 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-400/15 hover:text-white"
                >
                  Ask AI
                </button>
              </div>
              <p className="mt-2 font-mono text-[11px] leading-relaxed text-zinc-400">
                {article.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
