import React from "react";
import BentoCard from "./BentoCard";
import { socialBentoGridData } from "@/lib/Data";
import DigitalNomad from "@/public/svg/icons/DigitalNomad";
import BuyMeACoffeeButton from "@/components/elements/BuyMeACoffeeButton";

export default function BentoGridMobile() {
  return (
    <div className="bg-black text-white text-center pb-2 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-4 justify-center items-center">
        <div className="col-span-3 hidden md:block justify-center items-center">
          <DigitalNomad />
        </div>
        <div className="col-span-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-5">
          {socialBentoGridData.map((item, id) => (
            <BentoCard
              key={id}
              title={item.title}
              icon={item.icon}
              description={item.description}
              cardTrigger={item.cardTrigger}
              span={1}
              link={item.link}
            />
          ))}
        </div>
      </div>

    </div>
  );
}