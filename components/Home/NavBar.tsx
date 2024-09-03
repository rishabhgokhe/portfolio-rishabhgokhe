"use client";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/lib/Data";
import { motion } from "framer-motion";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SocialLinks from "../elements/SocialLinks";

const NavBar = () => {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "short" });
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const currentDate = date.getDate();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(()=>{
    gsap.from('.navlinks', {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 4,
      ease: "power2.inOut",
      stagger: 0.2
    });
  })

  return (
    <nav
      id="nav-bar"
      className={`transition-colors duration-300 text-white ${
        scrolled
          ? "bg-black/50 backdrop-blur-lg backdrop-saturate-150 border border-white/20 rounded-lg m-[0.5vh]"
          : "bg-black"
      }`}
    >
      <div className="container mx-auto py-2 flex items-center justify-between">
        {/* Nav-icons */}
        <SocialLinks className="hidden md:flex" />

        {/* Nav-links */}
        <div className="flex gap-2 md:gap-4 items-center m-1 md:m-0">
          {navLinks.map((item, id) => (
            <motion.li
              key={id}
              className="navlinks list-none"
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
