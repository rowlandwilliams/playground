import classNames from "classnames";
import { useStore } from "@/store/store";

interface Props {
  name?: string;
  x0?: number | undefined;
  x1?: number | undefined;
  y0?: number | undefined;
  y1?: number | undefined;
  color: string;
  province: string;
  nodeSum: number;
  nodePercentage: number;
  nodeIdKey: string;
}

const textXPadding = 10;
const borderRectWidth = 2;

export const SankeyNode = ({
  name,
  x0,
  x1,
  y0,
  y1,
  color,
  province,
  nodeSum,
  nodePercentage,
  nodeIdKey,
}: Props) => {
  // geneerate unique node id
  const nodeId = name + "-" + nodeIdKey;

  const {
    setNodeIsHovered,
    setNodeTooltipData,
    activeNodes,
    addActiveNode,
    removeActiveNode,
  } = useStore();

  const nodeIsActive = activeNodes.includes(nodeId);
  const nodeIsDestination = (x0 as number) > 0;
  const handlNodeClick = () => {
    return nodeIsActive ? removeActiveNode(nodeId) : addActiveNode(nodeId);
  };

  const handleNodeEnter = () => {
    setNodeIsHovered(true);
    setNodeTooltipData({
      x: x0 as number,
      y: y0 as number,
      province: province,
      nodeColor: color,
      nodeSum: nodeSum,
      nodePercentage: nodePercentage,
    });
  };

  const midPointY = ((y1 as number) - (y0 as number)) / 2;
  const textCoordX = nodeIsDestination
    ? (x1 as number) + textXPadding
    : (x0 as number) - textXPadding;
  const textYCoordY = (y1 as number) - midPointY;

  console.log(name);
  return (
    <g
      className="relative"
      onMouseEnter={() => handleNodeEnter()}
      onMouseLeave={() => setNodeIsHovered(false)}
      onClick={() => handlNodeClick()}
    >
      <rect
        className={classNames("cursor-pointer ", {
          "opacity-100": nodeIsActive,
          "opacity-50": activeNodes.length > 0 && !activeNodes.includes(nodeId),
        })}
        x={x0}
        y={nodeIsDestination && province === "I" ? y0 || 0 + 0.5 : y0}
        width={(x1 as number) - (x0 as number)}
        height={(y1 as number) - (y0 as number)}
        fill={color}
        fillOpacity={nodeIsActive ? 1 : 0.8}
      ></rect>
      <rect
        x={nodeIsDestination ? x0 : (x1 as number) - borderRectWidth}
        y={y0}
        width={borderRectWidth}
        height={(y1 as number) - (y0 as number)+25}
        className="fill-current text-gray-50 dark:text-zinc-900"
      ></rect>
      <text
        x={textCoordX}
        y={textYCoordY}
        dominantBaseline="middle"
        textAnchor={nodeIsDestination ? "start" : "end"}
        className={classNames(
          "text-2xs fill-current dark:text-gray-50 cursor-pointer",
          {
            "text-opacity-60": !nodeIsActive,
          }
        )}
      >
        {province}
      </text>
    </g>
  );
};
