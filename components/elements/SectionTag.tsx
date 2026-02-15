import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTagProps {
  label: ReactNode;
  containerClassName?: string;
  badgeClassName?: string;
  emphasisSrc?: string;
  emphasisClassName?: string;
  emphasisWidth?: number;
  emphasisHeight?: number;
}

export default function SectionTag({
  label,
  containerClassName,
  badgeClassName,
  emphasisSrc = "/images/Emphasis Line Right.png",
  emphasisClassName,
  emphasisWidth = 32,
  emphasisHeight = 32,
}: SectionTagProps) {
  return (
    <div className={cn("relative inline-flex", containerClassName)}>
      <span
        className={cn(
          "rounded-md border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-200",
          badgeClassName,
        )}
      >
        {label}
      </span>
      <Image
        src={emphasisSrc}
        alt=""
        width={emphasisWidth}
        height={emphasisHeight}
        aria-hidden="true"
        className={cn("absolute -right-6 -top-3 opacity-90", emphasisClassName)}
      />
    </div>
  );
}
