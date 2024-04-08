import { Timeframe } from "@/types/types";
import { getMonthDiff, getTimeframe } from "../../../Experience/utils/utils";

interface Props {
  timeframe: Timeframe;
}

export const ExperienceDates: React.FC<Props> = ({ timeframe }) => {
  return (
    <div className="flex gap-x-1">
      <div>{getTimeframe(timeframe)}</div>
      <p className="text-indigo-500">&#8226;</p>
      <div>{getMonthDiff(timeframe)}</div>
    </div>
  );
};
