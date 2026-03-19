"use client";

import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/public/svg/animated/Waves.json";

export default function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const lottieRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
    };
    window.addEventListener("pointerdown", handleFirstInteraction, {
      once: true,
    });
    return () => window.removeEventListener("pointerdown", handleFirstInteraction);
  }, []);

  useEffect(() => {
    if (!hasInteracted || !audioRef.current) return;
    audioRef.current
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));
  }, [hasInteracted]);

  useEffect(() => {
    if (!lottieRef.current) return;
    if (isPlaying) {
      lottieRef.current.play?.();
    } else {
      lottieRef.current.stop?.();
    }
  }, [isPlaying]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/bg.mp3" loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        className="fixed bottom-6 right-6 z-[150]"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
        aria-pressed={isPlaying}
      >
        <div className="flex h-14 w-14 items-center justify-center">
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop={true}
            autoplay={false}
          />
        </div>
      </button>
    </>
  );
}
