"use client";

import React from "react";
import IntroSec from "./IntroSec/IntroSec";
import TechStack from "./TechStack/TechStack";
import ContributionHeatmap from "./ContributionGraph/ContributionHeatmap";
import Projects from "./Projects/Projects";
import Footer from "./Footer";
import Services from "./Services/Services";
import LandingIntro from "./LandingIntro";
import FloatingAIBotButton from "../elements/FloatingAIBotButton";
import Achievements from "./Achievements/Achievements";
// import BackgroundAudio from "@/components/elements/BackgroundAudio";
import ConnectTerminalSection from "@/components/Home/ConnectTerminalSection/ConnectTerminalSection";
import { AIBotProvider } from "@/components/elements/AIBotContext";

export default function HomePage() {
  return (
    <AIBotProvider>
      <div id="root">
        <LandingIntro />
        <div id="main" data-scroll-container>
          <IntroSec />
          <TechStack />
          <ContributionHeatmap />
          <Services />
          <Projects />
          <Achievements />
          <ConnectTerminalSection />
        </div>
        <Footer />
        <FloatingAIBotButton />
        {/* <BackgroundAudio /> */}
      </div>
    </AIBotProvider>
  );
}
