"use client";
import React from "react";
import { ToolTipIcon } from "./ToolTipIcon";
import { Button } from "../ui/button";
import BuyMeACoffeeBrandLogo from "@/public/svg/icons/BuyMeACoffeeBrandLogo";

export const BuyMeCoffeeText = [
  "Support Me ☕️",
  "Fuel My Day 💪",
  "Recharge Me ☕️",
  "Boost My Energy 🚀",
  "Coffee Break! ☕️",
];

const BuyMeACoffeeButton = () => {
  return (
    <ToolTipIcon
      name={BuyMeCoffeeText[Math.floor(Math.random() * BuyMeCoffeeText.length)]}
      triggerJsxElement={
        <Button
          size={"sm"}
          className="bg-neutral-900 mt-4 gap-1 shadow-lg dark:hover:bg-gradient-to-r from-[#281D24] to-[#281D24]"
          variant={"outline"}
          onClick={() =>
            window.open("https://buymeacoffee.com/rishabhgokhe", "_blank")
          }
        >
          <BuyMeACoffeeBrandLogo />
        </Button>
      }
    />
  );
};

export default BuyMeACoffeeButton;
