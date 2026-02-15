"use client";

import React from "react";
import NavBar from "./NavBar";
import IntroSec from "./IntroSec/IntroSec";
import Features from "./Features/Features";
import Projects from "./Projects/Projects";
import Footer from "./Footer";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import BentoGrid from "./BentoGrid/BentoGrid";
import LandingIntro from "./LandingIntro";
import SVGDivider from "../elements/SVGDivider";
import Divider from "./../elements/Divider";

export default function HomePage() {

  return (
    <div id="root">
      <LandingIntro />
      <NavBar />
      <div id="main" data-scroll-container>
        <IntroSec />
        <SVGDivider />
        <Features />

        <div className="m-5 bg-white">
          <Divider text="PROJECTS' 25" />
        </div>
        <Projects />

        <About />
        <Contact />
        <Services />
        <BentoGrid />
        {/* <p className="bg-black text-center text-white py-4 shadow-inner">
          All animations are used from{" "}
          <ToolTipIcon
            name="https://www.npmjs.com/package/animease"
            triggerJsxElement={
              <a
                className="rounded-lg bg-gray-800 px-2 py-1 text-white hover:text-yellow-400 hover:bg-gray-700 transition duration-500 ease-in-out transform hover:scale-105 shadow-md"
                href={"https://www.npmjs.com/package/animease"}
              >
                animease
              </a>
            }
          />{" "}
          npm package
        </p> */}
        <p className="bg-black text-center text-white py-4 shadow-inner underline underline-offset-2">
          New portfolio website design launching soon...
        </p>
      </div>
      <Footer />
    </div>
  );
}
