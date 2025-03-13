"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import "./CustomCursor.css";
import { useGSAP } from "@gsap/react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const handleMouseMove = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.7,
        ease: "elastic.out",
      });
    };

    const handleMouseEnter = (e) => {
      const linkText = e.target.getAttribute("data-cursor-text");
      if (linkText) {
        textRef.current.innerText = linkText;
        gsap.to(cursorRef.current, {
          scale: 2,
          duration: 0.2,
          backgroundColor: "#000",
          color: "#fff",
        });
      }
    };

    const handleMouseLeave = () => {
      textRef.current.innerText = "";
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.2,
        backgroundColor: "#fff",
        color: "#000",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <span ref={textRef}></span>
    </div>
  );
};

export default CustomCursor;