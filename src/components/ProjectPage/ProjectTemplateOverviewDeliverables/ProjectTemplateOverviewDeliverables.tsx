import { ProjectTemplateOverviewTags } from "../SHARED/ProjectTemplateOverviewTags/ProjectTemplateOverviewTags";
import { ProjectTemplateOverviewTitleAndChildSection } from "../SHARED/ProjectTemplateOverviewTitleAndChildSection/ProjectTemplateOverviewTitleAndChildSection";

interface Props {
  deliverables: (string | null)[] | null | undefined;
  deliverablesHeaderText: string;
  borderColorClass: string;
}

export const ProjectTemplateOverviewDeliverables = ({
  deliverables,
  deliverablesHeaderText,
  borderColorClass,
}: Props) => {
  return deliverables ? (
    <ProjectTemplateOverviewTitleAndChildSection
      title={deliverablesHeaderText}
      isSmall
    >
      <ProjectTemplateOverviewTags
        options={deliverables}
        borderColorClass={borderColorClass}
      />
    </ProjectTemplateOverviewTitleAndChildSection>
  ) : null;
};
