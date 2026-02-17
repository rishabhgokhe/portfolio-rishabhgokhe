"use client";
import React, { useRef } from "react";
import { Playfair_Display } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HyperText } from "@/components/ui/hyper-text";
import { GridBackground } from "@/components/ui/grid-background";
import SectionTag from "@/components/elements/SectionTag";
import { TechStackSkillGroups } from "@/lib/Data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const dataTrails = [
  { top: "16%", width: 90, delay: "0s", duration: "10s" },
  { top: "24%", width: 90, delay: "1.4s", duration: "12s" },
  { top: "33%", width: 84, delay: "0.7s", duration: "9s" },
  { top: "45%", width: 100, delay: "2.2s", duration: "13s" },
  { top: "56%", width: 95, delay: "1.1s", duration: "10s" },
  { top: "67%", width: 96, delay: "2.8s", duration: "12s" },
  { top: "78%", width: 85, delay: "0.4s", duration: "9s" },
];

const constellationDots = [
  { left: "8%", top: "20%", size: 3, delay: "0s" },
  { left: "18%", top: "38%", size: 2, delay: "0.9s" },
  { left: "29%", top: "17%", size: 3, delay: "1.6s" },
  { left: "41%", top: "50%", size: 2, delay: "0.4s" },
  { left: "53%", top: "28%", size: 3, delay: "2.1s" },
  { left: "64%", top: "61%", size: 2, delay: "0.8s" },
  { left: "77%", top: "34%", size: 3, delay: "1.4s" },
  { left: "88%", top: "52%", size: 2, delay: "2.5s" },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop, reduceMotion } = context.conditions as {
            isDesktop: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            gsap.from(".techstack-reveal, .techstack-group, .techstack-chipline", {
              opacity: 0,
              duration: 0.4,
              stagger: 0.06,
              ease: "power1.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 78%",
                toggleActions: "play none none reverse",
                invalidateOnRefresh: true,
              },
            });
            return;
          }

          const revealY = isDesktop ? 28 : 16;
          const groupY = isDesktop ? 34 : 22;
          const chipY = isDesktop ? 14 : 10;
          const headingBlur = isDesktop ? "blur(4px)" : "blur(2px)";
          const cardBlur = isDesktop ? "blur(5px)" : "blur(3px)";

          const headingTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          });

          headingTimeline.from(".techstack-reveal", {
            y: revealY,
            opacity: 0,
            filter: headingBlur,
            duration: isDesktop ? 0.78 : 0.58,
            stagger: isDesktop ? 0.1 : 0.08,
            onStart: () => {
              gsap.set(".techstack-reveal", {
                willChange: "transform, opacity, filter",
              });
            },
            onComplete: () => {
              gsap.set(".techstack-reveal", { clearProps: "willChange" });
            },
            onReverseComplete: () => {
              gsap.set(".techstack-reveal", { clearProps: "willChange" });
            },
          });

          const groupsTimeline = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: ".techstack-grid",
              start: isDesktop ? "top 82%" : "top 86%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          });

          groupsTimeline
            .from(".techstack-group", {
              y: groupY,
              opacity: 0,
              scale: isDesktop ? 0.97 : 0.985,
              filter: cardBlur,
              transformOrigin: "top center",
              duration: isDesktop ? 0.72 : 0.56,
              stagger: isDesktop ? 0.1 : 0.08,
              onStart: () => {
                gsap.set(".techstack-group, .techstack-chipline", {
                  willChange: "transform, opacity, filter",
                });
              },
              onComplete: () => {
                gsap.set(".techstack-group, .techstack-chipline", {
                  clearProps: "willChange",
                });
              },
              onReverseComplete: () => {
                gsap.set(".techstack-group, .techstack-chipline", {
                  clearProps: "willChange",
                });
              },
            })
            .from(
              ".techstack-chipline",
              {
                y: chipY,
                opacity: 0,
                duration: isDesktop ? 0.46 : 0.36,
                stagger: isDesktop ? 0.08 : 0.06,
              },
              "-=0.42"
            )
            .fromTo(
              ".techstack-grid",
              { y: -2 },
              { y: 0, duration: 0.28, ease: "power1.out" },
              "-=0.08"
            );

          gsap
            .timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: isDesktop ? 1.2 : 0.8,
              },
            })
            .to(".techstack-data-layer", {
              yPercent: -7,
              ease: "power1.out",
              duration: 0.42,
            })
            .to(".techstack-data-layer", {
              yPercent: -14,
              ease: "power1.inOut",
              duration: 0.58,
            });
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

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
      ref={sectionRef}
      id="features"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24"
    >
      <GridBackground color="#0ea5e9" />
      <div className="techstack-data-layer pointer-events-none absolute inset-0 z-[12]">
        {dataTrails.map((trail) => (
          <span
            key={`${trail.top}-${trail.delay}`}
            className="absolute h-[1.2px] bg-gradient-to-r from-transparent via-sky-300/50 to-transparent shadow-[0_0_12px_rgba(125,211,252,0.75)]"
            style={{
              top: trail.top,
              width: `${trail.width}px`,
              animationName: "packet-trail",
              animationDuration: trail.duration,
              animationDelay: trail.delay,
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
            }}
          />
        ))}

        {constellationDots.map((dot) => (
          <span
            key={`${dot.left}-${dot.top}`}
            className="absolute rounded-full bg-sky-200/40 shadow-[0_0_6px_rgba(125,211,252,0.4)]"
            style={{
              left: dot.left,
              top: dot.top,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animationName: "constellation-pulse",
              animationDuration: "4.5s",
              animationDelay: dot.delay,
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
            }}
          />
        ))}
      </div>

      {/* top black gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black via-black/50 to-transparent sm:h-44" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-black/50 blur-2xl" />

      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 text-center">
          <SectionTag
            label="Tech Stack"
            containerClassName="techstack-reveal self-center"
            badgeClassName="border-sky-400/40 bg-sky-400/10 text-sky-200"
          />
          <h1
            className={`${playfairDisplay.className} techstack-reveal text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl`}
          >
            Area of Expertise
          </h1>
          <p className="techstack-reveal font-mono text-[12px] leading-relaxed text-zinc-400 sm:text-sm">
            Core languages, frameworks, and engineering tools used to build
            production-grade products.
          </p>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">
            stack.index.ts
          </div>

          <div className="techstack-grid grid grid-cols-1 gap-4 md:grid-cols-2">
            {TechStackSkillGroups.map((group, groupIndex) => (
              <div
                key={group.id}
                className={`techstack-group p-4 ${
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
                  className={`techstack-chipline flex flex-wrap items-center gap-x-2 gap-y-2 rounded-md border p-3 ${
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] h-36 bg-gradient-to-t from-black/50 via-black/10 to-transparent sm:h-44" />

      <style jsx>{`
        @keyframes packet-trail {
          0% {
            transform: translateX(-20vw);
            opacity: 0;
          }
          15% {
            opacity: 0.6;
          }
          85% {
            opacity: 0.35;
          }
          100% {
            transform: translateX(120vw);
            opacity: 0;
          }
        }

        @keyframes constellation-pulse {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.55;
          }
        }
      `}</style>
    </section>
  );
}
