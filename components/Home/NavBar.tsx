"use client";
import React from "react";
import { navIcons, navLinks } from "@/lib/Data";
import { ToolTipIcon } from "../elements/ToolTipIcon";
import { motion } from "framer-motion";
import SocialLinks from "../elements/SocialLinks";

const NavBar = () => {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "short" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const currentDate = date.getDate();

  return (
    <nav
      id="nav-bar"
      className="bg-black bg-opacity-60 backdrop-blur-md text-white border-b-2 border-gray-700"
    >
      <div className="container mx-auto py-2 flex items-center justify-between">
        {/* Nav-icons */}
        <SocialLinks className="hidden md:flex" />

        {/* Nav-links */}
        <div className="flex gap-2 md:gap-4 items-center">
          {navLinks.map((item, id) => (
            <motion.li
              key={id}
              className="list-none"
              whileHover={{ scale: 1.1, color: "#d1d5db", y: -1 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={item.link}
                className="text-white hover:text-yellow-300 transition-colors duration-300 py-1 px-3 rounded-md"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </div>

        <div className="hidden md:block">
          <p className="text-lg font-semibold">{`${day}, ${month} ${currentDate}`}</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
