import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import CustomLinkButton from "@/components/elements/CustomLinkButton";

import ContractsIcon from "@/public/svg/icons/ContractsIcon";
import InformationCircleIcon from "@/public/svg/icons/InformationCircleIcon";

function IntroSec() {
  return (
    <section
      id="introSec"
      className="bg-black min-h-screen flex flex-col justify-center items-center py-10"
    >
      <div className="text-center mb-8">
        <h1
          className="text-5xl font-bold leading-tight text-purple-600"
          style={{ fontFamily: "Pacifico" }}
        >
          Welcome...
        </h1>
      </div>
      <VelocityScroll
        className="text-[6rem] md:text-[8rem] font-bold montserrat text-slate-500"
        text="Rishabh Gokhe"
      />
      <div className="relative flex flex-col items-center mb-8">
        <p className="text-md md:text-xl max-w-[90vw] md:max-w-[60vw] text-center text-white">
          A passionate full stack developer, 3D modeling, and UI design. This
          website is a showcase of my diverse portfolio, highlighting my
          expertise and creativity. I&apos;m eager to explore new opportunities
          and collaborations. Feel free to browse through my work and get in
          touch to discuss how we can create something amazing together.
        </p>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <CustomLinkButton leftIcon={<InformationCircleIcon />}>
          About me
        </CustomLinkButton>
        <CustomLinkButton leftIcon={<ContractsIcon />}>
          Contact me
        </CustomLinkButton>
      </div>
    </section>
  );
}

export default IntroSec;
