import CustomLinkButton from "@/components/elements/CustomLinkButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projectData } from "@/lib/Data";
import Image, { StaticImageData } from "next/image";
import React from "react";

import ViewIcon from "@/public/svg/icons/ViewIcon";
import CodeSquareIcon from "@/public/svg/icons/CodeSquareIcon";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white pb-10">
      <h1 className="text-center text-5xl font-bold mb-12">Projects</h1>
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="flex flex-col border border-neutral-800 bg-neutral-900 p-4 md:flex-row relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform"
            >
              <div className="w-full md:w-1/2 relative">
                <ImageCarousel images={project.images} />
              </div>
              <div className="flex-1 p-0 pt-6 md:p-6 flex flex-col justify-between bg-opacity-80">
                <div>
                  <h3 className="text-3xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <div className="absolute right-3 top-3">
                    {project.numberIcon}
                  </div>
                  <p className="text-gray-300">{project.description}</p>

                  {/* Project Feature Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 pt-4 pb-4">
                    {project.features.map(({ icon, title }, id) => (
                      <div
                        key={id}
                        className="col-span-1 flex items-center space-x-2 p-2"
                        style={{ color: "#22c55e" }}
                      >
                        {icon}
                        <p className="opacity-90">{title}</p>
                      </div>
                    ))}
                  </div>

                  <Separator className="bg-neutral-700 mb-2"/>

                </div>
                <div className="flex gap-4 flex-col md:flex-row">
                  <CustomLinkButton
                    href={project.preview}
                    leftIcon={<ViewIcon />}
                  >
                    Live Preview
                  </CustomLinkButton>
                  <CustomLinkButton
                    href={project.link}
                    leftIcon={<CodeSquareIcon />}
                  >
                    View Details
                  </CustomLinkButton>
                </div>
              </div>
            </div>
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
    <div className="relative">
      <Carousel>
        <CarouselContent>
          {images.map((item, id) => (
            <CarouselItem key={id}>
              <Image
                src={item.image}
                alt={item.alt}
                className="object-cover w-full h-[50vh] rounded-xl"
                width={600}
                height={400}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black shadow-lg transition-colors duration-300" />
        <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black shadow-lg transition-colors duration-300" />
      </Carousel>
    </div>
  );
}
