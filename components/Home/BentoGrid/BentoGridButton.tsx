import React from "react";

export const BentoGridButton = ({
  href,
  title,
}: {
  href: string;
  title: string;
}) => {
  return (
    <button>
      <a
        href={href}
        className="border rounded-sm px-1.5 py-1 border-neutral-800 text-sm text-muted-foreground hover:text-purple-200 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Call Now"
      >
        {title}
      </a>
    </button>
  );
};
