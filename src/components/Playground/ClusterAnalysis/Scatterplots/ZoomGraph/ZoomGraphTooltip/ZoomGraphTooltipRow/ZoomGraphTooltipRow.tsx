import classNames from "classnames";

interface Props {
  metric: string;
  value: number;
  bgClass: string;
  textClass: string;
  borderClass: string;
}

export const ZoomGraphTooltipRow = ({
  metric,
  value,
  bgClass,
  textClass,
  borderClass,
}: Props) => {
  return (
    <div className="flex justify-between gap-x-2">
      <p>{metric}:</p>
      <p
        className={classNames(
          "px-2 bg-opacity-10 w-12 rounded-md text-center font-medium",
          [bgClass, textClass, borderClass]
        )}
      >
        {value.toFixed(2)}
      </p>
    </div>
  );
};
