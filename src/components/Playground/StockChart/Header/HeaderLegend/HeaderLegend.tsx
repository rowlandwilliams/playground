import { supernovaColors } from "../../StockChartSvg/utils/utils";
import { HeaderLegendItem } from "./HeaderLegendItem/HeaderLegendItem";

interface Props {
  stockKeys: string[];
}

export const HeaderLegend = ({ stockKeys }: Props) => {
  return (
    <div className="flex text-xs sm:text-xs">
      {stockKeys.map((stockKey, i) => (
        <HeaderLegendItem
          key={stockKey}
          stockKey={stockKey}
          textColor={supernovaColors[i]}
        />
      ))}
    </div>
  );
};
