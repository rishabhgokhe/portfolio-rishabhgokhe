import React from "react";
import { FeaturesData, FeaturesQuote } from "@/lib/Data";
import CustomLinkButton from "@/components/elements/CustomLinkButton";
import { ToolTipIcon } from "@/components/elements/ToolTipIcon";

import ArrowRight01Icon from "@/public/svg/icons/ArrowRight01Icon";
import DocumentAttachmentIcon from "@/public/svg/icons/DocumentAttachmentIcon";

export default function Features() {
  return (
    <section id="features" className="bg-black text-white py-12">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-12">
        Area of Expertise
      </h1>

      <div className="flex flex-col gap-4 max-w-6xl mx-auto px-4 mb-12 text-center">
        <h2 className="font-bold text-xl md:text-3xl text-purple-400">
          {FeaturesQuote.title}
        </h2>
        <p className="text-md md:text-lg text-neutral-300">
          {FeaturesQuote.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {FeaturesData.map((item, id) => (
          <div
            key={id}
            className="bg-neutral-900 hover:bg-neutral-800 transition duration-300 h-auto w-full rounded-3xl p-6 shadow-lg transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4 text-purple-400">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base text-neutral-300 mb-4">
                {item.description}
              </p>
              <ToolTipIcon
                name={item.link}
                triggerJsxElement={
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex items-center text-blue-400 hover:text-blue-300 underline underline-offset-4"
                  >
                    Learn More
                    <ArrowRight01Icon className="ml-2" />
                  </a>
                }
              ></ToolTipIcon>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8">
        <CustomLinkButton
          download
          href={"/downloads/PortFolioRishabh.pdf"}
          leftIcon={<DocumentAttachmentIcon />}
        >
          Download Resume
        </CustomLinkButton>
      </div>
    </section>
  );
}
