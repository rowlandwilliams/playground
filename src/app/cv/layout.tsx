import { Navbar } from "@/components/Navbar/Navbar";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex px-8 flex-col items-center my-12">
      <article className="w-full space-y-10">
        <Navbar />
        {children}
      </article>
    </main>
  );
}
