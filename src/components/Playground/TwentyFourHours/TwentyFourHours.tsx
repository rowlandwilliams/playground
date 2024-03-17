"use client";

import { useState } from "react";
import { dataset, getHourGroupWidth, getWidthScale } from "./utils/plot-utils";
import { Heatmap } from "./HeatmapGroup/Heatmap";
import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";
import { nMinPerHour } from "./utils/numbers";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { PlaygroundVizWrapper } from "../PlaygroundVizWrapper/PlaygroundVizWrapper";

export const Visualisation = () => {
  const [activeHour, setActiveHour] = useState(11);
  const handleHourGroupClick = (hour: number) => setActiveHour(hour);

  const {
    ref: lineGraphRef,
    graphWidth: lineGraphWidth,
    graphHeight: lineGraphHeight,
  } = useResponsiveGraphDims();
  const {
    ref: heatMapRef,
    graphHeight: heatMapHeight,
    graphWidth: heatMapWidth,
  } = useResponsiveGraphDims();
  const loaded = lineGraphHeight > 0;

  const { hourGroupWidth, hourGroupHeight, rectWidth, bubbleHeight } =
    getHourGroupWidth({ lineGraphWidth, lineGraphHeight, heatMapWidth });

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
    .range(["#FFFA7A", "#FF6868", "#512FFF"] as any);

  const nMinutes = 60;
  const barWidth = lineGraphWidth / nMinutes;

  const tooltipContent = (
    <div className="w-60 space-y-2">
      <p>
        An experimental interface for visualising by-minute events occurring in
        a 24 hour period.
      </p>
      <p>
        Click an hour to view the events which occur in each minute of each
        hour.
      </p>
      <p>Still a work in progress 👀</p>
    </div>
  );

  return (
    <PlaygroundVizWrapper
      tooltipContent={tooltipContent}
      codeLink="https://github.com/rowlandwilliams/playground/blob/main/src/components/Playground/TwentyFourHours/TwentyFourHours.tsx"
    >
      <div className="flex flex-col grow space-y-4 overflow-auto bg-zinc-100 dark:bg-chart-gray pt-8 pb-2 px-4 rounded-md">
        <div className="grow min-w-[1000px] overflow-x-auto" ref={lineGraphRef}>
          {loaded && (
            <svg
              className="grow border-b dark:border-gray-700"
              width="100%"
              height={lineGraphHeight}
            >
              <g className="fill-current text-header-gray hover:bg-chart-purple">
                {barChartData.map((d, i) => (
                  <>
                    <Bar
                      key={i}
                      x={xScale(i)}
                      y={barYScale(d)}
                      width={xScale.bandwidth()}
                      height={lineGraphHeight - barYScale(d)}
                      fill={colorScale(d) as string}
                      rx={2}
                    />
                  </>
                ))}
              </g>
            </svg>
          )}
        </div>
        <div
          ref={heatMapRef}
          className="h-[150px] overflow-x-auto  min-w-[1000px]"
        >
          <svg className="w-full" width={heatMapWidth} height={heatMapHeight}>
            <Heatmap
              hourGroupWidth={hourGroupWidth}
              plotData={dataset}
              colorScale={colorScale as any}
              widthScale={widthScale}
              rectWidth={rectWidth}
              handleHourGroupClick={handleHourGroupClick}
              activeHour={activeHour}
            />
          </svg>
        </div>
      </div>
    </PlaygroundVizWrapper>
  );
};
