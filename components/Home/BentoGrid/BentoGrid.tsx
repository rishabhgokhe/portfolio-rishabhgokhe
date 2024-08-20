import React from "react";
import BuyMeACoffeeButton from "@/components/elements/BuyMeACoffeeButton";
import BentoGridDesktop from "./BentoGridDesktop";
import BentoGridMobile from "./BentoGridMobile";

export default function BentoGrid() {
  return (
    <section
      id="bento"
      className="bg-black text-white pb-10 p-5"
    >
      <h1 className="text-center text-5xl font-bold pb-8">
      My Digital Footprint : <span className="text-red-500">Connect & Follow</span>
      </h1>
      {/* <h3 className="text-xl font-semibold mb-6 animate-pulse">
        Social Bento grid is under development...
      </h3> */}

      <div className="hidden md:block">
        <BentoGridDesktop />
      </div>
      <div className="block md:hidden">
        <BentoGridMobile />
      </div>

      <div className="flex justify-center items-center" ><BuyMeACoffeeButton /></div>
    </section>
  );
}
