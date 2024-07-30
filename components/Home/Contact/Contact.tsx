import SocialLinks from "@/components/elements/SocialLinks";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white pb-10">
      <h1 className="text-center text-5xl font-bold pb-8">
        Contact <span className="text-red-500">Me</span>
      </h1>
      <p className="text-center font-semibold mb-4">
          Mail me at:{" "}
          <a href="mailto:rishabhgokhe20contact@gmail.com" className="text-yellow-500 underline underline-offset-2 font-normal">
            rishabhgokhe20contact@gmail.com
          </a>
        </p>
      <SocialLinks className="flex justify-center" />
    </section>
  );
}
