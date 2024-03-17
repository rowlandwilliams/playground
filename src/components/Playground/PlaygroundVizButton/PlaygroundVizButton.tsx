"use client";

import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  tooltipContent?: ReactNode;
  label?: string;
}

export const PlaygroundVizButton = ({
  children,
  tooltipContent = undefined,
  label = undefined,
}: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative max-w-max">
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="h-7 w-7 text-xs p-1 hover:bg-gray-50 dark:hover:bg-zinc-600 rounded-sm gap-x-2 flex items-center justify-center dark:text-zinc-300"
      >
        {children}
        {label}
      </button>
      {hovered && tooltipContent && (
        <div className="absolute shadow-lg z-50 top-full right-0 translate-y-2 pointer-events-none rounded-sm p-2 bg-gray-50 dark:bg-zinc-900">
          {tooltipContent}
        </div>
      )}
    </div>
  );
};
