"use client";

import React, { useEffect } from "react";
import NavBar from "./NavBar";
import IntroSec from "./IntroSec/IntroSec";
import Features from "./Features/Features";
import Projects from "./Projects/Projects";
import Footer from "./Footer";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import BentoGrid from "./BentoGrid/BentoGrid";
import LocomotiveScroll from "locomotive-scroll";
import { ToolTipIcon } from "../elements/ToolTipIcon";
import "locomotive-scroll/dist/locomotive-scroll.css";
import LandingIntro from "./LandingIntro";
import SVGDivider from "../elements/SVGDivider";

export default function HomePage() {
  // useEffect(() => {
  //   const el = document.querySelector("#root");

  //   if (el instanceof HTMLElement) {
  //     const scroll = new LocomotiveScroll({
  //       el: el,
  //       smooth: true,
  //     });

  //     return () => {
  //       if (scroll) scroll.destroy();
  //     };
  //   }
  // }, []);

  return (
    <div id="root">
      <LandingIntro />
      <NavBar />
      <div id="main" data-scroll-container>
        <IntroSec />
        <SVGDivider />
        <Features />
        <Projects />
        <About />
        <Contact />
        <Services />
        <BentoGrid />
        <p className="bg-black text-center text-white py-4 shadow-inner">
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
        </p>
      </div>
      <Footer />
    </div>
  );
}
