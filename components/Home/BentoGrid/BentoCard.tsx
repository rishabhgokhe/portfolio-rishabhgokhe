"use client";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion";

export default function BentoCard({
  title,
  description,
  link,
  span,
  className
}: {
  title: string;
  description: string;
  link: string;
  span: number;
  className?: string;
}) {
  return (
    <motion.div initial={{ scale: 1 }} whileHover={{ scale: 0.99 }}>
      <Card
        className={` ${className} bg-black col-span-${span} hover:bg-neutral-900 border-gray-800 transition ease-out duration-300`}
      >
        <CardContent>
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
          <a href="#" className="text-white text-sm hover:text-gray-300">
            {link}
          </a>
        </CardContent>
      </Card>
    </motion.div>
  );
}
