import { RawData } from "@/types/types";
import { sankey } from "d3-sankey";

export const sankeyMargin = { top: 10, right: 40, bottom: 10, left: 40 };
export const nodeWidth = 10;
export const nodeTooltipPadding = 5;

export const getSankeyGenerator = (
  parentWidth: number,
  parentHeight: number,
  sankeyData: RawData
) => {
  const { nodes, links } = sankey()
    .nodeWidth(nodeWidth)
    .nodePadding(20)
    .extent([
      [0, 0],
      [
        parentWidth - sankeyMargin.right - sankeyMargin.left,
        parentHeight - sankeyMargin.top - sankeyMargin.bottom,
      ],
    ])(sankeyData as any);

  return { nodes, links };
};
