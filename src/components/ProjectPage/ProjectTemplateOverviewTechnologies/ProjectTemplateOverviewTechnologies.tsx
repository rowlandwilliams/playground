import { Technology } from "@/graphql/generated";
import { ProjectTemplateOverviewTags } from "../SHARED/ProjectTemplateOverviewTags/ProjectTemplateOverviewTags";
import { ProjectTemplateOverviewTitleAndChildSection } from "../SHARED/ProjectTemplateOverviewTitleAndChildSection/ProjectTemplateOverviewTitleAndChildSection";

interface Props {
  technologies: (Technology | null)[] | undefined | null;
  borderColorClass: string;
}

export const ProjectTemplateOverviewTechnologies = ({
  technologies,
  borderColorClass,
}: Props) => {
  const technologiesNames = technologies?.map((technology) => technology?.name);

  return technologies && technologiesNames ? (
    <ProjectTemplateOverviewTitleAndChildSection isSmall title="Technologies">
      <ProjectTemplateOverviewTags
        options={technologiesNames}
        borderColorClass={borderColorClass}
      />
    </ProjectTemplateOverviewTitleAndChildSection>
  ) : null;
};
