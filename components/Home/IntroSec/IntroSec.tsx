"use client";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { introPara, navLinks } from "@/lib/Data";
import { FadeDown, FadeRight } from "animease";
import CustomLinkButton from "@/components/elements/CustomLinkButton";

import ContractsIcon from "@/public/svg/icons/ContractsIcon";
import DocumentAttachmentIcon from "@/public/svg/icons/DocumentAttachmentIcon";

function IntroSec() {
  return (
    <section
      id="introSec"
      className="bg-black min-h-screen flex flex-col justify-center items-center py-10"
    >
      <FadeDown variant="div" className="text-center mb-8">
        <h1 className="text-5xl font-bold leading-tight text-purple-600 welcome-text">
          Welcome...
        </h1>
      </FadeDown>
      <VelocityScroll
        className="text-[6rem] md:text-[8rem] font-bold montserrat text-slate-500"
        text="Rishabh Gokhe"
      />
      <FadeDown variant="div" delay={0.5} className="relative flex flex-col items-center mb-8">
        <p className="text-md md:text-xl max-w-[90vw] md:max-w-[60vw] text-center text-white">
          {introPara}
        </p>
      </FadeDown>
      <FadeRight variant="div" delay={0.7} className="flex justify-center items-center space-x-4">
        <CustomLinkButton
          download
          href={"/downloads/PortFolioRishabh.pdf"}
          leftIcon={<DocumentAttachmentIcon />}
        >
          Download Resume
        </CustomLinkButton>
        <CustomLinkButton href={navLinks[3].link} leftIcon={<ContractsIcon />}>
          Contact me
        </CustomLinkButton>
      </FadeRight>
    </section>
  );
}

export default IntroSec;
