"use client";

import Link from "next/link";
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
  employerUrl?: string;
  isCurrent?: boolean;
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
  employerUrl = undefined,
  isCurrent,
}) => {
  const children = (
    <>
      <ExperienceBoxHeader
        withArrow={withArrow}
        imageColorClass={imageColorClass}
        image={image}
        title={title}
        employer={employer}
        isCurrent={isCurrent}
        employerUrl={employerUrl}
      />
      <ExperienceBullets bullets={bullets} />
      <div className="flex justify-between">
        <ExperienceDates timeframe={timeframe} />
        <ExperienceLocations locations={locations} />
      </div>
    </>
  );

  return employerUrl ? (
    <Link
      href={employerUrl}
      target="_blank"
      className="flex max-h-max w-full flex-col gap-y-2 rounded-md text-body border  dark:border-zinc-600 p-4 text-xs hover:border-indigo-400 dark:hover:border-indigo-400"
    >
      {children}
    </Link>
  ) : (
    <div className="flex max-h-max w-full flex-col gap-y-2 rounded-md text-body border  dark:border-zinc-600 p-4 text-xs">
      {children}
    </div>
  );
};
