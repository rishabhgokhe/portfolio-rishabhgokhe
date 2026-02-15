"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Lottie from "lottie-react";
import { GridBackground } from "@/components/ui/grid-background";
import { MorphingText } from "@/components/ui/morphing-text";
import animationData from "@/public/svg/animated/Octahedron_Cube_Morph.json";

const LandingIntro = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadDuration = 3200;
    const tickMs = 24;
    const totalTicks = loadDuration / tickMs;
    let currentTick = 0;
    let exitTriggerTimer: ReturnType<typeof setTimeout>;

    const progressTimer = setInterval(() => {
      currentTick += 1;
      const nextValue = Math.min(
        100,
        Math.round((currentTick / totalTicks) * 100)
      );
      setProgress(nextValue);
      if (nextValue >= 100) clearInterval(progressTimer);
    }, tickMs);

    const timer = setTimeout(() => {
      setProgress(100);
      exitTriggerTimer = setTimeout(() => setIsExiting(true), 300);
    }, loadDuration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(timer);
      if (exitTriggerTimer) clearTimeout(exitTriggerTimer);
    };
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(
          ".status-line",
          {
            y: 18,
            opacity: 0,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.3"
        )
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (!isExiting || !containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.to(".intro-panel", {
      y: -24,
      scale: 0.98,
      opacity: 0,
      filter: "blur(8px)",
      duration: 0.55,
    }).to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.4,
        onComplete: () => setShouldRender(false),
      },
      "-=0.18"
    );

    return () => {
      tl.kill();
    };
  }, [isExiting]);

  const texts = useMemo(
    () => ["INITIALSING..", "OPTIMISING..", "DEPLOYING.."],
    []
  );

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      id="loader"
      className="fixed inset-0 z-[9999] flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#05070a] text-[#dfffe2]"
    >
      <GridBackground color="#16b981" />

      <div className="intro-panel relative z-10 flex w-[92%] max-w-2xl flex-col gap-4 p-5 md:p-7">
        <div className="status-line intro-tag flex items-center justify-between font-mono text-xs uppercase tracking-[0.22em] text-[#8ef2b0] md:text-sm">
          <span>{"> root@rishabh:~$ launch"}</span>
        </div>

        <div className="status-line flex items-center justify-center">
          <Lottie
            animationData={animationData}
            loop={true}
            className="h-32 w-32 md:h-44 md:w-44"
          />
        </div>

        <div className="status-line mx-auto w-full max-w-xs md:max-w-sm">
          <div className="h-2 w-full overflow-hidden rounded-full bg-[#103220]">
            <div
              className="h-full bg-gradient-to-r from-[#1fa84d] via-[#7fff9a] to-[#c3ffd0] transition-[width] duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-[#7de89f] md:text-xs">
            <span>0%</span>
            <span>{`${String(progress).padStart(2, "0")}%`}</span>
            <span>100%</span>
          </div>
        </div>

        <div>
          <MorphingText
            texts={texts}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingIntro;
