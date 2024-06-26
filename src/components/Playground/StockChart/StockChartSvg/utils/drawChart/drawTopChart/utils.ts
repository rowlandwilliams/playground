import { select, Selection, pointer } from "d3-selection";
import { ScaleLinear, ScaleTime } from "d3-scale";
import { bisect } from "d3-array";
import {
  brushColor,
  capitalizeString,
  margin,
  supernovaColors,
  topChartHeight,
} from "../../utils";
import { store } from "@/components/Playground/StockChart/reducers";
import {
  ConvertedData,
  TooltipDifferenceObject,
} from "@/types/playground/stock-chart";
import { setTooltipDifference } from "@/components/Playground/StockChart/actions";

export const focusDateTextRectWidth = 65;

export const getTopChartSelections = (
  companyName: string,
  topChartGroup: Selection<SVGSVGElement, unknown, HTMLElement, any>
) => {
  const focusGroup = topChartGroup.select<SVGSVGElement>(
    `#focus-${companyName}`
  );
  return {
    areaGroup: select<SVGSVGElement, unknown>(`#area-${companyName}`),
    focusGroup: focusGroup,
    focusLine: focusGroup.select<SVGSVGElement>("line"),
    focusCircles: focusGroup.selectAll<SVGSVGElement, unknown>("circle"),
    focusText: focusGroup.selectAll<SVGSVGElement, unknown>(
      ".tooltip-diff-text"
    ),
    focusTextRects: focusGroup.select<SVGSVGElement>("#tooltip-diff-rect"),
    focusDateText: focusGroup.select<SVGSVGElement>("#tooltip-date-text"),
    focusDateTextRect: focusGroup.select<SVGSVGElement>("#tooltip-date-rect"),
  };
};

export const updateTopChartAxesDomains = (
  x: ScaleTime<number, number, never>,
  y: ScaleLinear<number, number, never>,
  activeDatesDomain: number[],
  activeStocksDomain: number[],
  svgWidth: number
) => {
  x.domain(activeDatesDomain).range([0, svgWidth]);
  y.domain(activeStocksDomain).range([topChartHeight - margin, margin]);
};

const chartBackgroundColor = "#1a1b3e";

export const addFocusLineCirclesAndText = (
  focusLine: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  focusCircles: Selection<SVGSVGElement, unknown, SVGSVGElement, unknown>,
  convertedData: ConvertedData[],
  focusText: Selection<SVGSVGElement, unknown, SVGSVGElement, unknown>,
  focusDateText: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  focusDateTextRect: Selection<SVGSVGElement, unknown, HTMLElement, any>
) => {
  focusDateText.data(convertedData).attr("font-size", "0.6rem");

  focusDateTextRect.attr("width", focusDateTextRectWidth);

  focusLine
    .attr("stroke", "white")
    .attr("stroke-svgWidth", 1)
    .attr("shape-rendering", "crispEdges")
    .attr("opacity", 0)
    .attr("y2", topChartHeight - margin);

  focusCircles
    .data(convertedData)
    .join("circle")
    .attr("opacity", 0)
    .attr("r", "4")
    .attr("fill", (d, i) => supernovaColors[i])
    .attr("stroke", chartBackgroundColor)
    .attr("stroke-svgWidth", 2);

  focusText
    .data(convertedData)
    .join("text")
    .attr("class", "tooltip-diff-text")
    .attr("fill", (d, i) => supernovaColors[i]);
};

// mousmove function for when svg is hovered
export const mousemove = (
  event: PointerEvent,
  x: ScaleTime<number, number, never>,
  y: ScaleLinear<number, number, never>,
  dates: number[],
  focusLine: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  focusCircles: Selection<SVGSVGElement, unknown, SVGSVGElement, unknown>,
  focusText: Selection<SVGSVGElement, unknown, SVGSVGElement, unknown>,
  focusTextRects: Selection<SVGSVGElement, unknown, HTMLElement, unknown>,
  focusDateText: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  focusDateTextRect: Selection<SVGSVGElement, unknown, HTMLElement, any>,
  width: number,
  latestStock: number
) => {
  // height of one label
  const textHeight = 20;

  // get x mouse position
  const xMouse = pointer(event)[0];
  const yMouse = pointer(event)[1];

  if (yMouse < topChartHeight) {
    // convert mouse coordinate to date based on x scale
    const x0 = x.invert(pointer(event)[0]).getTime();

    // determine the index of the date in dates array that is closest to x0
    const idx = bisect(dates, x0, 1);

    // define dates one before and at index
    const d0 = dates[idx - 1];
    const d1 = dates[idx];

    // determine date value that will be used to position x value of verticla line / tooltip
    const dFinal = x0 - d0 > d1 - x0 ? d1 : d0;
    const idxFinal = x0 - d0 > d1 - x0 ? idx : idx - 1;

    // translate line based on current x value
    focusLine
      .attr("opacity", 1)
      .attr("transform", "translate(" + x(dFinal) + ",0)");

    // translate circle based on current x and y value
    focusCircles
      .attr("opacity", 1)
      .attr("cx", x(dFinal))
      .attr("cy", (d: any) => y(d.values[idxFinal].value));

    // for the given date get the value for each stockMetric
    const sequentialLineData: number[] = [];

    const sequentialLineDateObj = {} as TooltipDifferenceObject;

    // for each label grab data value associated with it and push to array and object
    focusText.each((d: any) => {
      sequentialLineData.push(d.values[idxFinal].value);
      sequentialLineDateObj[d.stockMetric] =
        d.values[idxFinal].value - latestStock;
    });

    // set tooltip diff state
    store.dispatch(setTooltipDifference(sequentialLineDateObj));

    // sort in descneding order (for y positioning)
    sequentialLineData.sort().reverse();
    const length = sequentialLineData.length;

    // calulcate the mid of all four values for a given date (for mid positioning of tooltip box)
    const midStockValue =
      sequentialLineData[length - 1] -
      (sequentialLineData[length - 1] - sequentialLineData[0]) / 2;

    const textWidths: number[] = [];

    // for a given data point, calculate the widths of each label
    focusText.each((d, i, nodes) => {
      const node = select(nodes[i]).node() as SVGSVGElement;
      const width = node.getBBox().width;
      textWidths.push(width + 10);
    });

    // use maximum to caluclate tooltip width
    const maxTextWidth = Math.max(...textWidths);
    const maxTextWidthAndOffset = maxTextWidth + 5;

    // translate tooltip rectangle
    focusTextRects
      .attr("rx", 2)
      .attr("fill", "white")
      .attr("stroke", "#e5e7eb")
      .attr("width", maxTextWidth)
      .attr("height", "80px")
      .attr("transform", (d: any, i) =>
        getTooltipRectTranslationFromData(
          x,
          dFinal,
          xMouse,
          width,
          maxTextWidthAndOffset,
          y,
          midStockValue,
          i,
          textHeight
        )
      );

    // translate tooltip text
    focusText
      .text(
        (d: any) =>
          capitalizeString(d.stockMetric) +
          ": " +
          d.values[idxFinal].value.toFixed(2)
      )
      .attr("font-size", "0.75rem")
      .attr("transform", (d: any, i) =>
        getTooltipTextTranslationFromData(
          sequentialLineData,
          d,
          idxFinal,
          x,
          xMouse,
          width,
          maxTextWidthAndOffset,
          y,
          midStockValue,
          textHeight,
          dFinal
        )
      )
      .attr("text-anchor", "start");

    // tranalate rect behind date (to cover x axis labels)
    focusDateTextRect.attr("transform", (d: any, i, nodes) => {
      return `translate(${x(dFinal) - focusDateTextRectWidth / 2}, ${
        topChartHeight - margin // date rect has width 70px
      })`;
    });

    // translate text
    focusDateText
      .text(new Date(dFinal).toLocaleDateString())
      .attr("transform", (d: any, i, nodes) =>
        getDateTextTranslationFromData(x, dFinal, width, y, i, nodes)
      );
  }
};

// translate text labels based on value at a given date
const getTooltipTextTranslationFromData = (
  sequentialLineData: number[],
  d: any,
  idxFinal: number,
  x: ScaleTime<number, number, never>,
  xMouse: number,
  width: number,
  maxTextWidthAndOffset: number,
  y: ScaleLinear<number, number, never>,
  midStockValue: number,
  textHeight: number,
  dFinal: number
) => {
  // distance between tooltip and point
  const offset = 15;

  // determine position of rectangle based on y value
  const index = sequentialLineData.indexOf(d.values[idxFinal].value);

  return (
    "translate(" +
    (x(dFinal) +
      (xMouse > width - maxTextWidthAndOffset
        ? -maxTextWidthAndOffset
        : offset)) +
    "," + // multiply index by textheight to determine vertical position of each label in tooltip
    (y(midStockValue) + index * textHeight - 25) +
    ")"
  );
};

// translate text rectablges based on value at a given date
const getTooltipRectTranslationFromData = (
  x: ScaleTime<number, number, never>,
  dFinal: number,
  xMouse: number,
  width: number,
  maxTextWidthAndOffset: number,
  y: ScaleLinear<number, number, never>,
  midStockValue: number,
  i: number,
  textHeight: number
) => {
  return (
    "translate(" +
    (x(dFinal) +
      (xMouse > width - maxTextWidthAndOffset
        ? -maxTextWidthAndOffset - 5
        : margin / 2) +
      "," +
      (y(midStockValue) + i * textHeight - 2 * textHeight) +
      ")")
  );
};

const getDateTextTranslationFromData = (
  x: ScaleTime<number, number, never>,
  dFinal: number,
  width: number,
  y: ScaleLinear<number, number, never>,
  i: number,
  nodes: SVGSVGElement[] | ArrayLike<SVGSVGElement>
) => {
  const scaledXValue = x(dFinal);
  // if at rights hand side of x axis translate back to left to prevent cutoff
  if (scaledXValue > width - focusDateTextRectWidth / 2)
    return `translate(${width - focusDateTextRectWidth + 10}, ${
      topChartHeight - margin / 2 // date rect has width 70px
    })`;

  // if close to left side offset to right to prevent cutoff
  if (scaledXValue < focusDateTextRectWidth / 2)
    return `translate(0, ${
      topChartHeight - margin / 2 // date rect has width 70px
    })`;

  const node = select(nodes[i]).node() as SVGSVGElement;
  const nodeWidth = node.getBBox().width;
  return `translate(${x(dFinal) - nodeWidth / 2}, ${
    topChartHeight - margin / 2
  })`;
};
