import { ProjectPageHeaderAndImages } from "@/components/Playground/ProjectPage/ProjectPageHeaderAndImages/ProjectPageHeaderAndImages";
import { ProjectPageTimeFrame } from "@/components/Playground/ProjectPage/ProjectPageTimeframe/ProjectPageTimeFrame";
import { ProjectTemplateOverviewDeliverables } from "@/components/Playground/ProjectPage/ProjectTemplateOverviewDeliverables/ProjectTemplateOverviewDeliverables";
import { ProjectTemplateOverviewLocations } from "@/components/Playground/ProjectPage/ProjectTemplateOverviewLocations/ProjectTemplateOverviewLocations";
import { ProjectTemplateOverviewRole } from "@/components/Playground/ProjectPage/ProjectTemplateOverviewRole/ProjectTemplateOverviewRole";
import { ProjectTemplateOverviewTechnologies } from "@/components/Playground/ProjectPage/ProjectTemplateOverviewTechnologies/ProjectTemplateOverviewTechnologies";
import { ProjectDocument } from "@/graphql/generated";
import { getUrqlClient } from "@/lib/urql";

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
  const project = data?.allProject[0] || {};
  const projectImages = project.projectImages;
  const borderColorClass = `border-${project.color}`;
  const textColorClass = `text-${project.color}`;
  const isClient = project.category?.name === "Client";

  return (
    <div className="space-y-8">
      {isClient ? (
        <ProjectPageHeaderAndImages
          projectImages={projectImages}
          slug={params.slug}
        />
      ) : (
        <iframe
          src="https://co2widget.com/embed/index.html"
          className="h-[600px] w-full bg-white rounded-sm"
        ></iframe>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 max-w-[700px] mx-auto">
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
