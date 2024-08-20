import React from "react";
import Image from "next/image";
import { aboutData } from "@/lib/Data";

import ProfilePhoto from "@/public/images/profile_photo.jpeg";

export default function About() {
  return (
    <section id="about" className="bg-black text-white pb-10">
      <h1 className="text-center text-5xl font-bold pb-8">
        About <span className="text-red-500">Me</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/3 text-center mb-8 md:mb-0">
          <Image
            src={ProfilePhoto}
            alt="Profile Photo"
            className="rounded-full w-52 h-52 mx-auto shadow-xl shadow-zinc-500/50 border-4 border-white transform transition duration-500 hover:scale-105 hover:rotate-3"
          />
        </div>
        <div className="w-full md:w-2/3 p-4">
          <p className="text-lg mb-4"> {aboutData.aboutMe} </p>
          <p className="text-lg mb-4">{aboutData.currentStatus}</p>
          <div className="bg-gray-800 text-gray-300 p-4 rounded-md shadow-md border-blue-500">
            <p>
              <span className="font-semibold">Note :</span> Animease is an npm
              package developed by me which enhances your animations
              effortlessly. Do check out{" "}
              <a
                href="https://www.npmjs.com/package/animease"
                className="text-blue-400 underline"
              >
                animease
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
