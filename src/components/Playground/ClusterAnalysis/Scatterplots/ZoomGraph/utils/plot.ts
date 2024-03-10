import { clusterStore } from "@/store/cluster";
import {
  getClusterXAxis,
  getXScale,
  getYScale,
  plotPoints,
} from "../../utils/shared";
import { getClusterYAxis, getGraphSelections } from "../../utils/shared";

export const plotZoomGraph = (
  parentWidth: number,
  parentHeight: number,
  zoomGraphDomains: number[][]
) => {
  const { pointsData } = clusterStore.getState();
  const { xAxisGroup, yAxisGroup, pointsGroup } = getGraphSelections("zoom");

  const xDomain = [zoomGraphDomains[0][0], zoomGraphDomains[1][0]];
  const yDomain = [zoomGraphDomains[0][1], zoomGraphDomains[1][1]];

  const xAxisScale = getXScale(parentWidth, xDomain);
  const xAxis = getClusterXAxis(parentHeight, xAxisScale, true);
  xAxisGroup.call(xAxis);

  const yAxisScale = getYScale(parentHeight, yDomain);
  const yAxis = getClusterYAxis(parentWidth, yAxisScale, true);

  yAxisGroup.call(yAxis);

  plotPoints(pointsGroup, pointsData, xAxisScale, yAxisScale, true);
};
