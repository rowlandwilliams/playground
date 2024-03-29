import { Selection, pointer, select } from "d3-selection";
import { NumberValue, ScaleLinear, ScaleTime } from "d3-scale";
import { plotTopChartAxes } from "../../common-utils";
import { Axis } from "d3-axis";

export const updateTopChartAxesFromBrush = (
  xTop: ScaleTime<number, number, never>,
  brushedDatesDomain: number[],
  yTop: ScaleLinear<number, number, never>,
  brushedStocksDomain: number[],
  xAxisGroupTop: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  yAxisGroupTop: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  xAxisTop: Axis<NumberValue | Date>,
  yAxisTop: Axis<NumberValue>
) => {
  // update top chart x axis with brushed x domain
  xTop.domain(brushedDatesDomain);
  // update top chart y axis with new domain
  yTop.domain(brushedStocksDomain);

  plotTopChartAxes(xAxisGroupTop, yAxisGroupTop, xAxisTop, yAxisTop);
};

export const clipBottomChartAreaToBrush = (
  xBottom: ScaleTime<number, number, never>,
  brushedDatesDomain: number[]
) => {
  const bottomChartAreaClip = select("#area-crop-left > rect");
  bottomChartAreaClip
    .attr(
      "width",
      xBottom(brushedDatesDomain[1]) - xBottom(brushedDatesDomain[0])
    )
    .attr("x", xBottom(brushedDatesDomain[0]));
};

export const getNewViewExtentOnBrushClick = (
  event: any,
  offsetLeft: number,
  svgWidth: number
) => {
  const xPointer = pointer(event)[0] - offsetLeft;
  const viewWidth = 100;

  if (xPointer < viewWidth / 2) return [0, viewWidth];
  if (xPointer > svgWidth - viewWidth / 2)
    return [svgWidth - viewWidth, svgWidth];

  return [xPointer - viewWidth / 2, xPointer + viewWidth / 2];
};
