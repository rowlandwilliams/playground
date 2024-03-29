"use client";

import { ClusterAnalysisIcon } from "@/components/Icons/ClusterAnalysisIcon/ClusterAnalysisIcon";
import { SankeyIcon } from "@/components/Icons/SankeyIcon/SankeyIcon";
import { StockChartIcon } from "@/components/Icons/StockChartIcon/StockChartIcon";
import { TriangleIcon } from "@/components/Icons/TriangleIcon/TriangleIcon";
import { TwentyFourHoursIcon } from "@/components/Icons/TwentyFourHoursIcon/TwentyFourHoursIcon";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { PlaygroundNavbarOption } from "./PlaygroundNavBarOption/PlaygroundNavBarOption";

const options = [
  {
    label: "24 hour events",
    icon: <TwentyFourHoursIcon />,
    link: "twenty-four-hours",
  },
  {
    label: "Stock chart",
    icon: <StockChartIcon />,
    link: "stock-chart",
  },
  {
    label: "Cluster Analysis",
    icon: <ClusterAnalysisIcon />,
    link: "cluster-analysis",
  },
  {
    label: "Sankey",
    icon: <SankeyIcon />,
    link: "sankey",
  },
  {
    label: "Ternary Plot",
    icon: <TriangleIcon />,
    link: "ternary-plot",
  },
];

interface Props {
  isDesktop: boolean;
}

export const PlaygroundNavBar = ({ isDesktop }: Props) => {
  const pathname = usePathname();
  const activeViz = pathname.split("/").pop();

  return (
    <nav
      className={classNames("w-40 shrink-0", {
        "hidden md:block space-y-2 ": isDesktop,
        "flex items-center md:hidden ml-2 gap-x-2": !isDesktop,
      })}
    >
      {options.map(({ label, icon, link }) => (
        <PlaygroundNavbarOption
          key={label}
          label={label}
          icon={icon}
          link={link}
          isActive={activeViz === link}
          isDesktop={isDesktop}
        />
      ))}
    </nav>
  );
};
