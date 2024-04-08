import React from "react";
import { ExperienceBoxHeader } from "./ExperienceBoxHeader/ExperienceBoxHeader";
import { ExperienceBullets } from "./ExperienceBullets/ExperienceBullets";
import { ExperienceDates } from "./ExperienceDates/ExperienceDates";
import { ExperienceLocations } from "./ExperienceLocations/ExperienceLocations";
import { Timeframe } from "@/types/types";

interface Props {
  withArrow: boolean;
  imageColorClass: string;
  image: string;
  title: string;
  employer: string;
  bullets: string[];
  timeframe: Timeframe;
  locations: string[];
}

export const ExperienceBox: React.FC<Props> = ({
  withArrow,
  imageColorClass,
  image,
  title,
  employer,
  bullets,
  timeframe,
  locations,
}) => {
  return (
    <div className="flex max-h-max w-full flex-col gap-y-2 rounded-md text-body border  dark:border-zinc-600 p-4 text-xs">
      <ExperienceBoxHeader
        withArrow={withArrow}
        imageColorClass={imageColorClass}
        image={image}
        title={title}
        employer={employer}
      />
      <ExperienceBullets bullets={bullets} />
      <div className="flex justify-between">
        <ExperienceDates timeframe={timeframe} />
        <ExperienceLocations locations={locations} />
      </div>
    </div>
  );
};
