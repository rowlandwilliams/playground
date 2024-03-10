interface Props {
  half: number;
  trianglePlotDim: number;
  padding: number;
  labelOffset: number;
  labelValues: string[];
}

export const TernaryPlotLabels = ({
  half,
  trianglePlotDim,
  padding,
  labelOffset,
  labelValues,
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
        {labelValues[0]}
      </text>
      <text
        className="fill-zinc-600 dark:fill-white"
        x={trianglePlotDim + padding - 5}
        y={trianglePlotDim + padding - labelOffset}
        textAnchor="end"
      >
        {labelValues[1]}
      </text>
      <text
        className="fill-zinc-600 dark:fill-white"
        x={0}
        y={trianglePlotDim + padding - labelOffset}
        textAnchor="start"
        transform={`translate(${padding / 2},0})`}
      >
        {labelValues[2]}
      </text>
    </g>
  );
};
