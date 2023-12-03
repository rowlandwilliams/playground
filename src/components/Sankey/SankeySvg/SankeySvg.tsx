import { SankeyNodeMinimal } from "d3-sankey";
import { TransformedLink } from "../../../types/types";
import { SankeyLinkGradients } from "./SankeyLinkGradients/SankeyLinkGradients";
import { sankeyMargin } from "../utils/plot";
import { SankeyNodes } from "./SankeyNodes/SankeyNodes";
import { SankeyLinks } from "./SankeyLinks/SankeyLinks";

interface Props {
  links: TransformedLink[];
  nodes: SankeyNodeMinimal<Record<string, never>, Record<string, never>>[];
  graphWidth: number;
  graphHeight: number;
}

export const SankeySvg = ({ links, nodes, graphHeight, graphWidth }: Props) => {
  return (
    <svg width={graphWidth} height={graphHeight}>
      <SankeyLinkGradients links={links as TransformedLink[]} />
      <g
        transform={`translate(${sankeyMargin.left}, ${sankeyMargin.top})`}
        className="text-xs text-zinc-600 dark:text-zinc-100"
      >
        <SankeyLinks links={links} />
        <SankeyNodes nodes={nodes} />
      </g>
    </svg>
  );
};
