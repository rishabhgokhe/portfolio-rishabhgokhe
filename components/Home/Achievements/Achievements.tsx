import React from "react";
import { Playfair_Display } from "next/font/google";
import SectionTag from "@/components/elements/SectionTag";
import { GridBackground } from "@/components/ui/grid-background";
import {
  achievementHighlightsData,
  hackathonWinsData,
  leadershipPostsData,
} from "@/lib/Data";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24"
    >
      <GridBackground color="#f59e0b" />
      <div className="pointer-events-none absolute inset-0 z-[12]">
        <span className="absolute left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-amber-300/30 to-transparent shadow-[0_0_14px_rgba(252,211,77,0.45)] animate-[achievements-scanline_12s_linear_infinite]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black via-black/60 to-transparent sm:h-40" />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-8 flex max-w-4xl flex-col gap-4 text-center">
          <SectionTag
            label="Achievements"
            containerClassName="self-center"
            badgeClassName="border-amber-400/40 bg-amber-400/10 text-amber-200"
          />
          <h2
            className={`${playfairDisplay.className} text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl`}
          >
            Leadership and Milestones
          </h2>
          <p className="font-mono text-[12px] leading-relaxed text-zinc-400 sm:text-sm">
            Committee positions, hackathon results, and measurable impact across
            campus and community initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-amber-500/20 bg-black/45 p-5">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-amber-300/80">
              leadership.posts.ts
            </p>
            <div className="space-y-4">
              {leadershipPostsData.map((role, index) => (
                <div
                  key={`${role.title}-${index}`}
                  className="rounded-lg border border-amber-500/15 bg-zinc-950/60 p-4"
                >
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-zinc-100">
                      {role.title}
                    </h3>
                    <span className="font-mono text-[10px] text-amber-200/80">
                      {role.period}
                    </span>
                  </div>
                  <p className="mb-1 font-mono text-[11px] text-amber-200/85">
                    {role.organization}
                  </p>
                  <p className="font-mono text-[11px] leading-relaxed text-zinc-400">
                    <span className="text-amber-300">{">_ "}</span>
                    {role.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-orange-500/20 bg-black/45 p-5">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-orange-300/80">
                hackathon.wins.ts
              </p>
              <div className="space-y-3">
                {hackathonWinsData.map((item, index) => (
                  <div
                    key={`${item.event}-${index}`}
                    className="rounded-lg border border-orange-500/15 bg-zinc-950/60 p-4"
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="rounded border border-orange-400/35 bg-orange-400/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.08em] text-orange-200">
                        {item.rank}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-500">
                        {item.year}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-zinc-200">{item.event}</p>
                    <p className="mt-1 font-mono text-[11px] text-zinc-400">
                      {item.project}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-yellow-500/20 bg-black/45 p-5">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-yellow-300/80">
                impact.metrics.ts
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {achievementHighlightsData.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="rounded-lg border border-yellow-500/15 bg-zinc-950/60 p-3"
                  >
                    <p className="font-mono text-lg font-semibold text-yellow-200">
                      {item.value}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-zinc-300">
                      {item.title}
                    </p>
                    <p className="mt-1 font-mono text-[10px] leading-relaxed text-zinc-500">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes achievements-scanline {
          0% {
            top: -5%;
            opacity: 0;
          }
          12% {
            opacity: 0.55;
          }
          88% {
            opacity: 0.4;
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
