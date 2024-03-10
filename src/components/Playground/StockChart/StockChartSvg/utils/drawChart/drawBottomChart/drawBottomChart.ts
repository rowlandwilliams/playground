import { brushX } from "d3-brush";
import { NumberValue, ScaleLinear, ScaleTime, scaleTime } from "d3-scale";
import { ConvertedData, StockData } from "@/types/playground/stock-chart";
import { bottomChartHeight, margin } from "../../utils";
import {
  getChartPlottingFunctions,
  plotTopChartStockLinesAndAreas,
} from "../common-utils";
import { updateTopChart } from "./updateTopChart/updateTopChart";
import {
  getBottomChartScalesAndAxes,
  getBottomChartSelections,
  updateBottomAreaWhileBrushing,
  updateBrushOnMove,
} from "./utils";
import { Selection } from "d3-selection";
import { Axis } from "d3-axis";

export const drawBottomChart = (
  companyName: string,
  stockData: StockData[],
  width: number,
  bottomChartGroup: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  fullDatesDomain: number[],
  fullStocksDomain: number[],
  convertedData: ConvertedData[],
  xTop: ScaleTime<number, number, never>,
  xAxisGroupTop: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  xAxisTop: Axis<NumberValue | Date>,
  linesGroupTop: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  yTop: ScaleLinear<number, number, never>,
  yAxisGroupTop: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  yAxisTop: Axis<NumberValue>,
  activeDatesDomain: number[],
  areaGroupTop: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  offsetLeft: number
) => {
  const { xAxisGroupBottom, linesGroupBottom, areaGroupBottom, brushGroup } =
    getBottomChartSelections(companyName, bottomChartGroup);

  const { xBottom, yBottom, xAxisBottom } = getBottomChartScalesAndAxes(
    fullDatesDomain,
    fullStocksDomain,
    width
  );

  // plot bottom x axis
  xAxisGroupBottom
    .attr("transform", `translate(0, ${bottomChartHeight - margin})`)
    .call(xAxisBottom);

  const xBottomArea = scaleTime().domain(activeDatesDomain);
  xBottomArea.range([0, width / 2]);

  // define line and area functions
  const { plotStockLines, plotStockArea } = getChartPlottingFunctions(
    xBottom,
    yBottom,
    bottomChartHeight - margin
  );

  // define brush function for bottom graph
  var brush: any = brushX()
    .extent([
      // area that we want the brush to be available for (whole bottom graph)
      [0, 0],
      [width, bottomChartHeight - margin],
    ]) // upon brush change, update top chart
    .on("brush", (event) => {
      updateBottomAreaWhileBrushing(event, xBottom);
    })
    .on("end", (event) => {
      updateTopChart(
        event,
        xBottom,
        stockData,
        xAxisGroupTop,
        xTop,
        xAxisTop,
        linesGroupTop,
        convertedData,
        yAxisGroupTop,
        yTop,
        yAxisTop,
        brushGroup,
        brush,
        width,
        areaGroupTop,
        offsetLeft
      );
    });

  updateBrushOnMove(brushGroup, brush, xBottom, activeDatesDomain, width);

  plotTopChartStockLinesAndAreas(
    areaGroupBottom,
    convertedData,
    plotStockArea,
    linesGroupBottom,
    plotStockLines
  );
};
