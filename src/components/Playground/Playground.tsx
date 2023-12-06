import Link from "next/link";
import React from "react";
import Sankey from "../Sankey/Sankey";
import { ClusterAnalysis } from "../ClusterAnalysis/ClusterAnalysis";

export const Playground = () => {
  return (
    <section className="font-light space-y-2 text-zinc-700">
      <Link
        href="/playground"
        className="font-medium text-zinc-900 dark:text-zinc-200"
      >
        Playground
      </Link>
      <section className="space-y-4">
        <div className="w-full h-[500px]">
          <ClusterAnalysis />
        </div>
        <div className="w-full h-[500px] border  border-zinc-800  p-5">
          <Sankey />
        </div>
      </section>
    </section>
  );
};
