interface Props {
  plotDim: number;
  nTriangles: number;
  half: number;
  strokeClass?: string;
}

export const TernaryPlotBaseTriangles = ({
  plotDim,
  nTriangles,
  half,
  strokeClass = "stroke-zinc-300 dark:stroke-gray-700 stroke-[0.5px]",
}: Props) => {
  const trianglePlotDim = plotDim / nTriangles;
  const numbers = [...Array(nTriangles)];
  return (
    <>
      {numbers.map((number, i) => (
        <line
          key={number}
          x1={half - trianglePlotDim * (0.5 * i + 0.5)}
          x2={plotDim - trianglePlotDim * (i + 1)}
          y1={trianglePlotDim * (i + 1)}
          y2={plotDim}
          className={strokeClass}
        />
      ))}
      {numbers.map((number, i) => (
        <line
          key={number}
          x1={half + trianglePlotDim * (0.5 * i + 0.5)}
          x2={0 + trianglePlotDim * (i + 1)}
          y1={trianglePlotDim * (i + 1)}
          y2={plotDim}
          className={strokeClass}
        />
      ))}
      {numbers.map((number, i) => (
        <line
          key={number}
          x1={half - trianglePlotDim * (0.5 * i + 0.5)}
          x2={half + trianglePlotDim * (0.5 * i + 0.5)}
          y1={trianglePlotDim * (i + 1)}
          y2={trianglePlotDim * (i + 1)}
          className={strokeClass}
        />
      ))}
    </>
  );
};
