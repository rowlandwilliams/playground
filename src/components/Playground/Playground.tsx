import Link from "next/link";
import React from "react";

export const Playground = () => {
  return (
    <section className="font-light space-y-2 text-zinc-700">
      <Link
        href="/playground"
        className="font-medium text-zinc-900 dark:text-zinc-200"
      >
        Playground
      </Link>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(3)].map((item, i) => (
          <div key={i} className="h-20 bg-indigo-500 rounded-sm"></div>
        ))}
      </div>
    </section>
  );
};
