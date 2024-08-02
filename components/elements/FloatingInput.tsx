import React from "react";
import { Label } from "../ui/label";

export const FloatingInput = ({ children }: { children: string }) => {
  return (
    <>
      <Label
        htmlFor="name"
        className="absolute rounded-md text-sm text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-neutral-900 px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        {children}
      </Label>
    </>
  );
};
