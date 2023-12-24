import { DesktopProjectImages } from "@/components/DesktopProjectImages/DesktopProjectImages";
import { ProjectPageHeaderAndImages } from "@/components/ProjectPage/ProjectPageHeaderAndImages/ProjectPageHeaderAndImages";
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
  const projectImages = data?.allProject[0].projectImages;
  const borderColorClass = `border-${data?.allProject[0].color}`;

  return (
    <div className="space-y-4">
      <ProjectPageHeaderAndImages
        projectImages={projectImages}
        slug={params.slug}
      />
      <ProjectTemplateOverviewRole jobTitle={data?.allProject[0].jobTitle} />
      <ProjectTemplateOverviewTechnologies
        technologies={data?.allProject[0].technologies}
        borderColorClass={borderColorClass}
      />
      <ProjectTemplateOverviewDeliverables
        deliverablesHeaderText="Deliverables"
        borderColorClass={borderColorClass}
        deliverables={data?.allProject[0].deliverables}
      />
      <ProjectTemplateOverviewLocations
        borderColorClass={borderColorClass}
        locations={data?.allProject[0].locations}
      />
    </div>
  );
}
