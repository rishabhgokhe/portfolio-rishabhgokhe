import { navIcons } from "@/lib/Data";
import React from "react";
import { ToolTipIcon } from "./ToolTipIcon";

export default function SocialLinks({ className }: { className?: string }) {
  return (
      <ul className={`space-x-1 items-center ${className}`}>
        {navIcons.map((item, index) => (
          <ToolTipIcon
            key={index}
            name={item.name}
            triggerJsxElement={
              <li>
                <a
                  href={item.link}
                  className="text-white hover:text-gray-300 transition-colors duration-300 flex items-center p-2 rounded-md hover:shadow-lg"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              </li>
            }
          />
        ))}
      </ul>
  );
}
