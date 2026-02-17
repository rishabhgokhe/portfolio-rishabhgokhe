"use client";

import React from "react";
import { Playfair_Display } from "next/font/google";
import { GridBackground } from "../ui/grid-background";
import { navIcons, socialBentoGridData } from "@/lib/Data";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer() {
  const linkMap = new Map<string, string>();

  socialBentoGridData.forEach((item) => {
    linkMap.set(item.title, item.link);
  });

  const leetCodeLink = navIcons.find((item) => item.name === "LeetCode")?.link;

  if (leetCodeLink) {
    linkMap.set("LeetCode", leetCodeLink);
  }

  const orderedTitles = [
    "GitHub",
    "LinkedIn",
    "LeetCode",
    "Email",
    "Buy me a Coffee",
    "Twitter",
    "WhatsApp",
    "Instagram",
    "Telegram",
    "Call Now",
  ];

  const footerLinks = orderedTitles
    .map((title) => ({ title, link: linkMap.get(title) }))
    .filter((item): item is { title: string; link: string } =>
      Boolean(item.link),
    );

  return (
    <footer className="relative overflow-hidden bg-black py-12 text-white">
      <GridBackground color="#22c55e" />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black via-black/30 to-transparent" />

      <div className="relative z-20 pointer-events-none mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              className={`${playfairDisplay.className} mt-4 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl`}
            >
              Rishabh Gokhe
            </h2>
            <div className="mt-4 max-w-2xl !font-mono text-xs leading-relaxed text-zinc-400 sm:text-sm">
              <div className="mb-1 font-mono">
                <span className="font-mono text-amber-300">const</span>{" "}
                <span className="font-mono text-zinc-300">developer</span>{" "}
                <span className="font-mono text-sky-300">=</span>{" "}
                <span className="font-mono text-emerald-300">{"{"}</span>
              </div>
              <div className="mb-1 pl-6 font-mono">
                <span className="font-mono text-sky-300">name:</span>{" "}
                <span className="font-mono text-amber-200">
                  &quot;Rishabh Gokhe&quot;
                </span>
                ,
              </div>
              <div className="mb-1 pl-6 font-mono">
                <span className="font-mono text-sky-300">role:</span>{" "}
                <span className="font-mono text-amber-200">
                  &quot;Full-Stack Software Engineer&quot;
                </span>
                ,
              </div>
              <div className="mb-1 pl-6 font-mono">
                <span className="font-mono text-sky-300">interests:</span>{" "}
                <span className="font-mono text-emerald-300">[</span>
                <span className="font-mono text-amber-200">
                  &quot;Scalable Web Apps&quot;, &quot;System Design&quot;,
                  &quot;DSA&quot;
                </span>
                <span className="font-mono text-emerald-300">]</span>,
              </div>
              <div className="pl-6 font-mono">
                <span className="font-mono text-sky-300">currentStatus:</span>{" "}
                <span className="font-mono text-amber-200">
                  &quot;Open to opportunities&quot;
                </span>
              </div>
              <div className="mt-1 font-mono">
                <span className="font-mono text-emerald-300">{"}"};</span>
              </div>
            </div>
          </div>

          <p className="!font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500">
            Thats all i have
          </p>
        </div>

        <div className="mb-8 !font-mono text-xs leading-relaxed text-zinc-300 sm:text-sm">
          {footerLinks.map((item, index) => (
            <React.Fragment key={item.title}>
              <a
                href={item.link}
                target={
                  item.link.startsWith("mailto:") ||
                  item.link.startsWith("tel:")
                    ? undefined
                    : "_blank"
                }
                rel={
                  item.link.startsWith("mailto:") ||
                  item.link.startsWith("tel:")
                    ? undefined
                    : "noreferrer"
                }
                className="pointer-events-auto !font-mono transition hover:text-amber-200"
              >
                {item.title}
              </a>
              {index < footerLinks.length - 1 && (
                <span className="px-2 text-zinc-500">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-2 border-t border-zinc-800 pt-4 !font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Rishabh Gokhe</p>
          <p>Built with Next.js + TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
