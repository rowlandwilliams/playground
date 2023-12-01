import React from "react";
import { TernaryPlotOuterTriangle } from "./TernaryPlotOuterTriangle/TernaryPlotOuterTriangle";
import { TernaryPlotBaseTriangles } from "./TernaryPlotBaseTriangles/TernaryPlotBaseTriangles";

export const TernaryPlot = () => {
  const trianglePlotDim = 300;

  const padding = 50;
  const half = trianglePlotDim / 2;
  return (
    <div className="flex justify-center">
      <svg height={trianglePlotDim + padding} width={trianglePlotDim + padding}>
        <g transform={`translate(${padding / 2}, ${padding / 2})`}>
          <TernaryPlotOuterTriangle
            half={half}
            trianglePlotDim={trianglePlotDim}
          />
          <TernaryPlotBaseTriangles
            plotDim={trianglePlotDim}
            nTriangles={24}
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
        <g>
          <text
            x={half}
            y={-15}
            className="fill-zinc-600 dark:fill-white"
            text-anchor="middle"
            dominant-baseline="hanging"
            transform={`translate(${padding / 2},20)`}
          >
            A
          </text>
          <text
            className="fill-zinc-600 dark:fill-white"
            x={trianglePlotDim + 5}
            y={trianglePlotDim}
            text-anchor="start"
            dominant-baseline="hanging"
            transform={`translate(${padding / 2},${padding / 2 - 5})`}
          >
            C
          </text>
          <text
            className="fill-zinc-600 dark:fill-white"
            x={-5}
            y={trianglePlotDim}
            text-anchor="end"
            dominant-baseline="hanging"
            transform={`translate(${padding / 2},${padding / 2 - 5})`}
          >
            B
          </text>
        </g>
      </svg>
    </div>
  );
};
