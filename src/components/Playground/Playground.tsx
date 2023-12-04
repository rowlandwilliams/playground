import Link from "next/link";
import React from "react";
import Sankey from "../Sankey/Sankey";

export const Playground = () => {
  return (
    <section className="font-light space-y-2 text-zinc-700">
      <Link
        href="/playground"
        className="font-medium text-zinc-900 dark:text-zinc-200"
      >
        Playground
      </Link>
      <div className="w-full h-[500px]">
        <Sankey />
      </div>
    </section>
  );
};
