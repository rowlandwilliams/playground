import { Timeframe } from "@/types/types";
import { getMonthDiff, getTimeframe } from "./utils/utils";
import { ProjectTemplateOverviewTitleAndChildSection } from "../SHARED/ProjectTemplateOverviewTitleAndChildSection/ProjectTemplateOverviewTitleAndChildSection";

interface Props {
  timeframe: Timeframe;
  textColorClass: string;
}

export const ProjectPageTimeFrame = ({ timeframe, textColorClass }: Props) => {
  return (
    <ProjectTemplateOverviewTitleAndChildSection title="Period" isSmall>
      <div className="flex gap-x-1">
        <div>{getTimeframe(timeframe)}</div>
        <p className={textColorClass}>&#8226;</p>
        <div>{getMonthDiff(timeframe)}</div>
      </div>
    </ProjectTemplateOverviewTitleAndChildSection>
  );
};
