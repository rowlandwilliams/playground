import { TooltipDifferenceObject } from "@/types/playground/stock-chart";

export const changeVisibleDatesDomain = (visibleDatesDomain: number[]) => ({
  type: "CHANGEDOMAIN",
  visibleDatesDomain: visibleDatesDomain,
});

export const setTopChartIsHovered = (isTopChartHovered: boolean) => ({
  type: "CHANGECHARTHOVER",
  topChartIsHovered: isTopChartHovered,
});

export const setTooltipDifference = (
  sequentialLineDateObj: TooltipDifferenceObject
) => ({
  type: "CHANGETOOLTIPDIFFERENCE",
  tooltipDifferences: sequentialLineDateObj,
});
