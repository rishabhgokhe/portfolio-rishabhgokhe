import React from "react";

import InformationDiamondIcon from "../../assets/svg/icons/InformationDiamondIcon";
import SearchAreaIcon from "../../assets/svg/icons/SearchAreaIcon";
import Image from "next/image";

function IntroSec() {

  return (
    <section id="Introduction" className="gradient-background min-h-screen">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-center flex-col lg:flex-row-reverse items-center gap-5 py-5">
          <div
            className="lg:w-1/2 flex justify-center profile_photo_container"
          >
            <Image
              className={"profile_photo img-fluid"}
              src="/images/profile_photo.jpeg"
              alt="Rishabh Profile Photo"
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2" style={{ minWidth: '300px' }}>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-3">
              <span className="text-purple-600" style={{ fontFamily: "Pacifico" }}>Welcome</span>...
            </h1>
            <p className="text-lg">
              <span>Hello! I&apos;m</span> <br />
              <span className="font-bold text-6xl" style={{ fontFamily: "Playwrite NG Modern" }}>Rishabh Gokhe</span><br />
              A passionate full stack developer, 3D modeling, and UI design. This website is a showcase of my diverse portfolio, highlighting my expertise and creativity. I&apos;m eager to explore new opportunities and collaborations. Feel free to browse through my work and get in touch to discuss how we can create something amazing together.
            </p>
            <div className="grid gap-2 md:flex md:justify-start mt-4">
              <button
                type="button"
                className="rounded-full border-2 ease-in duration-300 border-rose-500 flex items-center px-2 py-2 hover:bg-neutral-400"
                // onClick={() => aboutMePage()}
              >
                <InformationDiamondIcon className="mt-1" />
                <span className="px-1">About Me</span>
              </button>
              <button
                type="button"
                className="btn btn-outline-dark btn-lg px-4 flex items-center"
                // onClick={() => myProjectPage()}
              >
                <SearchAreaIcon className="mt-1" />
                <span className="px-2">Explore</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroSec;
