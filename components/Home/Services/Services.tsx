import React from "react";
import { servicesData } from "@/lib/Data";

export const Services = () => {
  return (
    <section id="services" className="bg-black text-white pb-10">
      <h1 className="text-center text-5xl font-bold mb-12">
        What <span className="text-red-500">i</span> Can Offer You
      </h1>
      <div className="container mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="p-6 text-center border-none md:border-r-2 transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-6xl mb-6">{service.icon}</div>
            <h2 className="text-3xl font-semibold mb-4">{service.title}</h2>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
