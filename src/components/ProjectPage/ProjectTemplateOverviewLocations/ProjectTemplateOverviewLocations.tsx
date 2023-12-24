import classNames from "classnames";
import { ProjectTemplateOverviewTitleAndChildSection } from "../SHARED/ProjectTemplateOverviewTitleAndChildSection/ProjectTemplateOverviewTitleAndChildSection";

interface Props {
  locations: (string | null)[] | null | undefined;
  borderColorClass: string;
}

export const ProjectTemplateOverviewLocations = ({
  locations,
  borderColorClass,
}: Props) => {
  return locations ? (
    <ProjectTemplateOverviewTitleAndChildSection title="Location" isSmall>
      <div className="flex items-center gap-x-2">
        {locations.map((location, i) => (
          <>
            <div key={location}>{location}</div>
            {i < locations.length - 1 && (
              <div
                className={classNames("h-2 w-2  border rounded-full", [
                  borderColorClass,
                ])}
              ></div>
            )}
          </>
        ))}
      </div>
    </ProjectTemplateOverviewTitleAndChildSection>
  ) : null;
};
