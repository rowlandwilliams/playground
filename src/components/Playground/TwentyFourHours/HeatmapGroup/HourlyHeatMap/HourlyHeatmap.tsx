import { ScaleLinear } from "d3-scale";
import { TenMinuteColumn } from "./TenMinuteColumn/TenMinuteColumn";
import classNames from "classnames";
import { act } from "react-dom/test-utils";

interface Props {
  x: number;
  y: number;
  index: number;
  gridData: number[];
  colorScale: ScaleLinear<number, number, never>;
  widthScale: ScaleLinear<number, number, never>;
  rectWidth: number;
  handleHourGroupClick: (hour: number) => void;
  hourGroupWidth: number;
  activeHour: number;
}

const nCellsPerRow = 6;
const nCellsPerColumn = 10;

export const HourlyHeatmap = ({
  x,
  y,
  index,
  gridData,
  colorScale,
  rectWidth,
  widthScale,
  handleHourGroupClick,
  hourGroupWidth,
  activeHour,
}: Props) => {
  const active = activeHour === index;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className={classNames(
        "stroke-current text-chart-gray stroke-1 md:stroke-2",
        { "opacity-60": !active }
      )}
      onClick={() => handleHourGroupClick(index)}
    >
      <g transform={`translate(0, ${y / 4})`}>
        {[...Array(nCellsPerRow)].map((minute, i) => (
          <TenMinuteColumn
            rectWidth={rectWidth}
            colData={gridData.slice(
              i * nCellsPerColumn,
              i * nCellsPerColumn + nCellsPerColumn
            )}
            xTransform={i * rectWidth}
            key={Math.random()}
            colorScale={colorScale}
            widthScale={widthScale}
          />
        ))}
      </g>
      <text
        className={classNames("text-xs fill-current stroke-0", {
          "text-pink-500 dark:text-green-400": active,
          "dark:text-gray-200": !active,
        })}
      >
        {index < 10 ? `0${index}` : index}
      </text>
      {active && (
        <rect
          height={5}
          width={hourGroupWidth - 25}
          className="fill-pink-500 dark:fill-green-400 stroke-none"
          y={-6}
          x={20}
        />
      )}
    </g>
  );
};
