interface Props {
  half: number;
  trianglePlotDim: number;
  padding: number;
}

export const TernaryPlotPoint = ({ padding, trianglePlotDim, half }: Props) => {
  return (
    <g>
      <circle
        className="dark:fill-none stroke-zinc-300 fill-indigo-200 dark:animate-pulse"
        r={8}
        cx={padding / 2 + trianglePlotDim * 0.45}
        cy={half - padding / 2}
      />
      <circle
        className="fill-teal-500 animate-pulse dark:animate-none"
        r={4}
        cx={padding / 2 + trianglePlotDim * 0.45}
        cy={half - padding / 2}
      />
    </g>
  );
};
