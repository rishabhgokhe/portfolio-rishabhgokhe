"use client";
import React from "react";
import Image from "next/image";

import { Playfair_Display } from "next/font/google";
import { HyperText } from "@/components/ui/hyper-text";
import { GridBackground } from "@/components/ui/grid-background";
import { TechStackSkillGroups } from "@/lib/Data";


const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function TechStack() {
  const toneClasses: Record<string, string> = {
    emerald:
      "border-emerald-500/30 bg-emerald-500/[0.07] text-emerald-300 shadow-[0_0_24px_rgba(16,185,129,0.12)]",
    sky: "border-sky-500/30 bg-sky-500/[0.07] text-sky-300 shadow-[0_0_24px_rgba(14,165,233,0.12)]",
    cyan: "border-cyan-500/30 bg-cyan-500/[0.07] text-cyan-300 shadow-[0_0_24px_rgba(6,182,212,0.12)]",
    violet:
      "border-violet-500/30 bg-violet-500/[0.07] text-violet-300 shadow-[0_0_24px_rgba(139,92,246,0.12)]",
    amber:
      "border-amber-500/30 bg-amber-500/[0.07] text-amber-300 shadow-[0_0_24px_rgba(245,158,11,0.12)]",
  };

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24"
    >
      <GridBackground color="#0ea5e9" />

      {/* top black gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black via-black/50 to-transparent sm:h-44" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-black/50 blur-2xl" />

      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
          <div className="relative inline-flex self-center">
            <span className="rounded-md border border-sky-400/40 bg-sky-400/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-200">
              Tech Stack
            </span>
            <Image
              src="/images/Emphasis Line Right.png"
              alt=""
              width={32}
              height={32}
              aria-hidden="true"
              className="absolute -right-6 -top-3 opacity-90"
            />
          </div>
          <h1
            className={`${playfairDisplay.className} text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl`}
          >
            Area of Expertise
          </h1>
          <p className="font-mono text-[12px] leading-relaxed text-zinc-400 sm:text-sm">
            Core languages, frameworks, and engineering tools used to build
            production-grade products.
          </p>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
            stack.index.ts
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {TechStackSkillGroups.map((group, groupIndex) => (
              <div
                key={group.id}
                className={`p-4 ${
                  group.id === "languages" ? "md:col-span-2" : ""
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-300">
                      [{String(groupIndex + 1).padStart(2, "0")}]
                    </span>
                    <HyperText
                      as="span"
                      duration={500}
                      className="py-0 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300"
                    >
                      {group.title}
                    </HyperText>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500">
                    {group.items.length} items
                  </span>
                </div>

                <div
                  className={`flex flex-wrap items-center gap-x-2 gap-y-2 rounded-md border p-3 ${
                    toneClasses[group.tone]
                  }`}
                >
                  {group.items.map((item, index) => (
                    <React.Fragment key={item.name}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[12px] font-medium tracking-[0.02em] transition hover:text-white hover:underline hover:underline-offset-4 sm:text-[13px]"
                      >
                        <span className="text-zinc-300/90">{item.icon}</span>
                        <span>{item.name}</span>
                      </a>
                      {index < group.items.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="text-[11px] text-zinc-500"
                        >
                          •
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
