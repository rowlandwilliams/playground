"use client";

import { TernaryPlotOuterTriangle } from "./TernaryPlotOuterTriangle/TernaryPlotOuterTriangle";
import { TernaryPlotBaseTriangles } from "./TernaryPlotBaseTriangles/TernaryPlotBaseTriangles";
import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";

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
          <g className="text-xs">
            <text
              x={half}
              y={-labelOffset}
              className="fill-zinc-600 dark:fill-white"
              text-anchor="middle"
              dominant-baseline="hanging"
              transform={`translate(${padding / 2},20)`}
            >
              Developer
            </text>
            <text
              className="fill-zinc-600 dark:fill-white"
              x={trianglePlotDim + padding - 5}
              y={trianglePlotDim + padding - labelOffset}
              text-anchor="end"
            >
              Artist
            </text>
            <text
              className="fill-zinc-600 dark:fill-white"
              x={0}
              y={trianglePlotDim + padding - labelOffset}
              text-anchor="start"
              transform={`translate(${padding / 2},0})`}
            >
              Designer
            </text>
          </g>
          <circle
            className="dark:fill-none stroke-zinc-300 fill-indigo-200 dark:animate-pulse"
            r={8}
            cx={half + padding + 1}
            cy={half - padding / 2}
          />
          <circle
            className="fill-teal-500 animate-pulse dark:animate-none"
            r={4}
            cx={half + padding + 1}
            cy={half - padding / 2}
          />
        </svg>
      </div>
    </section>
  );
};
