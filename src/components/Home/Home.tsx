import React from "react";
import IntroSec from "../Home/IntroSec.tsx";
import Features from "../Features/Features.tsx";
import Project from "../Projects/Project.tsx";

const LandingPage: React.FC = () => {
  return (
    <>
      <IntroSec />
      <Features />
      <Project />
    </>
  );
};

export default LandingPage;
