import { ScaleLinear } from "d3-scale";
import { margin, nHoursPerDay, nMinPerHour } from "../utils/numbers";
import { HourlyHeatmap } from "./HourlyHeatMap/HourlyHeatmap";

interface Props {
  hourGroupWidth: number;
  plotData: number[];
  colorScale: ScaleLinear<number, number, never>;
  widthScale: ScaleLinear<number, number, never>;
  rectWidth: number;
  handleHourGroupClick: (hour: number) => void;
  activeHour: number;
}

export const Heatmap = ({
  hourGroupWidth,
  plotData,
  colorScale,
  widthScale,
  rectWidth,
  handleHourGroupClick,
  activeHour,
}: Props) => {
  return (
    <g transform={`translate(3,0)`}>
      {[...Array(nHoursPerDay)].map((hour, i) => (
        <HourlyHeatmap
          handleHourGroupClick={handleHourGroupClick}
          key={hourGroupWidth + Math.random()}
          x={hourGroupWidth * i}
          y={margin.top}
          index={i}
          gridData={plotData.slice(
            i * nMinPerHour,
            i * nMinPerHour + nMinPerHour
          )}
          colorScale={colorScale}
          rectWidth={rectWidth}
          widthScale={widthScale}
          hourGroupWidth={hourGroupWidth}
          activeHour={activeHour}
        />
      ))}
    </g>
  );
};
