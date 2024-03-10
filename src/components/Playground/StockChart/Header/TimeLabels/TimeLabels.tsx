import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { timeLabels } from "../../data/timeLabels";
import { RootState } from "../../reducers";
import { changeVisibleDatesDomain } from "../../actions";

interface Props {
  latestDate: number;
}

export const TimeLabels = ({ latestDate }: Props) => {
  const dispatch = useDispatch();
  const { visibleDatesDomain } = useSelector((state: RootState) => state);

  return (
    <div className="flex items-baseline">
      {timeLabels.map((labelObject) => (
        <div
          className={classNames(
            "w-8 sm:w-10 ml-2 text-center py-1 rounded-lg bg-opacity-20 cursor-pointer",
            {
              "bg-zinc-600 text-white":
                labelObject.domain[0] === visibleDatesDomain[0],
              "text-zinc-400  hover:bg-bar_colour hover:bg-opacity-20 hover:text-chart_background":
                labelObject.domain[0] !== visibleDatesDomain[0],
            }
          )}
          onClick={() => {
            dispatch(
              changeVisibleDatesDomain([
                latestDate - labelObject.timescale,
                latestDate,
              ])
            );
          }}
          key={labelObject.label}
        >
          {labelObject.label}
        </div>
      ))}
    </div>
  );
};
