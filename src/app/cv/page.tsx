import { Experience } from "@/components/CV/Experience/Experience";

export default function CV() {
  return (
    <main className="flex flex-col items-center my-12">
      <article className="w-full max-w-[750px] space-y-16 sm:space-y-20">
        <Experience />
      </article>
    </main>
  );
}
