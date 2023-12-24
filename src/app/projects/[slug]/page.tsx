import { DesktopProjectImages } from "@/components/DesktopProjectImages/DesktopProjectImages";
import { ProjectImages } from "@/components/ProjectImages/ProjectImages";
import { ProjectTemplateOverviewDeliverables } from "@/components/ProjectPage/ProjectTemplateOverviewDeliverables/ProjectTemplateOverviewDeliverables";
import { ProjectTemplateOverviewLocations } from "@/components/ProjectPage/ProjectTemplateOverviewLocations/ProjectTemplateOverviewLocations";
import { ProjectTemplateOverviewRole } from "@/components/ProjectPage/ProjectTemplateOverviewRole/ProjectTemplateOverviewRole";
import { ProjectTemplateOverviewTechnologies } from "@/components/ProjectPage/ProjectTemplateOverviewTechnologies/ProjectTemplateOverviewTechnologies";
import { ProjectTemplateOverviewTag } from "@/components/ProjectPage/SHARED/ProjectTemplateOverviewTags/ProjectTemplateOverviewTag/ProjectTemplateOverviewTag";
import { ProjectDocument } from "@/graphql/generated";
import { getUrqlClient } from "@/lib/urql";
import Link from "next/link";

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
  const { data } = await getProjectByName(params.slug);
  const projectImages = data?.allProject[0].projectImages;
  const borderColorClass = `border-${data?.allProject[0].color}`;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-x-1.5 text-sm">
        <Link
          href="/projects"
          className="underline underline-offset-4 font-normal text-header"
        >
          Projects
        </Link>
        <span>/</span>
        <div className="text-zinc-600 dark:text-zinc-400">{params.slug}</div>
      </div>
      <DesktopProjectImages projectImages={projectImages} />
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
