import { useEffect, useRef, useState } from "react";
import {
  margin,
  svgHeight,
  stockKeys,
  getInitialChartSelections,
} from "./utils/utils";
import { scaleLinear } from "d3-scale";
import { axisBottom, axisLeft } from "d3-axis";
import { drawTopChart } from "./utils/drawChart/drawTopChart/drawTopChart";
import { drawBottomChart } from "./utils/drawChart/drawBottomChart/drawBottomChart";
import classNames from "classnames";
import { useSelector } from "react-redux";
import {
  convertStockDataForChart,
  getActiveMinMaxStock,
  getFullDatesDomain,
  getFullStockDomain,
  xAxisScale,
} from "./utils/drawChart/common-utils";
import { BottomChartClipPath } from "./BottomChartClipPath/BottomChartClipPath";
import { Defs } from "./Defs/Defs";
import { TopChartElements } from "./TopChartElements/TopChartElements";
import { BottomChartElements } from "./BottomChartElements/BottomChartElements";
import { RootState } from "../reducers";
import { StockData, TimeLabel } from "@/types/playground/stock-chart";
import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";

interface Props {
  stockData: StockData[];
  activeTimeLabelObject: TimeLabel;
  companyTicker: string;
  latestDate: number;
  chartIsHovered: boolean;
  latestStock: number;
}

export const StockChartSvg = ({
  stockData,
  activeTimeLabelObject,
  companyTicker,
  latestDate,
  chartIsHovered,
  latestStock,
}: //
Props) => {
  // define ref for parent container
  const parentRef = useRef<HTMLInputElement>(null);
  const { ref, graphHeight, graphWidth } = useResponsiveGraphDims();
  // set intial width of svg container
  const [width, setWidth] = useState(0);
  const [offsetLeft, setOffsetLeft] = useState(0);

  // convert data to required format
  const convertedData = convertStockDataForChart(stockData);

  const fullDatesDomain = getFullDatesDomain(stockData);
  const fullStocksDomain = getFullStockDomain(stockData);

  const visibleDatesDomain = useSelector(
    (state: RootState) => state.visibleDatesDomain
  );

  // calculate stocks domain for y axis scaling
  const activeStocksDomain = getActiveMinMaxStock(
    stockData,
    visibleDatesDomain
  );

  // determine latest date

  //on page load set svg height
  useEffect(() => {
    const { current } = parentRef;
    if (current) {
      setWidth(current.offsetWidth);
      setOffsetLeft(current.offsetLeft);

      // add resize listener
      window.addEventListener("resize", () => {
        setWidth(current.offsetWidth);
        setOffsetLeft(current.offsetLeft);
      });
      return () => {
        window.removeEventListener("resize", () => {
          setWidth(current.offsetWidth);
          setOffsetLeft(current.offsetLeft);
        });
      };
    }
  }, [parentRef]);

  // each time time period button is clicked transition lines
  useEffect(() => {
    const {
      topChartGroup,
      bottomChartGroup,
      xAxisGroup,
      yAxisGroup,
      linesGroup,
      areaGroup,
    } = getInitialChartSelections(companyTicker);

    // define x axis scale
    const x = xAxisScale(visibleDatesDomain, width);
    const y = scaleLinear();

    // define x axis
    const xAxis = axisBottom(x).tickSize(0);
    const yAxis = axisLeft(y).tickSize(-width).ticks(5);

    // draw lines
    drawTopChart(
      xAxisGroup,
      yAxisGroup,
      linesGroup,
      companyTicker,
      x,
      y,
      visibleDatesDomain,
      activeStocksDomain,
      width,
      xAxis,
      yAxis,
      convertedData,
      margin,
      stockData.map((x) => x.date),
      topChartGroup,
      latestStock
    );

    drawBottomChart(
      companyTicker,
      stockData,
      width,
      bottomChartGroup,
      fullDatesDomain,
      fullStocksDomain,
      convertedData,
      x,
      xAxisGroup,
      xAxis,
      linesGroup,
      y,
      yAxisGroup,
      yAxis,
      visibleDatesDomain,
      areaGroup,
      offsetLeft
    );
  });

  const getClassFromChartHover = (controlLineOpacityOnHover: boolean = false) =>
    classNames("text-white text-opacity-50 transition duration-150", {
      "opacity-1":
        chartIsHovered || (controlLineOpacityOnHover && !chartIsHovered),
      "opacity-80": chartIsHovered && controlLineOpacityOnHover,
      "opacity-0": !chartIsHovered && !controlLineOpacityOnHover,
    });

  return (
    <div className="w-full rounded-b-md" ref={parentRef}>
      <svg width="100%" height={svgHeight} id={`chart-svg-${companyTicker}`}>
        <BottomChartClipPath />
        <Defs stockKeys={stockKeys} />
        <TopChartElements
          companyTicker={companyTicker}
          getClassFromChartHover={getClassFromChartHover}
        />
        <BottomChartElements
          companyTicker={companyTicker}
          getClassFromChartHover={getClassFromChartHover}
        />
      </svg>
    </div>
  );
};
