import classNames from "classnames";
import { useEffect } from "react";
import { graphMargin } from "../utils/shared";
import { AxisLines } from "./AxisLines/AxisLines";
import {
  getZoomGraphDomainsFromContainerDims,
  plotMainGraph,
} from "./utils/plot";
import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";
import { clusterStore } from "@/store/cluster";

export const MainGraph = () => {
  const { graphWidth, graphHeight, ref } = useResponsiveGraphDims();
  const isLoading = graphWidth === 0;

  const { setZoomGraphDomains } = clusterStore();

  // set intial brush domain based on container dims
  useEffect(() => {
    const zoomGraphDomains = getZoomGraphDomainsFromContainerDims(
      graphWidth,
      graphHeight
    );
    setZoomGraphDomains(zoomGraphDomains);
  }, [graphHeight, graphWidth, setZoomGraphDomains]);

  useEffect(() => {
    plotMainGraph(graphWidth, graphHeight);
  }, [graphWidth, graphHeight]);

  return (
    <div
      className={classNames(
        "w-full md:w-1/2 h-1/2 md:h-full transition-opacity duration-200",
        {
          "opacity-0": isLoading,
          "opacity-100": !isLoading,
        }
      )}
      ref={ref}
    >
      <svg width="100%" height="100%">
        <g
          id="x-axis-main"
          transform={`translate(0,${graphHeight - graphMargin.top})`}
          className="stroke-current stroke-0 text-chart-grid-grey font-inconsolata-regular"
        ></g>
        <g
          id="y-axis-main"
          transform={`translate(${graphMargin.left}, 0)`}
          className="stroke-current stroke-0 text-chart-grid-grey font-inconsolata-regular"
        ></g>
        <AxisLines graphWidth={graphWidth} graphHeight={graphHeight} />
        <g id="points-main"></g>
        <g id="brush-main"></g>
      </svg>
    </div>
  );
};
