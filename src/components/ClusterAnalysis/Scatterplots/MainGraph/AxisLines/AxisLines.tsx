import { graphMargin } from "../../utils/shared";

interface Props {
  graphWidth: number;
  graphHeight: number;
}

export const AxisLines = ({ graphWidth, graphHeight }: Props) => {
  return (
    <g className="stroke-current text-chart-grid-grey font-inconsolata-regular">
      <line
        x1={graphMargin.left}
        x2={graphWidth - graphMargin.right}
        y1={graphHeight / 2}
        y2={graphHeight / 2}
      ></line>
      <line
        y1={graphMargin.left}
        y2={graphHeight - graphMargin.right}
        x1={graphWidth / 2}
        x2={graphWidth / 2}
      ></line>
    </g>
  );
};
