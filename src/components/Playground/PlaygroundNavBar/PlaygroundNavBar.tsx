"use client";

import { ClusterAnalysisIcon } from "@/components/Icons/ClusterAnalysisIcon/ClusterAnalysisIcon";
import { TwentyFourHoursIcon } from "@/components/Icons/TwentyFourHoursIcon/TwentyFourHoursIcon";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const options = [
  {
    label: "24 hour events",
    icon: <TwentyFourHoursIcon />,
    link: "twenty-four-hours",
  },
  {
    label: "Cluster Analysis",
    icon: <ClusterAnalysisIcon />,
    link: "cluster-analysis",
  },
  {
    label: "Ternary Plot",
    icon: <ClusterAnalysisIcon />,
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
      className={classNames("w-40", {
        "hidden md:block space-y-2 ": isDesktop,
        "flex items-center md:hidden ml-2": !isDesktop,
      })}
    >
      {options.map(({ label, icon, link }) => (
        <Link
          key={label}
          href={`/playground/${link}`}
          className={classNames(
            "flex whitespace-nowrap gap-x-2 items-center px-4 py-2 rounded-md",
            {
              "bg-zinc-200 dark:bg-zinc-700  font-medium": activeViz === link,
              "hover:bg-zinc-100 dark:hover:bg-zinc-800": activeViz !== link,
            }
          )}
        >
          {icon}
          <p>{label}</p>
        </Link>
      ))}
    </nav>
  );
};
