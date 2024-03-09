"use client";

import { useState } from "react";
import {
  allDataColorScale,
  barChartColorScale,
  dataset,
  getBarChartYScale,
  getBubbleRadiusScale,
  getHourGroupWidth,
  getLineGraphYScale,
  getWidthScale,
} from "./utils/plot-utils";
import { barData } from "./utils/data";
import { Heatmap } from "./HeatmapGroup/Heatmap";
import { LineAndBarGraph } from "./LineAndBarGraph/LineAndBarGraph";
import { GraphHeader } from "./GraphHeader/GraphHeader";
import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";
import { margin, nHoursPerDay, nMinPerHour } from "./utils/numbers";
import { HourlyLinesAndBars } from "./LineAndBarGraph/HourlyLinesAndBars/HourlyLinesAndBars";
import { BubbleGraph } from "./BubbleGraph/BubbleGraph";
import { HourlyBars } from "./LineAndBarGraph/HourlyLinesAndBars/HourlyBars/HourlyBars";
import { HourlyBarChartRect } from "./LineAndBarGraph/HourlyLinesAndBars/HourlyBars/HourlyBarChartRect/HourlyBarChartRect";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { interpolateRgb } from "d3-interpolate";

export const Visualisation = () => {
  const [activeHour, setActiveHour] = useState(19);
  const handleHourGroupClick = (hour: number) => setActiveHour(hour);

  const {
    ref: lineGraphRef,
    graphWidth: lineGraphWidth,
    graphHeight: lineGraphHeight,
  } = useResponsiveGraphDims();
  const {
    ref: heatmapRef,
    graphHeight: heatMapHeight,
    graphWidth: heatmapWidth,
  } = useResponsiveGraphDims();
  const loaded = lineGraphHeight > 0;

  const { hourGroupWidth, hourGroupHeight, rectWidth, bubbleHeight } =
    getHourGroupWidth(lineGraphWidth, lineGraphHeight);

  const widthScale = getWidthScale(rectWidth);

  const barChartData = dataset.slice(
    activeHour * nMinPerHour,
    activeHour * nMinPerHour + nMinPerHour
  );
  const xScale = scaleBand({
    domain: barChartData.map((d, i) => i),
    range: [0, lineGraphWidth],
    padding: 0.2,
  });

  const max = Math.max(...barChartData.flat());
  const yPadding = 0;

  const barYScale = scaleLinear({
    domain: [0, max],
    range: [lineGraphHeight - yPadding, 0],
  });

  const colorScale = scaleLinear()
    .domain([0, Math.max(...dataset.flat()) * 0.5, Math.max(...dataset.flat())])
    .range(["#FFFA7A", "#FF6868", "#512FFF"] as any)
    .interpolate(interpolateRgb.gamma(2.2) as any);

  const nMinutes = 60;
  const barWidth = lineGraphWidth / nMinutes;

  return (
    <div className="flex flex-col grow space-y-4 bg-chart-gray py-8 px-4 rounded-md">
      <div className="grow" ref={lineGraphRef}>
        <svg className="grow" width="100%" height={lineGraphHeight}>
          <rect className="fill-chart-gray w-full h-full"></rect>
          <g className="fill-current text-header-gray hover:bg-chart-purple">
            {barChartData.map((d, i) => (
              <Bar
                key={i}
                x={xScale(i)}
                y={barYScale(d)}
                width={xScale.bandwidth()}
                height={lineGraphHeight - barYScale(d)}
                fill={colorScale(d) as string}
              />
            ))}
          </g>
        </svg>
      </div>
      <div ref={heatmapRef} className="h-28">
        <svg
          className="w-full"
          width={heatmapWidth}
          height={heatMapHeight}
        >
          <rect
            height={heatMapHeight}
            width={hourGroupWidth}
            className="fill-indigo-600"
          />
          <Heatmap
            hourGroupWidth={hourGroupWidth}
            plotData={dataset}
            colorScale={colorScale as any}
            widthScale={widthScale}
            rectWidth={rectWidth}
            handleHourGroupClick={handleHourGroupClick}
          />
        </svg>
      </div>
    </div>
  );
};
