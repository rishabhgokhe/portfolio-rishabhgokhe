import React from "react";
import { CardContent } from "@/components/ui/card";
import { FadeDown } from "animease";
import CustomLinkButton from "@/components/elements/CustomLinkButton";
import SocialLinks from "@/components/elements/SocialLinks";

import TickDouble04Icon from "@/public/svg/icons/TickDouble04Icon";

export default function ThankYou() {
  return (
    <FadeDown variant="div">
      <div className="flex justify-center items-cente max-w-[90vw] md:max-w-[40vw]">
      <CardContent className="text-center p-8">
            <h1 className="text-4xl font-extrabold text-white mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-gray-300 mb-4">
              Your email has been sent successfully.
            </p>
            <div className="flex justify-center mb-4">
              <TickDouble04Icon className="text-green-500" />
            </div>
            <p className="text-md text-gray-400 mb-3">
              We appreciate your time and will get back to you soon.
            </p>
            <p className="text-md flex-wrap max-w-2/3 text-gray-400 mb-3">
              In the meantime, feel free to check out our latest projects or get in touch on social media.
            </p>
            <SocialLinks className="flex justify-center mb-4" />
            <p className="text-sm text-gray-400 mb-1">
              Best regards,
            </p>
            <p className="text-sm text-gray-400 mb-5">
              <span className="text-white">Rishabh Gokhe</span>
            </p>
            <div className="flex justify-center">
              <CustomLinkButton href="#projects">
                View Projects
              </CustomLinkButton>
            </div>
          </CardContent>
      </div>
    </FadeDown>
  );
}
