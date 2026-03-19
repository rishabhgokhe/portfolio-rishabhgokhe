"use client";

import React from "react";
import TerminalDemo from "@/components/elements/InteractiveTerminal";
import AIBotPanel from "@/components/elements/AIBotPanel";
import { GridBackground } from "@/components/ui/grid-background";

export default function InteractiveSection() {
  return (
    <section className="relative overflow-hidden bg-black py-12 text-white md:py-20">
      <GridBackground color="#0ea5e9" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black via-black/40 to-transparent sm:h-32" />

      <div className="relative z-20 mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-8 px-4 sm:px-6 lg:grid-cols-2">
        <TerminalDemo />
        <AIBotPanel className="h-fit" />
      </div>
    </section>
  );
}
