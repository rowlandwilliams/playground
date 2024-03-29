"use client";

import Link from "next/link";
import { StockChart } from "../Playground/StockChart/StockChart";
import { PlaygroundNavbarOption } from "../Playground/PlaygroundNavBar/PlaygroundNavBarOption/PlaygroundNavBarOption";
import { StockChartIcon } from "../Icons/StockChartIcon/StockChartIcon";
import { useState } from "react";
import { TwentyFourHoursIcon } from "../Icons/TwentyFourHoursIcon/TwentyFourHoursIcon";
import TwentyFourHourEvents from "@/app/playground/twenty-four-hours/page";

const vizOptions = [
  {
    state: "stock-chart",
    icon: <StockChartIcon />,
    component: <StockChart companyTicker="aapl" isHomepage />,
  },
  {
    state: "twenty-four-hours",
    icon: <TwentyFourHoursIcon />,
    component: <TwentyFourHourEvents />,
  },
];

export const HomepagePlayground = () => {
  const [activeViz, setActiveViz] = useState("stock-chart");

  const visibleViz = vizOptions.find(
    (viz) => viz.state === activeViz
  )?.component;

  return (
    <section className="font-light text-zinc-700 space-y-6 dark:text-zinc-300">
      <header className="space-y-2">
        <div className="flex justify-between items-center">
          <Link
            href="/playground"
            className="font-medium hover:underline hover:underline-offset-[6px] text-zinc-900 text-base dark:text-zinc-200"
          >
            Playground
          </Link>
          <Link
            href="/playground"
            className="font-medium w-6 flex items-center text-sm justify-center h-6 hover:bg-zinc-100 text-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-600 rounded-md"
          >
            {"->"}
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h2>A collection of data visualisations and experiments</h2>
          <nav className="flex gap-x-2">
            {vizOptions.map(({ state, icon }) => (
              <PlaygroundNavbarOption
                key={state}
                icon={icon}
                isActive={state === activeViz}
                isDesktop={false}
                label=""
                link=""
                noLink
                handleClick={() => setActiveViz(state)}
              />
            ))}
          </nav>
        </div>
      </header>
      {visibleViz}
    </section>
  );
};
