import { Navbar } from "@/components/Navbar/Navbar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex px-8 flex-col items-center my-12 text-zinc-600">
      <article className="w-full max-w-[700px] space-y-20">
        <Navbar />
        {children}
      </article>
    </main>
  );
}
