import { Education } from "@/components/CV/Education/Education";
import { Experience } from "@/components/CV/Experience/Experience";

export default function CV() {
  return (
    <main className="flex flex-col items-center my-12">
      <article className="w-full max-w-[750px] divide-y ">
        <Experience />
        <Education />
      </article>
    </main>
  );
}
