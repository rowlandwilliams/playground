import { companyStockData } from "../data/companyStockData";
import { stockKeys } from "../StockChartSvg/utils/utils";
import { HeaderLegend } from "./HeaderLegend/HeaderLegend";
import { HeaderText } from "./HeaderText/HeaderText";
import { TimeLabels } from "./TimeLabels/TimeLabels";

interface Props {
  companyTicker: string;
  latestStock: number;
  latestDate: number;
}

export const Header = ({ companyTicker, latestStock, latestDate }: Props) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-zinc-800 dark:text-zinc-200 rounded-t-md justify-between ">
        <div className="flex gap-4">
          <HeaderText
            boldText={companyTicker.toUpperCase()}
            subText={companyStockData[companyTicker].name}
          />
          <HeaderText
            boldText={latestStock.toFixed(2)}
            subText="USD"
            boldTextMarginRight={2}
          />
        </div>
        <HeaderLegend stockKeys={stockKeys} />
        <div className="flex w-full justify-end">
          <TimeLabels latestDate={latestDate} />
        </div>
      </div>
    </>
  );
};
