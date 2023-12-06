import { getUrqlClient } from "@/lib/urql";
import { AllProjectsDocument } from "../../graphql/generated";
import { Projects } from "@/components/Projects/Projects";

async function getAllProjects() {
  const { client } = getUrqlClient();
  const result = await client.query(AllProjectsDocument, {});
  return result;
}

export default async function ProjectsPage() {
  return <Projects />;
}
