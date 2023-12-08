import { ProjectImages } from "@/components/ProjectImages/ProjectImages";
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
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-x-1.5 text-xs text-zinc-700 dark:text-zinc-300">
        <Link
          href="/projects"
          className="underline underline-offset-4 font-normal "
        >
          Projects
        </Link>
        <span>/</span>
        <div>{params.slug}</div>
      </div>
      <ProjectImages projectImages={projectImages} />
    </div>
  );
}
