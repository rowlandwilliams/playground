import { scaleLinear } from "d3-scale";
import { interpolateRgb } from "d3-interpolate";
import { nHoursPerDay, padding, nCellsPerRow } from "./numbers";
import { plotData, barData } from "./data";
import { select } from "d3-selection";

//// SELECTIONS ////
export const getXAxisSelection = (index: number, graphName = "line") => {
  return select<SVGGElement, unknown>(`#${graphName}-x-axis-${index}`);
};

//// MIN / MAX ////
const allDataMin = Math.min(...plotData);
const allDataMax = Math.max(...plotData);
const barDataMin = Math.min(...barData.flat());
const barDataMax = Math.max(...barData.flat());
const minBubbleRadius = 0.02;
const maxBubbleRadius = 9;

//// SCALES ////
// Heatmap color
export const allDataColorScale = scaleLinear()
  .domain([allDataMin, allDataMax * 0.5, allDataMax])
  .range(["#FFFA7A", "#FF6868", "#512FFF"] as any)
  .interpolate(interpolateRgb.gamma(2.2) as any);

// Heatmap rectangle width
export const getWidthScale = (rectWidth: number) => {
  return scaleLinear()
    .domain([allDataMin, allDataMax])
    .range([rectWidth, rectWidth]);
};

// Line / Bubble Graph y scale
export const getLineGraphYScale = (lineGraphHeight: number) => {
  return scaleLinear()
    .domain([allDataMin, allDataMax])
    .range([lineGraphHeight, 0]);
};

// Bar chart y scale (10 min avgs)
export const getBarChartYScale = (lineGraphHeight: number) => {
  return scaleLinear()
    .domain([Math.min(...barData.flat()), Math.max(...barData.flat())])
    .range([0, lineGraphHeight]);
};

export const barChartColorScale = scaleLinear()
  .domain([barDataMin, barDataMax * 0.5, barDataMax])
  .range(["#FFFA7A", "#FF6868", "#512FFF"] as any)
  .interpolate(interpolateRgb.gamma(2.2) as any);

// Bubble chart radius
export const getBubbleRadiusScale = () => {
  return scaleLinear()
    .domain([allDataMin, allDataMax])
    .range([minBubbleRadius, maxBubbleRadius]);
};

//// DIMENSIONS ////
export const getHourGroupWidth = ({
  lineGraphWidth,
  lineGraphHeight,
  heatMapWidth,
}: {
  lineGraphWidth: number;
  lineGraphHeight: number;
  heatMapWidth: number;
}) => {
  const hourGroupWidth = heatMapWidth / nHoursPerDay;
  const paddedWidth = hourGroupWidth - padding;
  const hourGroupHeight = hourGroupWidth * 2 + padding;

  return {
    hourGroupWidth,
    hourGroupHeight,
    bubbleHeight: lineGraphHeight * 4,
    rectWidth: paddedWidth / nCellsPerRow,
  };
};

const generateDataset = () => {
  const hours = Array.from({ length: 24 }, (_, hour) => {
    let minActivity, maxActivity;

    if (hour >= 6 && hour < 9) {
      // Hours between 6 AM and 9 AM: Moderate activity
      minActivity = Math.floor(Math.random() * 20); // Random minimum activity level
      maxActivity =
        minActivity + Math.floor(Math.random() * (40 - minActivity)); // Random maximum activity level
    } else if (hour >= 9 && hour < 17) {
      // Office hours: Higher activity
      minActivity = Math.floor(Math.random() * 40); // Random minimum activity level
      maxActivity =
        minActivity + Math.floor(Math.random() * (60 - minActivity)); // Random maximum activity level
    } else if (hour >= 17 && hour < 19) {
      // Hours between 5 PM and 7 PM: Moderate activity
      minActivity = Math.floor(Math.random() * 20); // Random minimum activity level
      maxActivity =
        minActivity + Math.floor(Math.random() * (40 - minActivity)); // Random maximum activity level
    } else {
      // Night hours: Lower activity, majority of values are 0
      minActivity = 0;
      maxActivity = 0;
    }

    const meanActivity = (minActivity + maxActivity) / 2; // Mean activity level

    const hourActivity = Array.from({ length: 60 }, (_, idx) => {
      let activity;
      if (idx === 0) {
        activity = 0; // Set the first value of each hour to be zero
      } else {
        // Generate normally distributed random number using Box-Muller transform
        let u = 0,
          v = 0;
        while (u === 0) u = Math.random(); // Converting [0,1) to (0,1)
        while (v === 0) v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v); // Standard normal distribution
        const stdDeviation = hour >= 9 && hour < 17 ? 15 : 5; // Adjust standard deviation
        activity = Math.round(
          Math.max(0, Math.min(60, meanActivity + z * stdDeviation))
        ); // Adjust standard deviation as needed
      }
      return activity;
    });

    return hourActivity;
  });

  // Flatten the array
  return hours.flat();
};

export const dataset = generateDataset();
