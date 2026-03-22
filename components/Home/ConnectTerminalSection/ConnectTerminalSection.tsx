"use client";

import React from "react";
import { Playfair_Display } from "next/font/google";
import SectionTag from "@/components/elements/SectionTag";
import { GridBackground } from "@/components/ui/grid-background";
import { Globe } from "@/components/ui/globe";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Terminal } from "@/components/ui/terminal";
import { projectData } from "@/lib/Data";

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

export default function ConnectTerminalSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-24">
      <GridBackground color="#0ea5e9" />
      <div className="connectterminal-data-layer pointer-events-none absolute inset-0 z-[12] overflow-hidden">
        <span className="absolute left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent shadow-[0_0_14px_rgba(34,211,238,0.45)] animate-[connectterminal-scanline_12s_linear_infinite]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black via-black/50 to-transparent sm:h-32" />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          <div className="services-right-column p-4 sm:p-6 md:order-2">
            <SectionTag
              label="Global Reach"
              containerClassName="mb-5"
              badgeClassName="border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
            />

            <h2
              className={`${playfairDisplay.className} mb-3 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl`}
            >
              Let&apos;s Build Products
            </h2>
            <p className="mb-6 font-mono text-[12px] leading-relaxed text-zinc-400 sm:text-sm">
              Open to collaboration on scalable and performance-focused systems,
              and long-term engineering delivery.
            </p>

            <div className="relative min-h-[420px] overflow-hidden rounded-xl border border-cyan-500/20 bg-zinc-950/65">
              <Globe className="top-5 scale-[1.15] opacity-90" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-transparent" />

              <div className="absolute inset-x-4 bottom-4 rounded-lg bg-black/45 p-4 backdrop-blur-sm">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  Want&apos;s to Work Together
                </h3>
                <p className="mt-2 font-mono text-xs leading-relaxed text-zinc-300">
                  Available for remote freelance work and contract projects
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <a
                    href="mailto:rishabhgokhe20contact@gmail.com"
                    className="inline-block"
                  >
                    <InteractiveHoverButton className="border-cyan-400/35 bg-cyan-400/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-cyan-100">
                      Connect
                    </InteractiveHoverButton>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rishabh-gokhe"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block"
                  >
                    <InteractiveHoverButton className="border-zinc-600/50 bg-zinc-900/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.12em] text-zinc-200">
                      LinkedIn
                    </InteractiveHoverButton>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="services-right-column p-4 sm:p-6 md:order-1">
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
                loves: ["Kshitija Urmale"],
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
        @keyframes connectterminal-scanline {
          0% {
            top: -5%;
            opacity: 0;
          }
          12% {
            opacity: 0.6;
          }
          88% {
            opacity: 0.45;
          }
          100% {
            top: 105%;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
