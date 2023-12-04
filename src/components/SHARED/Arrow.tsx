import React from "react";

interface Props {
  dimension: number;
}

export const Arrow = ({ dimension }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={dimension}
      height={dimension}
      viewBox="0 0 16 16"
      className="fill-current"
    >
      <path d="M12.175 9H0V7h12.175l-5.6-5.6L8 0l8 8-8 8-1.425-1.4 5.6-5.6Z" />
    </svg>
  );
};
