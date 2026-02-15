"use client";

import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import CustomLinkButton from "@/components/elements/CustomLinkButton";
import { GridBackground } from "@/components/ui/grid-background";
import { navIcons } from "@/lib/Data";
import DocumentAttachmentIcon from "@/public/svg/icons/DocumentAttachmentIcon";
import profilePhoto from "@/public/images/profile_photo.jpeg";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

function IntroSec() {
  const birthYear = 2004;
  const birthMonthIndex = 6;
  const birthDay = 25;
  const now = new Date();
  const birthdayThisYear = new Date(now.getFullYear(), birthMonthIndex, birthDay);
  const hasHadBirthdayThisYear = now >= birthdayThisYear;
  const age = now.getFullYear() - birthYear - (hasHadBirthdayThisYear ? 0 : 1);
  const socialLinks = navIcons.filter((item) =>
    ["Github", "Linkedin", "LeetCode", "Mail Us"].includes(item.name)
  );

  return (
    <section
      id="introSec"
      className="relative flex min-h-[165vh] items-center justify-center overflow-hidden bg-black md:min-h-screen sm:px-6"
    >
      <GridBackground color="#16b981" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-7">
        {/* <FadeDown
          variant="div"
          delay={0.2}
          className="w-fit rounded-full border border-emerald-500/35 bg-emerald-500/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-300 md:text-xs"
        >
          Open to Collaborations
        </FadeDown> */}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[5vh] z-10 flex flex-col items-center text-center">
        <h1
          className={`${playfairDisplay.className} text-[2rem] leading-none font-extrabold tracking-tight text-zinc-100/90 sm:text-[3.2rem] md:text-[5.2rem]`}
        >
          Hi!👋🏼 I&apos;m Rishabh
        </h1>
        <h2
          className={`${playfairDisplay.className} mt-1 text-[2.5rem] leading-none font-bold tracking-tight text-emerald-300/85 sm:text-[4rem] md:text-[6rem]`}
        >
          Software Engineer
        </h2>
        <div className="mt-2 h-2 w-64 rounded-full bg-emerald-400/30 blur-md md:w-96" />
      </div>

      <div
        className="absolute left-4 right-4 top-[102vh] z-20 rounded-xl border border-emerald-500/25 bg-black/35 p-4 text-left sm:left-8 sm:right-8 md:right-auto md:top-[34vh] md:max-w-[360px] md:left-[4vw]"
      >
        <p className="font-mono text-[11px] leading-relaxed text-zinc-300 md:text-xs">
          <span className="text-emerald-300">{">_ "}</span>
          Full-stack engineer shipping fast, scalable apps with React, Next.js,
          Node.js, and MongoDB. I build clean systems, solve hard problems, and
          actively explore Blockchain + LLM workflows.
        </p>
      </div>

      <div
        className="absolute left-4 right-4 top-[124vh] z-20 grid grid-cols-2 gap-2 sm:left-8 sm:right-8 md:right-auto md:top-[49vh] md:w-[360px] md:left-[4vw]"
      >
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
          <p className="mt-1 font-mono text-sm text-zinc-100">Nagpur</p>
        </div>
        <div className="rounded-lg border col-span-2 border-emerald-500/25 bg-black/35 p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
            Current Status
          </p>
          <p className="mt-1 font-mono text-sm text-zinc-100">
            Student at YCCE, Nagpur
          </p>
        </div>
        <div className="rounded-lg border col-span-2 border-emerald-500/25 bg-black/35 p-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300">
            Mission
          </p>
          <p className="mt-1 font-mono text-sm text-zinc-100">Write clean code. Ship real products.</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-center">
        <div className="relative h-[70vh] right-8 w-[100vw] scale-150 sm:hidden">
          <div className="absolute bottom-6 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-emerald-400/25 blur-3xl" />
          <Image
            src={profilePhoto}
            alt="Rishabh Gokhe"
            priority
            fill
            className="object-contain drop-shadow-[0_28px_60px_rgba(16,185,129,0.36)]"
          />
        </div>

        <div className="relative hidden w-[50vw] md:w-[50vw] sm:block">
          <div className="absolute bottom-6 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl md:h-52 md:w-96" />
          <Image
            src={profilePhoto}
            alt="Rishabh Gokhe"
            priority
            className="relative w-full object-contain drop-shadow-[0_28px_60px_rgba(16,185,129,0.36)]"
          />
        </div>
      </div>

      <div className="absolute left-4 right-4 top-[152vh] z-30 flex flex-col items-start gap-2 sm:left-8 sm:right-8 md:left-auto md:right-20 md:top-auto md:bottom-20 md:items-center">
        <div className="flex items-center gap-2">
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
        <div className="mt-2 w-full md:w-auto">
          <CustomLinkButton
            download
            href="/downloads/PortFolioRishabh.pdf"
            leftIcon={<DocumentAttachmentIcon />}
            className="w-full justify-center px-4 py-2 text-sm md:w-auto"
          >
            Resume
          </CustomLinkButton>
        </div>
      </div>
    </section>
  );
}

export default IntroSec;
