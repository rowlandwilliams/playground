"use client";

import { ProjectFieldsFragment } from "@/graphql/generated";
import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

interface Props {
  projectImages: ProjectFieldsFragment["projectImages"];
}

export const ProjectImages = ({ projectImages }: Props) => {
  const [activeImage, setActiveImage] = useState(0);

  const url = projectImages
    ? projectImages[activeImage]?.image?.asset?.url
    : "";

  const match = url?.match(/-(\d+)x(\d+)\./) || "";
  const width = match[1] ? parseInt(match[1], 10) : 0;
  const height = parseInt(match[2], 10);

  // Calculate aspect ratio
  const aspectRatio = height / width;

  const { graphWidth, ref } = useResponsiveGraphDims();

  return projectImages && projectImages[activeImage] ? (
    <section className="space-y-2">
      <div ref={ref} key={projectImages[activeImage]?.image?.asset?.url}>
        {projectImages[activeImage]?.image?.asset?.url && (
          <Image
            src={projectImages[activeImage]?.image?.asset?.url as string}
            width={graphWidth}
            height={graphWidth * aspectRatio}
            alt=""
            className="object-contain object-top rounded-md"
          />
        )}
      </div>
      {graphWidth > 0 && (
        <section className="flex justify-between items-center">
          <div className="flex gap-x-2">
            {projectImages?.map((image, i) => (
              <button
                onClick={() => setActiveImage(i)}
                key={image?.caption}
                className={classNames("w-[10px] h-[10px] rounded-full ", {
                  "bg-indigo-600": activeImage === i,
                  "bg-zinc-300 dark:bg-zinc-600": activeImage !== i,
                })}
              />
            ))}
          </div>
          <div className="text-zinc-700 text-xs dark:text-zinc-400">
            {projectImages[activeImage]?.caption}
          </div>
        </section>
      )}
    </section>
  ) : null;
};
