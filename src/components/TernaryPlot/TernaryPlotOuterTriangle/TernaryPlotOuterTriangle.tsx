interface Props {
  half: number;
  trianglePlotDim: number;
  triangleClass?: string;
}

export const TernaryPlotOuterTriangle = ({
  half,
  trianglePlotDim,
  triangleClass = "fill-none",
}: Props) => {
  return (
    <polygon
      points={`${half} 0, ${trianglePlotDim} ${trianglePlotDim}, 0 ${trianglePlotDim}`}
      className={triangleClass}
    />
  );
};
