import { useDispatch } from "react-redux";
import { focusDateTextRectWidth } from "../utils/drawChart/drawTopChart/utils";
import { margin, topChartHeight } from "../utils/utils";
import { setTopChartIsHovered } from "../../actions";

interface Props {
  companyTicker: string;
  getClassFromChartHover: () => string;
}

export const TopChartElements = ({
  companyTicker,
  getClassFromChartHover,
}: Props) => {
  const dispatch = useDispatch();
  return (
    <g
      id={`top-chart-group-${companyTicker}`}
      height={topChartHeight}
      transform={`translate(0,${margin})`}
      onMouseOver={() => dispatch(setTopChartIsHovered(true))}
      onMouseOut={() => dispatch(setTopChartIsHovered(false))}
    >
      <g
        id={`x-axis-${companyTicker}`}
        className={getClassFromChartHover()}
      ></g>
      <g
        id={`y-axis-${companyTicker}`}
        className={getClassFromChartHover()}
      ></g>
      <g id={`area-${companyTicker}`}></g>
      <g id={`lines-${companyTicker}`}></g>
      <g id={`focus-${companyTicker}`}>
        <line></line>
        <rect
          id="tooltip-date-rect"
          width={focusDateTextRectWidth}
          height="20px"
          className="fill-zinc-100 dark:fill-chart-gray"
        ></rect>
        <text
          id="tooltip-date-text"
          className="fill-zinc-600 dark:fill-zinc-300"
        ></text>
        <rect id="tooltip-diff-rect"></rect>
      </g>
    </g>
  );
};
