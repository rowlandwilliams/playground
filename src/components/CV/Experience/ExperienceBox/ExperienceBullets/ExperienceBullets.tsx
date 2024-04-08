import React from "react";

interface Props {
  bullets: string[];
}

export const ExperienceBullets: React.FC<Props> = ({ bullets }) => {
  return (
    <div className="py-2">
      <div className="space-y-0.5 md:space-y-0">
        {bullets.map((bullet, index) => (
          <div
            key={index}
            className="flex items-start md:items-center gap-x-1 "
          >
            <div className="text-indigo-500">&#x2022;</div>
            {bullet}
          </div>
        ))}
      </div>
    </div>
  );
};
