"use client";

import { TernaryPlotOuterTriangle } from "./TernaryPlotOuterTriangle/TernaryPlotOuterTriangle";
import { TernaryPlotBaseTriangles } from "./TernaryPlotBaseTriangles/TernaryPlotBaseTriangles";
import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";
import { TernaryPlotLabels } from "./TernaryPlotLabels/TernaryPlotLabels";
import { TernaryPlotPoint } from "./TernaryPlotPoint/TernaryPlotPoint";
import classNames from "classnames";

interface Props {
  useHeight?: boolean;
  maxWidthClass?: string;
  labelValues?: string[];
}

export const TernaryPlot = ({
  useHeight = false,
  maxWidthClass = "max-w-[300px]",
  labelValues = ["Developer", "Artist", "Designer"],
}: Props) => {
  const { ref, graphWidth, graphHeight } = useResponsiveGraphDims();

  const padding = 65;
  const dim = useHeight ? graphHeight : graphWidth;
  const trianglePlotDim = dim - padding;

  const half = trianglePlotDim / 2;
  const labelOffset = 10;
  return (
    <div
      ref={ref}
      className={classNames(
        "flex mx-auto sm:mx-0 w-full h-full justify-self-end justify-center items-center",
        maxWidthClass
      )}
    >
      <svg height={trianglePlotDim + padding} width={trianglePlotDim + padding}>
        <g transform={`translate(${padding / 2}, ${padding / 2})`}>
          <TernaryPlotOuterTriangle
            half={half}
            trianglePlotDim={trianglePlotDim}
          />
          <TernaryPlotBaseTriangles
            plotDim={trianglePlotDim}
            nTriangles={18}
            half={half}
          />
          <TernaryPlotBaseTriangles
            plotDim={trianglePlotDim}
            nTriangles={3}
            half={half}
            strokeClass="stroke-indigo-600"
          />
          <TernaryPlotOuterTriangle
            half={half}
            trianglePlotDim={trianglePlotDim}
            triangleClass="fill-transparent stroke-indigo-600 dark:stroke-indigo-400"
          />
        </g>
        <TernaryPlotLabels
          half={half}
          labelOffset={labelOffset}
          padding={padding}
          trianglePlotDim={trianglePlotDim}
          labelValues={labelValues}
        />
        <TernaryPlotPoint
          half={half}
          padding={padding}
          trianglePlotDim={trianglePlotDim}
        />
      </svg>
    </div>
  );
};
