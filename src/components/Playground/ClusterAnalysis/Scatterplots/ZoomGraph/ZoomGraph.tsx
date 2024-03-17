import classNames from "classnames";
import { selectAll } from "d3-selection";
import { useEffect } from "react";
import { graphMargin } from "../utils/shared";

import { plotZoomGraph } from "./utils/plot";
import { ZoomGraphTooltip } from "./ZoomGraphTooltip/ZoomGraphTooltip";
import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";
import { clusterStore } from "@/store/cluster";

export const ZoomGraph = () => {
  const { graphWidth, graphHeight, ref } = useResponsiveGraphDims();
  const isLoading = graphWidth === 0;

  const { zoomGraphDomains, coordsAndTooltipData, pointIsHovered } =
    clusterStore();

  useEffect(() => {
    plotZoomGraph(graphWidth, graphHeight, zoomGraphDomains);

    // after both graphs plotted set color of all graph axis lines
    selectAll(".tick > line, .domain").attr("stroke-width", "0.1");
  }, [graphWidth, graphHeight, zoomGraphDomains]);

console.log(graphHeight)

  return (
    <div
      className={classNames(
        "relative w-full md:w-1/2 h-[400px] md:h-full transition-opacity duration-200 ",
        {
          "opacity-0": isLoading,
          "opacity-100": !isLoading,
        }
      )}
      ref={ref}
    >
      <svg width={graphWidth} height={graphHeight}>
        <clipPath id="myClip">
          <rect
            transform={`translate(${graphMargin.left}, ${graphMargin.top})`}
            width={graphWidth - graphMargin.left - graphMargin.right}
            height={graphHeight - graphMargin.top - graphMargin.bottom}
          ></rect>
        </clipPath>
        <g
          id="x-axis-zoom"
          transform={`translate(0,${graphHeight - graphMargin.top})`}
          className="stroke-current stroke-0 text-chart-grid-grey font-inconsolata-regular"
        />
        <g
          id="y-axis-zoom"
          transform={`translate(${graphMargin.left}, 0)`}
          className="stroke-current stroke-0 text-chart-grid-grey font-inconsolata-regular"
        />
        <g id="points-zoom-under" clipPath="url(#myClip)" />
        <g id="points-zoom" clipPath="url(#myClip)" />
      </svg>
      <ZoomGraphTooltip
        pointIsHovered={pointIsHovered}
        coordsAndTooltipData={coordsAndTooltipData}
      />
    </div>
  );
};
