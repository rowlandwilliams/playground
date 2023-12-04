import { ProjectImages } from "@/components/ProjectImages/ProjectImages";
import { ProjectDocument } from "@/graphql/generated";
import { getUrqlClient } from "@/lib/urql";
import Image from "next/image";

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
  const { data, error } = await getProjectByName(params.slug);

  const projectImages = data?.allProject[0].projectImages;
  return (
    <div>
      <ProjectImages projectImages={projectImages} />
    </div>
  );
}
