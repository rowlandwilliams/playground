import { useSelector } from "react-redux";
import { capitalizeString } from "../../../StockChartSvg/utils/utils";
import { GraphSvg } from "./GraphSvg/GraphSvg";
import { RootState } from "@/components/Playground/StockChart/reducers";
import { TooltipDifferenceObject } from "@/types/playground/stock-chart";

interface Props {
  stockKey: string;
  textColor: string;
}

export const HeaderLegendItem = ({ stockKey, textColor }: Props) => {
  const { topChartIsHovered } = useSelector((state: RootState) => state);

  const tooltipDifferences = useSelector((state: RootState) => state)
    .tooltipDifferences as TooltipDifferenceObject;

  const tooltipDifference = Number(tooltipDifferences[stockKey].toFixed(2));
  return (
    <div
      className="flex justify-center items-center mx-2 w-2/4 sm:w-16"
      style={{ color: textColor }}
    >
      <GraphSvg
        svgColor={textColor}
        topChartIsHovered={topChartIsHovered}
        tooltipDifferenceIsPositive={tooltipDifference > 0}
      />
      <div className="">
        {topChartIsHovered
          ? (tooltipDifference > 0 ? "+" : "") + tooltipDifference
          : capitalizeString(stockKey)}
      </div>
    </div>
  );
};
