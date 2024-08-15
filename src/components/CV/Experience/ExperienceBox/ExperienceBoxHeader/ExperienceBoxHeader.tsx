import React from "react";
import classNames from "classnames";
import Image from "next/image";
import { CurrrentTag } from "@/components/SHARED/CurrrentTag/CurrrentTag";
import Link from "next/link";

interface Props {
  withArrow: boolean;
  imageColorClass: string;
  image: string;
  title: string;
  employer: string;
  employerUrl?: string;
  isCurrent?: boolean;
}

export const ExperienceBoxHeader: React.FC<Props> = ({
  withArrow,
  imageColorClass,
  image,
  title,
  employer,
  employerUrl = undefined,
  isCurrent = undefined,
}) => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex items-center gap-x-2">
        <div
          className={classNames(
            "flex items-center w-10 justify-center h-10 p-1.5 rounded-full",
            imageColorClass
          )}
        >
          <Image src={`/${image}`} width={32} height={32} alt="flow" />
        </div>
        <div>
          <h1 className="text-header text-[13px] font-haas tracking-wide">
            {title}
          </h1>
          <h2 className="text-sub-header">{employer}</h2>
        </div>
      </div>
      <div className="flex gap-2">
        {isCurrent && <CurrrentTag hasPadding />}{" "}
        {employerUrl && (
          <div className="font-medium w-6 flex items-center text-sm justify-center h-6 hover:bg-zinc-100 text-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-600 rounded-md">
            {"->"}
          </div>
        )}
      </div>
    </div>
  );
};
