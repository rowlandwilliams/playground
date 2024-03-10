import classNames from "classnames";
import { ProjectTemplateOverviewTitleAndChildSection } from "../SHARED/ProjectTemplateOverviewTitleAndChildSection/ProjectTemplateOverviewTitleAndChildSection";

interface Props {
  locations: (string | null)[] | null | undefined;
  textColorClass: string;
}

export const ProjectTemplateOverviewLocations = ({
  locations,
  textColorClass,
}: Props) => {
  return locations ? (
    <ProjectTemplateOverviewTitleAndChildSection title="Location" isSmall>
      <div className="flex items-center gap-x-2">
        {locations.map((location, i) => (
          <>
            <div key={location}>{location}</div>
            {i < locations.length - 1 && (
              <p className={textColorClass}>&#8226;</p>
            )}
          </>
        ))}
      </div>
    </ProjectTemplateOverviewTitleAndChildSection>
  ) : null;
};
