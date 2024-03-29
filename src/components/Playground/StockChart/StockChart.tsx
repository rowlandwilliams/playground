"use client";

import { useState } from "react";
import { companyStockData } from "./data/companyStockData";
import { timeLabels } from "./data/timeLabels";
import { StockChartSvg } from "./StockChartSvg/StockChartSvg";
import { Header } from "./Header/Header";
import { Provider } from "react-redux";
import { store } from "./reducers";
import { PlaygroundVizWrapper } from "../PlaygroundVizWrapper/PlaygroundVizWrapper";
import classNames from "classnames";
import Link from "next/link";
import { NavbarPlaygroundLink } from "@/components/Navbar/NavbarPlaygroundLink/NavbarPlaygroundLink";

interface Props {
  companyTicker: string;
  isHomepage?: boolean;
}

export const StockChart = ({ companyTicker, isHomepage = false }: Props) => {
  const [chartIsHovered, setChartIsHovered] = useState(false);

  // define company data based on provided company name
  const stockData = companyStockData[companyTicker].data.map(
    (stockObj: any) => ({
      ...stockObj,
      date: Date.parse(stockObj.date),
    })
  );

  // set initially active time period (1Y)
  const activeTimeLabelObject = timeLabels[timeLabels.length - 1];

  const { date, high } = stockData.slice(-1)[0];

  const tooltipContent = (
    <div className="w-48 space-y-2">
      <p>An interactive area chart for visualising stock data.</p>
    </div>
  );

  const title = isHomepage ? (
    <NavbarPlaygroundLink text="View more" noIcon />
  ) : undefined;

  return (
    <PlaygroundVizWrapper
      title={title}
      tooltipContent={tooltipContent}
      codeLink="https://github.com/rowlandwilliams/playground/blob/main/src/components/Playground/StockChart/StockChart.tsx"
    >
      <Provider store={store}>
        <div
          className={classNames(
            "w-full px-4  mb-2 dark:bg-chart-gray text-white font-medium rounded-lg",
            { "pt-4": isHomepage }
          )}
          id="chart-container"
          onMouseEnter={() => setChartIsHovered(true)}
          onMouseLeave={() => setChartIsHovered(false)}
        >
          <Header
            companyTicker={companyTicker}
            latestStock={high}
            latestDate={date}
          />
          <StockChartSvg
            stockData={stockData}
            activeTimeLabelObject={activeTimeLabelObject}
            companyTicker={companyTicker}
            latestDate={date}
            chartIsHovered={chartIsHovered}
            latestStock={high}
          />
        </div>
      </Provider>
    </PlaygroundVizWrapper>
  );
};
