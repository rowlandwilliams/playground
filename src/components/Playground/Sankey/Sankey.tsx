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
import { PlaygroundVizWrapper } from "../PlaygroundVizWrapper/PlaygroundVizWrapper";

const sankeyData = getSankeyDataFromRaw(southAfricaRaw, southAfricaProvinces);

const Sankey = () => {
  const { graphHeight, graphWidth, ref } = useResponsiveGraphDims();

  // generate nodes and links from data
  const { nodes, links } = getSankeyGenerator(
    graphWidth,
    graphHeight,
    sankeyData
  );

  const tooltipContent = (
    <div className="w-60 space-y-2">
      <p>Sankey diagram showing internal migration within a country.</p>
    </div>
  );

  return (
    <PlaygroundVizWrapper
      tooltipContent={tooltipContent}
      codeLink="https://github.com/rowlandwilliams/playground/tree/main/src/components/Playground/Sankey"
    >
      <div
        className="relative w-full h-full space-y-4 overflow-auto bg-zinc-100 dark:bg-chart-gray pb-6 rounded-md"
        ref={ref}
      >
        <SankeySvg links={links as TransformedLink[]} nodes={nodes} />
        <SankeyNodeTooltip />
        <SankeyLinkTooltip />
      </div>
    </PlaygroundVizWrapper>
  );
};

export default Sankey;
