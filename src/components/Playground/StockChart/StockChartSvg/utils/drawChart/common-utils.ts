import { scaleTime } from "d3-scale";
import { area, line } from "d3-shape";
import {
  ConvertedData,
  StockData,
  StockValue,
  TimeLabel,
} from "@/types/playground/stock-chart";
import { margin, stockKeys, supernovaColors, topChartHeight } from "../utils";

export const convertStockDataForChart = (stockData: StockData[]) => {
  // wide format to long format
  // convert from [{date: ..., close: ..., ....}, {date: ..., close: ..., ....}....] to
  // [close: [{date: ..., value: ....}, {date: ..., value: ....}...], open: [{date: ..., value: ....}, {date: ..., value: ....}......]
  const convertedData = [] as ConvertedData[];

  stockKeys.forEach((key) => {
    const stockKeyData = [] as StockValue[];

    stockData.map((stockObj: StockData) => {
      const stockValueObj = {} as StockValue;
      stockValueObj.date = stockObj.date;
      stockValueObj.value = stockObj[key];
      return stockKeyData.push(stockValueObj);
    });

    const stockKeyObj = {} as ConvertedData;
    stockKeyObj.stockMetric = key;
    stockKeyObj.values = stockKeyData;
    convertedData.push(stockKeyObj);
  });

  return convertedData;
};

// calculate min and max date in data for x axis
export const getActiveDatesDomain = (
  stockData: StockData[],
  latestDate: number,
  activeTimeLabelObject: TimeLabel
) => {
  const dates = stockData.map((x) => x.date);

  return [
    Math.min(
      ...dates.filter(
        (date) => date > latestDate - activeTimeLabelObject.timescale
      )
    ),
    Math.max(
      ...dates.filter(
        (date) => date > latestDate - activeTimeLabelObject.timescale
      )
    ),
  ];
};

// calculate min and max stock value
export const getActiveMinMaxStock = (
  stockData: StockData[],
  visibleDatesDomain: number[]
) => {
  // filter stockData based on clicked timescale
  const data: number[] = stockData
    .filter(
      (stockObj) =>
        stockObj.date <= visibleDatesDomain[1] &&
        stockObj.date >= visibleDatesDomain[0]
    )
    .map((stockObj: StockData) => stockKeys.map((key) => stockObj[key]))
    .flat();

  // return min max of filtered data
  return [Math.min(...data) - 0.5, Math.max(...data) + 1];
};

export const getFullDatesDomain = (stockData: StockData[]) => {
  const dates = stockData.map((x) => x.date);

  return [Math.min(...dates), Math.max(...dates)];
};

export const getFullStockDomain = (stockData: StockData[]) => {
  const data: number[] = stockData
    .map((stockObj: StockData) => stockKeys.map((key) => stockObj[key]))
    .flat();

  return [Math.min(...data), Math.max(...data)];
};

// scaling function for x axis
export const xAxisScale = (datesDomain: number[], width: number) => {
  return scaleTime().domain(datesDomain).range([0, width]);
};

// calculate min and max stock value
export const getBrushedMinMaxStock = (
  stockData: StockData[],
  latestDate: number,
  earliestDate: number
) => {
  // filter stockData based on clicked timescale
  const data: number[] = stockData
    .filter(
      (stockObj) => stockObj.date <= latestDate && stockObj.date >= earliestDate
    )
    .map((stockObj: StockData) => stockKeys.map((key) => stockObj[key]))
    .flat();

  // return min max of filtered data
  return [Math.min(...data) - 0.5, Math.max(...data) + 1];
};

export const getChartPlottingFunctions = (
  x: any,
  y: any,
  y0Position: number
) => {
  return {
    plotStockLines: line<StockValue>()
      .x((d) => x(d.date))
      .y((d) => y(d.value)),
    plotStockArea: area<StockValue>()
      .x((d) => x(d.date))
      .y0(y0Position)
      .y1((d) => y(d.value)),
  };
};

export const plotTopChartStockLinesAndAreas = (
  areaGroup: any,
  convertedData: ConvertedData[],
  plotStockArea: any,
  linesGroup: any,
  plotStockLines: any
) => {
  areaGroup
    .selectAll("path")
    .data(convertedData)
    .join("path")
    .attr("fill", (d: any, i: any) => `url(#${stockKeys[i]}-top)`)
    .attr("stroke-svgWidth", 0)
    .transition()
    .duration(200)
    .attr("d", (d: any) => plotStockArea(d.values));

  linesGroup
    .selectAll("path")
    .data(convertedData)
    .join("path")
    .attr("fill", "none")
    .attr("stroke", (d: any, i: any) => supernovaColors[i])
    .transition()
    .duration(200)
    .attr("d", (d: any) => plotStockLines(d.values));
};

export const plotTopChartAxes = (
  xAxisGroupTop: any,
  yAxisGroupTop: any,
  xAxisTop: any,
  yAxisTop: any
) => {
  // transition x axis

  xAxisGroupTop
    .attr("transform", `translate(0, ${topChartHeight - margin})`)
    .attr("opacity", 0.8)
    .transition()
    .duration(200)
    .call(xAxisTop.ticks(5))
    .attr("text-anchor", "end");

  yAxisGroupTop
    .attr("transform", `translate(0, ${0})`)
    .attr("opacity", 0.8)
    .transition()
    .duration(200)
    .call(yAxisTop)
    .on("start", () => {
      yAxisGroupTop.select(".domain").remove(); // remove axis line
      yAxisGroupTop
        .selectAll(".tick > line")
        .attr("opacity", 0.5)
        .style("stroke-dasharray", "5 5");
    })
    .selectAll("text")
    .attr("transform", "translate(4, -8)")
    .attr("text-anchor", "start");
};
