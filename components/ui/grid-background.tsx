"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  color?: string;
  className?: string;
}

const withAlpha = (color: string, alpha: number) => {
  const hex = color.replace("#", "").trim();

  if (/^[\da-fA-F]{3}$/.test(hex)) {
    const [r, g, b] = hex.split("").map((char) => parseInt(char + char, 16));
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  if (/^[\da-fA-F]{6}$/.test(hex)) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `color-mix(in srgb, ${color} ${Math.round(alpha * 100)}%, transparent)`;
};

export const GridBackground: React.FC<GridBackgroundProps> = ({
  color = "#16a34a",
  className,
}) => (
  <div className={cn("absolute inset-0 pointer-events-none", className)}>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle at top, ${withAlpha(
          color,
          0.18
        )}, transparent 52%), linear-gradient(180deg, #020304 0%, #060a0f 65%, #020304 100%)`,
      }}
    />
    <div
      className="absolute inset-0 bg-[size:42px_42px]"
      style={{
        opacity: 0.3,
        backgroundImage: `linear-gradient(${withAlpha(
          color,
          0.15
        )} 1px, transparent 1px), linear-gradient(90deg, ${withAlpha(
          color,
          0.15
        )} 1px, transparent 1px)`,
      }}
    />
  </div>
);
