import classNames from "classnames";
import { pointGroups } from "../../../GroupSelectors/utils/utils";
import { ZoomGraphTooltipRow } from "./ZoomGraphTooltipRow/ZoomGraphTooltipRow";
import { ZoomGraphTooltipTriangle } from "./ZoomGraphTooltipTriangle/ZoomGraphTooltipTriangle";
import { CoordsWithTooltipData } from "@/types/playground/cluster-analysis";

interface Props {
  pointIsHovered: boolean;
  coordsAndTooltipData: CoordsWithTooltipData;
}

export const ZoomGraphTooltip = ({
  pointIsHovered,
  coordsAndTooltipData,
}: Props) => {
  const {
    coords: { x: xCoord, y: yCoord },
    tooltipData: { x: xValue, y: yValue, group },
  } = coordsAndTooltipData;
  const { bgClass, textClass, borderClass } = pointGroups[group];

  return (
    <article
      className={classNames(
        "absolute bg-white rounded-sm pointer-events-none transition-opacity duration-500 -translate-y-full -translate-x-1/2",
        {
          "opacity-0": !pointIsHovered,
          "opacity-100": pointIsHovered,
        }
      )}
      style={{ top: yCoord, left: xCoord }}
    >
      <div className="relative h-full p-2 space-y-2">
        <section className="text-dark-gray space-y-2 font-medium">
          <ZoomGraphTooltipRow
            metric="x"
            value={xValue}
            bgClass={bgClass}
            textClass={textClass}
            borderClass={borderClass}
          />
          <ZoomGraphTooltipRow
            metric="y"
            value={yValue}
            bgClass={bgClass}
            textClass={textClass}
            borderClass={borderClass}
          />
        </section>
        <ZoomGraphTooltipTriangle />
      </div>
    </article>
  );
};
