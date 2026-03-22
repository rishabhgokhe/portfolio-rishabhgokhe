import React, { useMemo, useState } from "react";
import { projectData } from "@/lib/Data";
import { Playfair_Display } from "next/font/google";
import { GridBackground } from "@/components/ui/grid-background";
import SectionTag from "@/components/elements/SectionTag";
import ExpandableCardDemo from "@/components/ui/expandable-card";
import GithubIcon from "@/public/svg/icons/GithubIcon";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const unique = new Set(
      projectData.map((project) => project.category ?? "Other"),
    );
    return ["All", ...Array.from(unique)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projectData;
    return projectData.filter(
      (project) => (project.category ?? "Other") === activeCategory,
    );
  }, [activeCategory]);

  const cards = useMemo(
    () =>
      filteredProjects.map((project) => {
        const imagesAny = (project as any).images;
        const imageValue = Array.isArray(imagesAny)
          ? imagesAny?.[0]?.image
          : imagesAny?.image;
        const imageSrc =
          typeof imageValue === "string" ? imageValue : imageValue?.src ?? "";

        return {
          title: project.title,
          description: project.description,
          category: project.category ?? "Other",
          src: imageSrc,
          ctaText: <GithubIcon className="h-2.6 w-2.6" />,
          ctaLink: project.github ?? "#",
          previewText:
            project.preview && project.preview !== "#" ? "Preview" : undefined,
          previewLink:
            project.preview && project.preview !== "#" ? project.preview : undefined,
          content:
            project.features && project.features.length > 0 ? (
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-200/80">
                  Features
                </span>
                <ul className="space-y-1 text-xs text-zinc-300 md:text-sm">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300/80" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-xs text-zinc-300 md:text-sm">
                Highlights coming soon.
              </div>
            ),
        };
      }),
    [filteredProjects],
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24"
    >
      <GridBackground color="#22c55e" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black via-black/60 to-transparent sm:h-40" />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 flex max-w-4xl flex-col gap-4 text-center">
          <SectionTag
            label="Projects"
            containerClassName="self-center"
            badgeClassName="border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
          />
          <h2
            className={`${playfairDisplay.className} text-4xl font-extrabold tracking-tight text-zinc-100 sm:text-5xl md:text-6xl`}
          >
            Production Work
          </h2>
          <p className="font-mono text-[12px] leading-relaxed text-zinc-400 sm:text-sm">
            Real projects focused on usability, scale, and consistent
            performance in production-like environments.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
              }}
              className={`rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition ${
                activeCategory === category
                  ? "border-emerald-400/70 bg-emerald-400/15 text-emerald-200"
                  : "border-zinc-700/60 bg-black/40 text-zinc-400 hover:border-emerald-300/50 hover:text-emerald-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <ExpandableCardDemo cards={cards} />
      </div>
    </section>
  );
}
