"use client";

import { ProjectFieldsFragment } from "@/graphql/generated";
import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

interface Props {
  projectImages: ProjectFieldsFragment["projectImages"] | undefined;
}

export const ProjectImages = ({ projectImages }: Props) => {
  const [activeImage, setActiveImage] = useState(0);

  const url = projectImages[activeImage]?.image?.asset?.url;

  const match = url?.match(/-(\d+)x(\d+)\./);
  const width = parseInt(match[1], 10);
  const height = parseInt(match[2], 10);

  // Calculate aspect ratio
  const aspectRatio = height / width;

  const { graphWidth, ref } = useResponsiveGraphDims();

  console.log(width, height, aspectRatio);

  return (
    <section className="space-y-2">
      {projectImages && projectImages[activeImage] ? (
        <div ref={ref} key={projectImages[activeImage]?.image?.asset?.url}>
          <Image
            src={projectImages[activeImage]?.image?.asset?.url}
            width={graphWidth}
            height={graphWidth * aspectRatio}
            alt=""
            className="object-contain object-top rounded-sm"
          />
        </div>
      ) : null}
      <div className="flex gap-x-2">
        {projectImages?.map((image, i) => (
          <button
            onClick={() => setActiveImage(i)}
            key={image?.caption}
            className={classNames("w-[10px] h-[10px] rounded-full ", {
              "bg-indigo-600": activeImage === i,
              "bg-zinc-600": activeImage !== i,
            })}
          />
        ))}
      </div>
    </section>
  );
};
