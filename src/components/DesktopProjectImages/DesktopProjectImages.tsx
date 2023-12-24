"use client";

import { ProjectFieldsFragment } from "@/graphql/generated";
import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

interface Props {
  projectImages: ProjectFieldsFragment["projectImages"];
}

export const DesktopProjectImages = ({ projectImages }: Props) => {
  const url = projectImages ? projectImages[0]?.image?.asset?.url : "";

  const match = url?.match(/-(\d+)x(\d+)\./) || "";
  const width = match[1] ? parseInt(match[1], 10) : 0;
  const height = parseInt(match[2], 10);

  // Calculate aspect ratio
  const aspectRatio = height / width;

  const { graphWidth, ref } = useResponsiveGraphDims();

  return projectImages ? (
    <section className="space-y-2">
      <div ref={ref} className="flex gap-x-2 py6 bg-idigo-600 overflow-x-auto">
        {projectImages.map((image) => (
          <Image
            key={image?.image?.asset?.url}
            src={image?.image?.asset?.url as string}
            width={graphWidth}
            height={graphWidth * aspectRatio}
            alt=""
            className="object-contain object-top rounded-sm"
          />
        ))}
      </div>
    </section>
  ) : null;
};
