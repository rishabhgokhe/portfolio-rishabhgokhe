import React from "react";
import NavBar from "./NavBar";
import IntroSec from "./IntroSec/IntroSec";
import Features from "./Features/Features";
import Projects from "./Projects/Projects";
import Footer from "./Footer";
import About from "./About/About";
import Contact from "./Contact/Contact";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <IntroSec />
      <Features />
      <Projects />
      <About />
      <Contact />
      <p className="bg-black text-center text-white pb-3">All animations are used from <a className="rounded-md bg-neutral-600 pr-1 pl-1 hover:text-green-500 transition ease-in-out duration-500" href={"https://www.npmjs.com/package/animease"}>animease</a> npm package</p>
      <Footer />
    </>
  );
}
