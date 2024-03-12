"use client";

import { southAfricaRaw } from "./data/southAfrica/southAfricaRaw";
import { getSankeyDataFromRaw } from "./utils/data-processing";
import { southAfricaProvinces } from "./data/southAfrica/provinces";
import { getSankeyGenerator } from "./utils/plot";
import { SankeyNodeTooltip } from "./SankeyNodeTooltip/SankeyNodeTooltip";
import { TransformedLink } from "@/types/types";
import { SankeySvg } from "./SankeySvg/SankeySvg";
import { SankeyLinkTooltip } from "./SankeyLinkTooltip/SankeyLinkTooltip";
import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";

const sankeyData = getSankeyDataFromRaw(southAfricaRaw, southAfricaProvinces);

const Sankey = () => {
  const { graphHeight, graphWidth, ref } = useResponsiveGraphDims();

  // generate nodes and links from data
  const { nodes, links } = getSankeyGenerator(
    graphWidth,
    graphHeight,
    sankeyData
  );

  return (
    <div
      className="relative w-full h-full space-y-4 overflow-auto bg-zinc-100 dark:bg-chart-gray py-6 rounded-md"
      ref={ref}
    >
      <SankeySvg links={links as TransformedLink[]} nodes={nodes} />
      <SankeyNodeTooltip />
      <SankeyLinkTooltip />
    </div>
  );
};

export default Sankey;
