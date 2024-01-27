interface Props {
  half: number;
  trianglePlotDim: number;
  padding: number;
  labelOffset: number;
}

export const TernaryPlotLabels = ({
  half,
  trianglePlotDim,
  padding,
  labelOffset,
}: Props) => {
  return (
    <g className="text-xs">
      <text
        x={half}
        y={-labelOffset}
        className="fill-zinc-600 dark:fill-white"
        textAnchor="middle"
        dominantBaseline="hanging"
        transform={`translate(${padding / 2},20)`}
      >
        Developer
      </text>
      <text
        className="fill-zinc-600 dark:fill-white"
        x={trianglePlotDim + padding - 5}
        y={trianglePlotDim + padding - labelOffset}
        textAnchor="end"
      >
        Artist
      </text>
      <text
        className="fill-zinc-600 dark:fill-white"
        x={0}
        y={trianglePlotDim + padding - labelOffset}
        textAnchor="start"
        transform={`translate(${padding / 2},0})`}
      >
        Designer
      </text>
    </g>
  );
};
