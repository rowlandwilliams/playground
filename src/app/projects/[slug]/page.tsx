import { DesktopProjectImages } from "@/components/DesktopProjectImages/DesktopProjectImages";
import { ProjectPageHeaderAndImages } from "@/components/ProjectPage/ProjectPageHeaderAndImages/ProjectPageHeaderAndImages";
import { ProjectPageTimeFrame } from "@/components/ProjectPage/ProjectPageTimeframe/ProjectPageTimeFrame";
import { ProjectTemplateOverviewDeliverables } from "@/components/ProjectPage/ProjectTemplateOverviewDeliverables/ProjectTemplateOverviewDeliverables";
import { ProjectTemplateOverviewLocations } from "@/components/ProjectPage/ProjectTemplateOverviewLocations/ProjectTemplateOverviewLocations";
import { ProjectTemplateOverviewRole } from "@/components/ProjectPage/ProjectTemplateOverviewRole/ProjectTemplateOverviewRole";
import { ProjectTemplateOverviewTechnologies } from "@/components/ProjectPage/ProjectTemplateOverviewTechnologies/ProjectTemplateOverviewTechnologies";
import { ProjectTemplateOverviewTag } from "@/components/ProjectPage/SHARED/ProjectTemplateOverviewTags/ProjectTemplateOverviewTag/ProjectTemplateOverviewTag";
import { ProjectDocument } from "@/graphql/generated";
import { getUrqlClient } from "@/lib/urql";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

async function getProjectByName(projectName: string) {
  const { client } = getUrqlClient();
  const result = await client.query(ProjectDocument, { projectName });
  return result;
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  // const [vertical, setVertical] = useState(false);
  const { data } = await getProjectByName(params.slug);
  const project = data?.allProject[0] || {};
  const projectImages = project.projectImages;
  const borderColorClass = `border-${project.color}`;
  const textColorClass = `text-${project.color}`;

  return (
    <div className="space-y-8">
      <ProjectPageHeaderAndImages
        projectImages={projectImages}
        slug={params.slug}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
        <ProjectTemplateOverviewRole jobTitle={project.jobTitle} />
        <ProjectTemplateOverviewTechnologies
          technologies={project.technologies}
          borderColorClass={borderColorClass}
        />
        <ProjectTemplateOverviewDeliverables
          deliverablesHeaderText="Deliverables"
          borderColorClass={borderColorClass}
          deliverables={project.deliverables}
        />
        <ProjectTemplateOverviewLocations
          textColorClass={textColorClass}
          locations={project.locations}
        />
        <ProjectPageTimeFrame
          textColorClass={textColorClass}
          timeframe={{
            start: project.startDate,
            end: project.endDate,
          }}
        />
      </div>
    </div>
  );
}
