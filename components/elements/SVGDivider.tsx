import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export default function SVGDivider() {
  const final = `M 10 80 Q 980 80 980 80`;
  useGSAP(() => {
    const svgElement = document.querySelector("#svgDivider");

    if (svgElement) {
      svgElement.addEventListener("mousemove", (e: MouseEventInit) => {
        console.log(e);

        const path = `M 10 80 Q ${e.clientX} ${e.clientY} 980 80`;
        gsap.to(svgElement.querySelector("path"), {
          attr: { d: path },
          ease: "power3.out",
          duration: 0.3,
        });
      });

      svgElement.addEventListener("mouseleave", () => {
        gsap.to(svgElement.querySelector("path"), {
          attr: { d: final },
          ease: "elastic.out(1,0.2)",
          duration: 1,
        });
      });
    }
  });

  return (
    <div
      id="divider"
      className="bg-green flex justify-center items-center hidden sm:block"
    >
      <svg id="svgDivider" width="1000" height="180" className="mx-auto">
        <path d={`${final}`} stroke="white" fill="transparent" />
      </svg>
    </div>
  );
}
