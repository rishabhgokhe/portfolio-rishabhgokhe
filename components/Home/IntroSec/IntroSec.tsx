"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Playfair_Display } from "next/font/google";
import { GridBackground } from "@/components/ui/grid-background";
import { navIcons } from "@/lib/Data";
import SectionTag from "@/components/elements/SectionTag";
// import profilePhoto from "@/public/images/profile_photo.jpeg";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

function IntroSec() {
  const birthYear = 2004;
  const birthMonthIndex = 6;
  const birthDay = 25;
  const now = new Date();
  const birthdayThisYear = new Date(
    now.getFullYear(),
    birthMonthIndex,
    birthDay,
  );
  const hasHadBirthdayThisYear = now >= birthdayThisYear;
  const age = now.getFullYear() - birthYear - (hasHadBirthdayThisYear ? 0 : 1);
  const socialLinks = navIcons.filter((item) =>
    ["Github", "Linkedin", "LeetCode", "Mail Us"].includes(item.name),
  );
  const [nagpurTemp, setNagpurTemp] = useState<number | null>(null);
  const [tempStatus, setTempStatus] = useState<"idle" | "loading" | "error">(
    "idle",
  );

  useEffect(() => {
    const controller = new AbortController();
    const loadTemp = async () => {
      try {
        setTempStatus("loading");
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=21.1458&longitude=79.0882&current=temperature_2m&temperature_unit=celsius",
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("weather_fetch_failed");
        const data = await response.json();
        const temp = data?.current?.temperature_2m;
        if (typeof temp === "number") {
          setNagpurTemp(temp);
          setTempStatus("idle");
        } else {
          setTempStatus("error");
        }
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        setTempStatus("error");
      }
    };

    loadTemp();
    return () => controller.abort();
  }, []);

  return (
    <section
      id="introSec"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black sm:px-6"
    >
      <GridBackground color="#16b981" />

      <div className="pointer-events-none absolute inset-x-0 top-[3vh] z-10 flex flex-col items-center text-center">
        <SectionTag
          label="Hello!👋🏼"
          badgeClassName="rounded-full border-emerald-400/45 bg-emerald-400/10 text-emerald-100 backdrop-blur-sm"
        />
        <h1
          className={`${playfairDisplay.className} text-[2rem] leading-none font-extrabold tracking-tight text-zinc-100/90 sm:text-[3.2rem] md:text-[5.2rem]`}
        >
          I&apos;m Rishabh
        </h1>
        <div className="relative inline-flex">
          <h2
            className={`${playfairDisplay.className} mt-1 text-[2.5rem] leading-none font-bold tracking-tight text-emerald-300/85 sm:text-[4rem] md:text-[6rem]`}
          >
            Software Engineer
          </h2>
          <Image
            src="/images/Emphasis Line Left.png"
            alt=""
            width={62}
            height={62}
            aria-hidden="true"
            className="absolute -bottom-8 -left-10 opacity-90 hidden sm:block"
          />
        </div>
        <div className="mt-2 h-2 w-64 rounded-full bg-emerald-400/30 blur-md md:w-96" />
      </div>

      <div className="pointer-events-none absolute left-4 right-4 top-[42vh] z-30 flex flex-col gap-3 sm:left-8 sm:right-8 md:right-auto md:top-[34vh] md:w-[360px] md:left-[4vw]">
        <div className="rounded-xl border border-emerald-500/25 bg-black/35 p-4 text-left">
          <p className="font-mono text-[12px] leading-relaxed text-zinc-300 md:text-sm">
            <span className="text-emerald-300">{">_ "}</span>
            Full-Stack Developer building scalable apps with React, Next.js,
            Node.js, and MongoDB. Strong in problem-solving, DSA, and clean,
            secure architecture.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-emerald-500/25 bg-black/35 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
              Age
            </p>
            <p className="mt-1 font-mono text-sm text-zinc-100">{age}</p>
          </div>
          <div className="rounded-lg border border-emerald-500/25 bg-black/35 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
              City
            </p>
            <div className="mt-1 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 font-mono text-sm text-zinc-100">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-emerald-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 22s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11z"
                  />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                <span>Nagpur</span>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-300/80">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 text-emerald-300/80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 14.8V5a2 2 0 1 0-4 0v9.8a4 4 0 1 0 4 0z"
                  />
                </svg>
                {tempStatus === "loading" && <span>Fetching</span>}
                {tempStatus === "error" && <span>Temp N/A</span>}
                {tempStatus === "idle" && nagpurTemp !== null
                  ? `${Math.round(nagpurTemp)}°C`
                  : ""}
              </div>
            </div>
          </div>
          <div className="col-span-2 rounded-lg border border-emerald-500/25 bg-black/35 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
              Current Status
            </p>
            <p className="mt-1 font-mono text-sm text-zinc-100">
              Student at YCCE, Nagpur
            </p>
          </div>
          <div className="col-span-2 rounded-lg border border-emerald-500/25 bg-black/35 p-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
              Mission
            </p>
            <p className="mt-1 font-mono text-sm text-zinc-100">
              Write clean code. Ship real products.
            </p>
          </div>
        </div>

      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-center">
        {/* for mobile phones */}
        {/* <div className="relative h-[70vh] right-8 w-[100vw] scale-150 sm:hidden">
          <div className="absolute bottom-6 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-emerald-400/25 blur-3xl" />
          <Image
            src={profilePhoto}
            alt="Rishabh Gokhe"
            priority
            fill
            className="object-contain drop-shadow-[0_28px_60px_rgba(16,185,129,0.36)]"
          />
        </div> */}

        {/* for desktop */}
        {/* <div className="relative hidden w-[50vw] md:w-[48vw] sm:block">
          <div className="absolute bottom-6 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl md:h-52 md:w-96" />
          <Image
            src={profilePhoto}
            alt="Rishabh Gokhe"
            priority
            className="relative w-full object-contain drop-shadow-[0_28px_60px_rgba(16,185,129,0.36)]"
          />
        </div> */}
      </div>

      <div className="pointer-events-none absolute bottom-6 left-4 right-4 z-30 flex flex-col items-start gap-2 sm:left-8 sm:right-8 md:left-auto md:right-20 md:bottom-20 md:items-center">
        <div className="pointer-events-auto flex items-center gap-2">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              className="rounded-lg border border-emerald-500/25 bg-black/50 p-2 text-emerald-300 backdrop-blur-[2px] transition hover:border-emerald-300/50 hover:text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="pointer-events-auto mt-2 w-full md:w-auto">
          <a
            href="/downloads/rishabh_resume.pdf"
            download
            className="inline-flex w-full md:w-auto"
          >
            <InteractiveHoverButton className="w-full justify-center border-emerald-400/40 bg-black/40 px-4 py-2 text-sm font-mono text-emerald-100 backdrop-blur-sm md:w-auto">
              <span className="inline-flex items-center gap-2">
                Resume
              </span>
            </InteractiveHoverButton>
          </a>
        </div>
      </div>

      {/* bottom black gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] h-36 bg-gradient-to-t from-black/100 via-black/50 to-transparent sm:h-44" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[25] h-20 bg-black/50 blur-2xl" />

    </section>
  );
}

export default IntroSec;
