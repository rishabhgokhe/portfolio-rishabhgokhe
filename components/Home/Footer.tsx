"use client";

import React, { useRef } from "react";
import { Playfair_Display } from "next/font/google";
import { GridBackground } from "../ui/grid-background";
import { navIcons, socialBentoGridData } from "@/lib/Data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HyperText } from "@/components/ui/hyper-text";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const prefersReduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReduced) {
        gsap.set(".footer-slide", { opacity: 1, x: 0, filter: "blur(0px)" });
        gsap.set(".footer-scan", {
          opacity: 1,
          scaleX: 1,
          transformOrigin: "left",
        });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reset",
        },
      });

      tl.fromTo(
        ".footer-scan",
        { opacity: 0, scaleX: 0 },
        {
          opacity: 1,
          scaleX: 1,
          duration: 0.5,
          ease: "power2.out",
          transformOrigin: "left",
        },
        0
      )
        .from(
          '.footer-slide[data-depth="3"]',
          {
            x: 80,
            opacity: 0,
            filter: "blur(6px)",
            duration: 0.9,
            ease: "back.out(1.2)",
          },
          0.1
        )
        .from(
          '.footer-slide[data-depth="2"]',
          {
            x: 60,
            opacity: 0,
            filter: "blur(4px)",
            duration: 0.78,
            ease: "back.out(1.1)",
          },
          "-=0.55"
        )
        .from(
          '.footer-slide[data-depth="1"]',
          {
            x: 40,
            opacity: 0,
            filter: "blur(3px)",
            duration: 0.7,
          },
          "-=0.5"
        );
    },
    { scope: footerRef }
  );
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
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-black py-12 text-white"
    >
      <GridBackground color="#22c55e" />

      <div className="footer-scan pointer-events-none absolute inset-x-0 top-0 z-10 h-24 origin-left bg-gradient-to-b from-black via-black/30 to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div
          className="footer-slide mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          data-depth="3"
        >
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

        <div
          className="footer-slide mb-8 !font-mono text-xs leading-relaxed text-zinc-300 sm:text-sm"
          data-depth="2"
        >
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
                <HyperText
                  as="span"
                  className="!py-0 !text-[11px] !font-semibold font-mono leading-none text-inherit"
                  duration={520}
                  animateOnHover
                >
                  {item.title}
                </HyperText>
              </a>
              {index < footerLinks.length - 1 && (
                <span className="px-2 text-zinc-500">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div
          className="footer-slide flex flex-col items-start justify-between gap-2 border-t border-zinc-800 pt-4 !font-mono text-[11px] uppercase tracking-[0.1em] text-zinc-500 sm:flex-row sm:items-center"
          data-depth="1"
        >
          <p>&copy; {new Date().getFullYear()} Rishabh Gokhe</p>
          <p>Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}
