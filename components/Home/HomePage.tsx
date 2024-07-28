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
      <Footer />
    </>
  );
}
