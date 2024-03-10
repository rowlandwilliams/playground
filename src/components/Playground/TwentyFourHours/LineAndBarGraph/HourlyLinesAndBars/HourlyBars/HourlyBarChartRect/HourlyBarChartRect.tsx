import React, { useState } from "react";

interface Props {
  barWidth: number;
  barHeight: number;
  x: number;
  y: number;
  barColorOnHover: string;
}

export const HourlyBarChartRect = ({
  barWidth,
  barHeight,
  x,
  y,
  barColorOnHover,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <rect
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      width={barWidth}
      height={100}
      x={x}
      y={y}
      rx={4}
      className="cursor-pointer stroke-2 stroke-gray-50 dark:stroke-zinc-900"
      fill={barColorOnHover}
    />
  );
};
