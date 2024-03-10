"use client";

import { DesktopProjectImages } from "@/components/DesktopProjectImages/DesktopProjectImages";
import { ProjectFieldsFragment } from "@/graphql/generated";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

interface Props {
  slug: string;
  projectImages: ProjectFieldsFragment["projectImages"];
}

export const ProjectPageHeaderAndImages = ({ slug, projectImages }: Props) => {
  const [vertical, setVertical] = useState(false);
  return (
    <div className="space-y-4 max-w-[700px] mx-auto">
      <header className="flex justify-between">
        <div className="flex items-center gap-x-1.5 text-sm">
          <Link
            href="/projects"
            className="underline underline-offset-4 font-normal text-header"
          >
            Projects
          </Link>
          <span>/</span>
          <div className="text-zinc-600 dark:text-zinc-400">
            {decodeURIComponent(slug)}
          </div>
        </div>
        <button onClick={() => setVertical(!vertical)} className="text-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 -960 960 960"
            width="18"
            className={classNames("fill-zinc-700 dark:fill-zinc-300", {
              "rotate-90": !vertical,
            })}
          >
            <path d="M212.309-140.001q-30.308 0-51.308-21t-21-51.308v-535.382q0-30.308 21-51.308t51.308-21h535.382q30.308 0 51.308 21t21 51.308v535.382q0 30.308-21 51.308t-51.308 21H212.309Zm0-59.999h535.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-195.384H200v195.384q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846ZM200-467.691h560v-280q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H212.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v280Zm0 0V-760v292.309Z" />
          </svg>
        </button>
      </header>
      <DesktopProjectImages projectImages={projectImages} vertical={vertical} />
    </div>
  );
};
