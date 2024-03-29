import { BioText } from "@/components/BioText/BioText";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Projects";
import { TernaryPlot } from "@/components/TernaryPlot/TernaryPlot";
import Link from "next/link";
import { StockChart } from "@/components/Playground/StockChart/StockChart";

export default function Home() {
  return (
    <main className="flex px-8 flex-col items-center my-12">
      <article className="w-full max-w-[750px] space-y-20">
        <Navbar />
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <BioText />
          <div className="hidden sm:flex sm:justify-end min-h-[300px]">
            <TernaryPlot />
          </div>
        </div>
        <div className="sm:hidden">
          <TernaryPlot />
        </div>
        <Projects />
        <section className="font-light text-zinc-700 space-y-4 dark:text-zinc-300">
          <header className="space-y-2">
            <div className="flex justify-between items-center">
              <Link
                href="/playground"
                className="font-medium hover:underline hover:underline-offset-[6px] text-zinc-900 text-base dark:text-zinc-200"
              >
                Playground
              </Link>
              <Link
                href="/playground"
                className="font-medium w-6 flex items-center text-sm justify-center h-6 hover:bg-zinc-100 text-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-600 rounded-sm"
              >
                {"->"}
              </Link>
            </div>
            <h2>A collection of data visualisations and experiments</h2>
          </header>
          <StockChart companyTicker="aapl" isHomepage />
        </section>
      </article>
    </main>
  );
}
