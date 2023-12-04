"use client";

import { TernaryPlotOuterTriangle } from "./TernaryPlotOuterTriangle/TernaryPlotOuterTriangle";
import { TernaryPlotBaseTriangles } from "./TernaryPlotBaseTriangles/TernaryPlotBaseTriangles";
import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";
import { TernaryPlotLabels } from "./TernaryPlotLabels/TernaryPlotLabels";
import { TernaryPlotPoint } from "./TernaryPlotPoint/TernaryPlotPoint";

export const TernaryPlot = () => {
  const { ref, graphWidth } = useResponsiveGraphDims();
  const padding = 65;
  const trianglePlotDim = graphWidth - padding;

  const half = trianglePlotDim / 2;
  const labelOffset = 10;
  return (
    <section>
      <div
        ref={ref}
        className="flex mx-auto max-w-[300px] brder justify-center items-center"
      >
        <svg
          height={trianglePlotDim + padding}
          width={trianglePlotDim + padding}
        >
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
              triangleClass="fill-transparent stroke-indigo-400"
            />
          </g>
          <TernaryPlotLabels
            half={half}
            labelOffset={labelOffset}
            padding={padding}
            trianglePlotDim={trianglePlotDim}
          />
          <TernaryPlotPoint
            half={half}
            padding={padding}
            trianglePlotDim={trianglePlotDim}
          />
        </svg>
      </div>
    </section>
  );
};
