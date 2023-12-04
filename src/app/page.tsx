import { BioText } from "@/components/BioText/BioText";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Projects";
import { Playground } from "@/components/Playground/Playground";
import { TernaryPlot } from "@/components/TernaryPlot/TernaryPlot";

export default function Home() {
  return (
    <main className="flex px-8 flex-col items-center my-12 text-zinc-600">
      <article className="w-full max-w-[700px] space-y-20">
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <BioText />
          <div className="hidden sm:flex sm:justify-end">
            <TernaryPlot />
          </div>
        </div>
        <Projects />
        <Playground />
        <div className="sm:hidden">
          <TernaryPlot />
        </div>
      </article>
    </main>
  );
}
