import { BioText } from "@/components/BioText/BioText";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Projects";
import { TernaryPlot } from "@/components/TernaryPlot/TernaryPlot";
import { HomepagePlayground } from "@/components/HomepagePlayground/HomepagePlayground";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex px-8 flex-col items-center my-12">
      <article className="w-full max-w-[750px] space-y-20">
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2 animate-fade-in-up">
          <BioText />
          <div className="hidden sm:flex sm:justify-end min-h-[300px]">
            <TernaryPlot />
          </div>
        </div>
        <div className="sm:hidden">
          <TernaryPlot />
        </div>
        <Projects />
        <HomepagePlayground />
        <Footer />
      </article>
    </main>
  );
}
