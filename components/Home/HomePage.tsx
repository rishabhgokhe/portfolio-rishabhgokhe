import React from "react";
import NavBar from "./NavBar";
import IntroSec from "./IntroSec/IntroSec";
import Features from "./Features/Features";
import Projects from "./Projects/Projects";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <IntroSec />
      <Features />
      <Projects />
      <Footer />
    </>
  );
}
