import React from "react";
import classNames from "classnames";
import Image from "next/image";

interface Props {
  withArrow: boolean;
  imageColorClass: string;
  image: string;
  title: string;
  employer: string;
}

export const ExperienceBoxHeader: React.FC<Props> = ({
  withArrow,
  imageColorClass,
  image,
  title,
  employer,
}) => {
  return (
    <div className="flex justify-between">
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
          <h1 className="text-header text-[13px] font-haas tracking-wide">{title}</h1>
          <h2 className="hover:text-indigo-500 hover:underline text-sub-header">
            {employer}
          </h2>
        </div>
      </div>
    </div>
  );
};
