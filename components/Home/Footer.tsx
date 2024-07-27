import React from "react";
import SocialLinks from "../elements/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-80 text-white py-2">
      <div className="flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-gray-400 text-md">
          &copy; {new Date().getFullYear()} Rishabh Gokhe. All rights reserved.
        </p>
        <SocialLinks className="flex" />
      </div>
    </footer>
  );
};