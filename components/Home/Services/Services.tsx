"use client";

import React, { useRef } from "react";
import { Playfair_Display } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe } from "@/components/ui/globe";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import SectionTag from "@/components/elements/SectionTag";
import { GridBackground } from "@/components/ui/grid-background";
import { servicesData } from "@/lib/Data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const serviceBlinkDots = [
  [
    { top: "9px", right: "14px", delay: "0.2s" },
    { top: "13px", right: "30px", delay: "1.1s" },
    { top: "21px", right: "22px", delay: "1.9s" },
  ],
  [
    { top: "10px", right: "15px", delay: "0.7s" },
    { top: "18px", right: "28px", delay: "1.6s" },
    { top: "24px", right: "10px", delay: "2.4s" },
  ],
  [
    { top: "8px", right: "12px", delay: "0.35s" },
    { top: "14px", right: "26px", delay: "1.35s" },
    { top: "24px", right: "18px", delay: "2.15s" },
  ],
  [
    { top: "11px", right: "14px", delay: "0.5s" },
    { top: "16px", right: "32px", delay: "1.45s" },
    { top: "23px", right: "20px", delay: "2.25s" },
  ],
];

export const Services = () => {
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
            gsap.set(".services-card", { autoAlpha: 1 });
            gsap.from(
              ".services-left-reveal, .services-right-reveal, .services-card",
              {
                opacity: 0,
                duration: 0.4,
                stagger: 0.06,
                ease: "power1.out",
                immediateRender: false,
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 78%",
                  toggleActions: "play none none reverse",
                  invalidateOnRefresh: true,
                },
              }
            );
            return;
          }

          const leftY = isDesktop ? 28 : 16;
          const cardY = isDesktop ? 30 : 20;
          const rightY = isDesktop ? 26 : 16;
          const headingBlur = isDesktop ? "blur(4px)" : "blur(2px)";
          const cardBlur = isDesktop ? "blur(5px)" : "blur(3px)";
          gsap.set(".services-card", { autoAlpha: 1 });

          const leftTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 74%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          });

          leftTimeline
            .from(".services-left-reveal", {
              y: leftY,
              opacity: 0,
              filter: headingBlur,
              duration: isDesktop ? 0.76 : 0.58,
              stagger: isDesktop ? 0.1 : 0.08,
              immediateRender: false,
              onStart: () => {
                gsap.set(".services-left-reveal", {
                  willChange: "transform, opacity, filter",
                });
              },
              onComplete: () => {
                gsap.set(".services-left-reveal", { clearProps: "willChange" });
              },
              onReverseComplete: () => {
                gsap.set(".services-left-reveal", { clearProps: "willChange" });
              },
            })
            .from(
              ".services-card",
              {
                y: cardY,
                autoAlpha: 0,
                scale: isDesktop ? 0.97 : 0.985,
                filter: cardBlur,
                transformOrigin: "top center",
                duration: isDesktop ? 0.68 : 0.54,
                stagger: isDesktop ? 0.1 : 0.08,
                immediateRender: false,
                onStart: () => {
                  gsap.set(".services-card", {
                    willChange: "transform, opacity, filter",
                  });
                },
                onComplete: () => {
                  gsap.set(".services-card", { clearProps: "willChange" });
                },
                onReverseComplete: () => {
                  gsap.set(".services-card", { clearProps: "willChange" });
                },
              },
              "-=0.45"
            )
            .fromTo(
              ".services-cards-grid",
              { y: -2 },
              { y: 0, duration: 0.28, ease: "power1.out" },
              "-=0.08"
            );

          const rightTimeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: ".services-right-column",
              start: isDesktop ? "top 80%" : "top 86%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          });

          rightTimeline
            .from(".services-right-reveal", {
              y: rightY,
              opacity: 0,
              filter: headingBlur,
              duration: isDesktop ? 0.68 : 0.52,
              stagger: isDesktop ? 0.1 : 0.08,
              immediateRender: false,
            });

          gsap
            .timeline({
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: isDesktop ? 1.2 : 0.8,
              },
            })
            .to(".services-data-layer", {
              yPercent: -6,
              ease: "power1.out",
              duration: 0.42,
            })
            .to(".services-data-layer", {
              yPercent: -12,
              ease: "power1.inOut",
              duration: 0.58,
            });
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24"
    >
      <GridBackground color="#14b8a6" />
      <div className="services-data-layer pointer-events-none absolute inset-0 z-[12] overflow-hidden">
        <span className="absolute left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent shadow-[0_0_14px_rgba(34,211,238,0.45)] animate-[services-scanline_12s_linear_infinite]" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black via-black/60 to-transparent sm:h-40" />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {/* left side services section */}
          <div className="p-4 sm:p-6">
            <SectionTag
              label="Services"
              containerClassName="services-left-reveal mb-5"
              badgeClassName="border-teal-400/40 bg-teal-400/10 text-teal-200"
            />
            <h2
              className={`${playfairDisplay.className} services-left-reveal mb-3 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl`}
            >
              What I Can Offer
            </h2>
            <p className="services-left-reveal mb-6 font-mono text-[12px] leading-relaxed text-zinc-400 sm:text-sm">
              Product-minded engineering services focused on performance,
              stability, and measurable business impact.
            </p>

            <div>
              <p className="services-left-reveal mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                services.index.ts
              </p>

              <div className="services-cards-grid grid grid-cols-1 gap-5 sm:grid-cols-2">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className="services-card relative rounded-lg border border-teal-500/20 bg-black/45 p-3 transition hover:border-teal-300/45 hover:bg-black/60"
                  >
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <span className="text-lg">{service.icon}</span>
                      <span className="font-mono text-[10px] text-teal-300/75">
                        [{String(index + 1).padStart(2, "0")}]
                      </span>
                    </div>
                    <div className="relative mb-2 pr-10">
                      <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-100">
                        {service.title}
                      </h3>
                      {serviceBlinkDots[index % serviceBlinkDots.length].map(
                        (dot, dotIndex) => (
                          <span
                            key={`${index}-${dotIndex}`}
                            className="pointer-events-none absolute h-1 w-1 rounded-full bg-teal-300/85 shadow-[0_0_7px_rgba(45,212,191,0.8)] animate-[services-dot-blink_2.8s_ease-in-out_infinite]"
                            style={{
                              top: dot.top,
                              right: dot.right,
                              animationDelay: dot.delay,
                            }}
                          />
                        ),
                      )}
                    </div>
                    <p className="font-mono text-[11px] leading-relaxed text-zinc-400">
                      <span className="text-teal-300">{">_ "}</span>
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* right side contact section */}
          <div className="services-right-column p-4 sm:p-6">
            <SectionTag
              label="Global Reach"
              containerClassName="services-right-reveal mb-5"
              badgeClassName="border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
            />

            <h2
              className={`${playfairDisplay.className} services-right-reveal mb-3 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl`}
            >
              Let&apos;s Build Products
            </h2>
            <p className="services-right-reveal mb-6 font-mono text-[12px] leading-relaxed text-zinc-400 sm:text-sm">
              Open to collaboration on scalable and performance-focused systems, and long-term engineering delivery.
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
        </div>
      </div>

      <style jsx>{`
        @keyframes services-scanline {
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

        @keyframes services-dot-blink {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.85);
          }
          50% {
            opacity: 1;
            transform: scale(1.35);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
