import { ProjectTemplateOverviewTag } from "./ProjectTemplateOverviewTag/ProjectTemplateOverviewTag";

interface Props {
  options: (string | null | undefined)[];
  borderColorClass: string;
}

export const ProjectTemplateOverviewTags = ({
  options,
  borderColorClass,
}: Props) => {
  return (
    <div className="text-xs  flex gap-2 flex-wrap text-body">
      {options.map((option) => (
        <ProjectTemplateOverviewTag
          text={option}
          borderColorClass={borderColorClass}
          key={option}
        />
      ))}
    </div>
  );
};
