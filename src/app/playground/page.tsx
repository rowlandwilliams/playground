"use client";

import { ThemeToggle } from "@/components/Navbar/ThemeToggle/ThemeToggle";
import Sankey from "@/components/Sankey/Sankey";
import { StateMapPage } from "@/components/StateMapPage/StateMapPage";
import Link from "next/link";
import { useState } from "react";

const visualisations = ["sankey", "map"];

export default function Playground() {
  const [activeVis, setActiveVis] = useState("sankey");
  return (
    <section className="m-12 grow flex flex-col space-y-12">
      <nav className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          <Link
            href="/"
            className="h-3 w-3 rounded-full bg-gradient-to-br from-blue-700 dark:from-teal-400 via-rose-600 dark:via-blue-600 to-yellow-400 dark:to-yellow-200"
          />
          <ThemeToggle />
        </div>
        <div className="flex text-white gap-x-2">
          {visualisations.map((vis) => (
            <button onClick={() => setActiveVis(vis)} key={vis}>
              {vis}
            </button>
          ))}
        </div>
      </nav>
      {activeVis === "sankey" ? <Sankey /> : <div>suh</div>}
    </section>
  );
}
