"use client";

import React from "react";
import { Playfair_Display } from "next/font/google";
import SectionTag from "@/components/elements/SectionTag";
import { GridBackground } from "@/components/ui/grid-background";
import { Terminal } from "@/components/ui/terminal";
import { projectData } from "@/lib/Data";
import Articles from "./ArticlesSection";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const normalizeProjectKey = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "");

const terminalProjectDetails = projectData.reduce(
  (acc, project) => {
    const key = normalizeProjectKey(project.title);
    const repo =
      project.github && project.github !== "#"
        ? `Repo: ${project.github}`
        : "Repo: coming soon";
    const live =
      project.preview && project.preview !== "#"
        ? `Live: ${project.preview}`
        : "Live: coming soon";

    acc[key] = [
      project.title,
      `Category: ${project.category}`,
      project.description,
      repo,
      live,
    ];
    return acc;
  },
  {} as Record<string, string[]>,
);

const terminalProjectTitles = projectData.map((project) => project.title);

const terminalBubbles = [
  { left: "5%", size: 5, delay: "0s", duration: "10s" },
  { left: "11%", size: 7, delay: "1.2s", duration: "12s" },
  { left: "17%", size: 4, delay: "2.5s", duration: "9s" },
  { left: "24%", size: 6, delay: "0.7s", duration: "11s" },
  { left: "31%", size: 5, delay: "1.9s", duration: "13s" },
  { left: "38%", size: 7, delay: "2.2s", duration: "12s" },
  { left: "46%", size: 4, delay: "0.4s", duration: "9s" },
  { left: "53%", size: 6, delay: "1.5s", duration: "11s" },
  { left: "60%", size: 7, delay: "2.7s", duration: "13s" },
  { left: "67%", size: 5, delay: "1s", duration: "10s" },
  { left: "74%", size: 6, delay: "1.8s", duration: "12s" },
  { left: "81%", size: 4, delay: "2.4s", duration: "9s" },
  { left: "88%", size: 7, delay: "0.6s", duration: "11s" },
  { left: "94%", size: 5, delay: "2s", duration: "12s" },
];

export default function ConnectTerminalSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-24">
      <GridBackground color="#0ea5e9" />
      <div className="pointer-events-none absolute inset-0 z-[12]">
        {terminalBubbles.map((bubble) => (
          <span
            key={`${bubble.left}-${bubble.delay}`}
            className="absolute bottom-[-12%] rounded-full bg-cyan-300/55 shadow-[0_0_14px_rgba(34,211,238,0.65)]"
            style={{
              left: bubble.left,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationName: "connectterminal-float-dot",
              animationDuration: bubble.duration,
              animationDelay: bubble.delay,
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
            }}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black via-black/50 to-transparent sm:h-32" />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <Articles />

          <div className="services-right-column order-1 p-4 sm:p-6 md:order-1">
            <SectionTag
              label="Terminal"
              containerClassName="mb-5"
              badgeClassName="border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
            />

            <h2
              className={`${playfairDisplay.className} mb-3 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl`}
            >
              Know Me More..!
            </h2>
            <p className="mb-6 font-mono text-[12px] leading-relaxed text-zinc-400 sm:text-sm">
              Get details What you Want.. Talk to my personal AI which can answer your question..
            </p>

            <Terminal
              interactive
              enableSound
              className="mx-0 w-full max-w-none px-0"
              welcomeLines={[
                "Type 'help' to see available commands.",
                "Tip: try 'cd ai'.",
              ]}
              commandResponses={{
                whoami: ["rishabh-gokhe"],
                projects: [
                  ...terminalProjectTitles,
                  "Tip: use `cd taskflow` or `cd skillwave` for details.",
                ],
                "projects --top": [
                  "Top picks:",
                  "Not yet Added.. Working on it",
                ],
                skills: ["React · Next.js · TypeScript · Node.js · Tailwind"],
                contact: [
                  "email: rishabhgokhe20contact@gmail.com",
                  "linkedin: linkedin.com/in/rishabh-gokhe",
                ],
                resume: ["downloads/PortFolioRishabh.pdf"],
                location: ["Nagpur, IN"],
              }}
              projectDetails={terminalProjectDetails}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes connectterminal-float-dot {
          0% {
            transform: translateY(0) scale(0.9);
            opacity: 0;
          }
          15% {
            opacity: 0.85;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-120vh) scale(1.1);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
