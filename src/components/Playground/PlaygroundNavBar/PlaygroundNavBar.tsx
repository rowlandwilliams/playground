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
];

export const PlaygroundNavBar = () => {
  const pathname = usePathname();
  const activeViz = pathname.split("/").pop();
  console.log(activeViz);

  return (
    <nav className="hidden md:block space-y-2 w-40">
      {options.map(({ label, icon, link }) => (
        <Link
          key={label}
          href={`/playground/${link}`}
          className={classNames(
            "flex whitespace-nowrap gap-x-2 items-center px-4 py-2 rounded-md",
            { "bg-zinc-700  font-medium": activeViz === link }
          )}
        >
          {icon}
          <p>{label}</p>
        </Link>
      ))}
    </nav>
  );
};
