import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectData } from "@/lib/Data";
import Image, { StaticImageData } from "next/image";
import CustomLinkButton from "@/components/elements/CustomLinkButton";
import { Playfair_Display } from "next/font/google";
import { GridBackground } from "@/components/ui/grid-background";
import SectionTag from "@/components/elements/SectionTag";

import ViewIcon from "@/public/svg/icons/ViewIcon";
import CodeSquareIcon from "@/public/svg/icons/CodeSquareIcon";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24"
    >
      <GridBackground color="#f59e0b" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black via-black/60 to-transparent sm:h-40" />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-10 flex max-w-4xl flex-col gap-4 text-center">
          <SectionTag
            label="Projects"
            containerClassName="self-center"
            badgeClassName="border-amber-400/40 bg-amber-400/10 text-amber-200"
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

        <div className="space-y-6">
          {projectData.map((project, index) => (
            <article
              key={index}
              className="relative overflow-hidden rounded-xl border border-amber-500/20 bg-zinc-950/60 p-4 transition hover:border-amber-300/40 md:p-5"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="relative">
                  <ImageCarousel images={project.images} />
                  <div className="absolute bottom-3 left-3 rounded-md border border-amber-500/30 bg-black/65 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-amber-200">
                    {project.images.length} screenshots
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3
                        className={`${playfairDisplay.className} text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl`}
                      >
                        {project.title}
                      </h3>
                      <span className="text-amber-300">{project.numberIcon}</span>
                    </div>

                    <p className="font-mono text-xs leading-relaxed text-zinc-300 sm:text-sm">
                      {project.description}
                    </p>

                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {project.features.map(({ icon, title }, id) => (
                        <div
                          key={id}
                          className="flex items-center gap-2 rounded-md border border-amber-500/20 bg-black/45 px-2.5 py-2"
                        >
                          <span className="text-emerald-300">{icon}</span>
                          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-zinc-200">
                            {title}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <CustomLinkButton
                        href={project.preview}
                        leftIcon={<ViewIcon />}
                        className="w-full justify-center border border-amber-500/35 bg-amber-400/90 text-black shadow-none hover:border-amber-300/70 sm:w-auto"
                      >
                        Live Preview
                      </CustomLinkButton>
                      <CustomLinkButton
                        href={project.link}
                        leftIcon={<CodeSquareIcon />}
                        className="w-full justify-center border border-zinc-500/50 bg-zinc-200 text-black shadow-none hover:border-zinc-300 sm:w-auto"
                      >
                        View Details
                      </CustomLinkButton>
                    </div>
                    <p className="pt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-zinc-500">
                      * Some features are under development
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ImageItem {
  image: StaticImageData;
  alt: string;
}

type ImageListType = ImageItem[];

function ImageCarousel({ images }: { images: ImageListType }) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      <Carousel>
        <CarouselContent>
          {images.map((item, id) => (
            <CarouselItem key={id}>
              <Image
                src={item.image}
                alt={item.alt}
                className="h-[42vh] w-full rounded-lg object-cover md:h-[48vh]"
                width={600}
                height={400}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 border-zinc-700 bg-black/70 text-white shadow-none backdrop-blur-sm transition-colors duration-300 hover:border-amber-300/50 hover:bg-black/90" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 border-zinc-700 bg-black/70 text-white shadow-none backdrop-blur-sm transition-colors duration-300 hover:border-amber-300/50 hover:bg-black/90" />
      </Carousel>
    </div>
  );
}
