import React from "react";
import { Playfair_Display } from "next/font/google";
import { Globe } from "@/components/ui/globe";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import SectionTag from "@/components/elements/SectionTag";
import { GridBackground } from "@/components/ui/grid-background";
import { servicesData } from "@/lib/Data";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24"
    >
      <GridBackground color="#14b8a6" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black via-black/60 to-transparent sm:h-40" />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {/* left side services section */}
          <div className="p-4 sm:p-6">
            <SectionTag
              label="Services"
              containerClassName="mb-5"
              badgeClassName="border-teal-400/40 bg-teal-400/10 text-teal-200"
            />
            <h2
              className={`${playfairDisplay.className} mb-3 text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl`}
            >
              What I Can Offer
            </h2>
            <p className="mb-6 font-mono text-[12px] leading-relaxed text-zinc-400 sm:text-sm">
              Product-minded engineering services focused on performance,
              stability, and measurable business impact.
            </p>

            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
                services.index.ts
              </p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {servicesData.map((service, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-teal-500/20 bg-black/45 p-3 transition hover:border-teal-300/45 hover:bg-black/60"
                  >
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <span className="text-lg">{service.icon}</span>
                      <span className="font-mono text-[10px] text-teal-300/75">
                        [{String(index + 1).padStart(2, "0")}]
                      </span>
                    </div>
                    <h3 className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-zinc-100">
                      {service.title}
                    </h3>
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
          <div className="p-4 sm:p-6">
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
    </section>
  );
};

export default Services;
