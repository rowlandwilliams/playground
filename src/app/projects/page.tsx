import { getUrqlClient } from "@/lib/urql";
import { AllProjectsDocument } from "../../graphql/generated";

async function getAllProjects() {
  const { client } = getUrqlClient();
  const result = await client.query(AllProjectsDocument, {});
  return result;
}

export default async function ProjectsPage() {
  const { data, error } = await getAllProjects();

  return (
    <main className="gap-8 px-8 grid grid-cols-2 flex-col items-center my-12 text-zinc-600">
      {data?.allProject.map((project) => (
        <div className="border p-8" key={project._id}>
          {project.name}
        </div>
      ))}
    </main>
  );
}
