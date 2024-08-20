"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function BentoCard({
  title,
  icon,
  description,
  cardTrigger,
  span,
  link,
  className,
}: {
  title: string;
  icon: JSX.Element;
  description: string;
  cardTrigger: JSX.Element;
  span: number;
  link: string;
  className?: string;
}) {

  const handleClick = () => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.98 }}
      whileTap={{ scale: 0.97 }}
      className={`col-span-${span} ${className} flex flex-col`}
      onClick={handleClick}
    >
      <Card className="bg-black cursor-pointer hover:bg-neutral-900 hover:shadow-none border-gray-800 shadow-lg shadow-orange-900/50 flex-1">
        <CardContent className="text-left space-y-2 flex items-start flex-col h-full">
          <div className="flex justify-start pt-5">{icon}</div>
          <h3 className="text-white text-xl font-bold">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
          {cardTrigger}
        </CardContent>
      </Card>
    </motion.div>
  );
}
