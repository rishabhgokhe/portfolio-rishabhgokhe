"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState, useEffect } from "react";

export const LandingIntro = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  const tl = gsap.timeline();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);

      setTimeout(() => setShouldRender(false), 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (isVisible) {
      tl.from("h1 span", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
      });
    }
  }, [isVisible]);

  if (!shouldRender) return null;

  function splitText(text: string) {
    return text.split("").map((char, id) => (
      <span key={id} className="text inline-block">
        {char}
      </span>
    ));
  }

  return (
    <div
      id="loader"
      className={`z-999 h-[100vh] w-[100vw] text-white text-5xl bg-yellow-500 space-y-3 flex flex-col items-center justify-center transition-transform duration-1000 ${
        !isVisible ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h1 className="flex">{splitText("Code")}</h1>
      <h1 className="flex">{splitText("Design")}</h1>
      <h1 className="flex">{splitText("Innovate")}</h1>
    </div>
  );
};

export default LandingIntro;
