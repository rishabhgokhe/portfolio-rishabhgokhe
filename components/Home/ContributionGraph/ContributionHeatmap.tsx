"use client";

import { Playfair_Display } from "next/font/google";
import { GridBackground } from "@/components/ui/grid-background";
import SectionTag from "@/components/elements/SectionTag";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const bubbles = [
  { left: "4%", size: 5, delay: "0s", duration: "10s" },
  { left: "9%", size: 7, delay: "1.1s", duration: "12s" },
  { left: "14%", size: 4, delay: "2.4s", duration: "9s" },
  { left: "20%", size: 6, delay: "0.6s", duration: "11s" },
  { left: "27%", size: 5, delay: "1.8s", duration: "13s" },
  { left: "33%", size: 7, delay: "2.1s", duration: "12s" },
  { left: "40%", size: 4, delay: "0.3s", duration: "9s" },
  { left: "47%", size: 6, delay: "1.4s", duration: "11s" },
  { left: "54%", size: 7, delay: "2.6s", duration: "13s" },
  { left: "61%", size: 5, delay: "0.9s", duration: "10s" },
  { left: "68%", size: 6, delay: "1.7s", duration: "12s" },
  { left: "74%", size: 4, delay: "2.3s", duration: "9s" },
  { left: "80%", size: 7, delay: "0.5s", duration: "11s" },
  { left: "86%", size: 5, delay: "1.9s", duration: "12s" },
  { left: "92%", size: 6, delay: "2.8s", duration: "10s" },
  { left: "96%", size: 4, delay: "1.2s", duration: "9s" },
];

export default function ContributionHeatmap() {
  return (
    <section
      id="github-contribution"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24"
    >
      <GridBackground color="#22c55e" />
      <div className="pointer-events-none absolute inset-0 z-[12]">
        {bubbles.map((bubble) => (
          <span
            key={`${bubble.left}-${bubble.delay}`}
            className="absolute bottom-[-12%] rounded-full bg-emerald-300/55 shadow-[0_0_14px_rgba(74,222,128,0.65)]"
            style={{
              left: bubble.left,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animationName: "float-dot",
              animationDuration: bubble.duration,
              animationDelay: bubble.delay,
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black via-black/50 to-transparent sm:h-40" />

      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
          <SectionTag label="Open Source" containerClassName="self-center" />
          <h2
            className={`${playfairDisplay.className} text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl`}
          >
            Contribution Heatmap
          </h2>
          <p className="font-mono text-[12px] leading-relaxed text-zinc-400 sm:text-sm">
            Consistent commits, active repositories, and steady contribution
            streak across focused engineering work.
          </p>
        </div>

        <div className="grid gap-5 sm:p-6">
          <a
            href="https://github.com/rishabhgokhe"
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden p-3 transition"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                github.heatmap @rishabhgokhe
              </p>
              <span className="font-mono text-[10px] text-emerald-300/80 group-hover:text-emerald-200">
                View Profile
              </span>
            </div>
            <img
              src="https://ghchart.rshah.org/16b981/rishabhgokhe"
              alt="GitHub heatmap contribution graph for rishabhgokhe"
              className="w-full [filter:invert(1)_hue-rotate(180deg)_saturate(1.15)_contrast(1.05)]"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-dot {
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
