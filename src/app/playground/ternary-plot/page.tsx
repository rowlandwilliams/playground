import { TernaryPlot } from "@/components/TernaryPlot/TernaryPlot";

export default function TernaryPlotPage() {
  return (
    <div className="bg-zinc-100 py-8 dark:bg-chart-gray w-full">
      <TernaryPlot maxWidthClass="" useHeight labelValues={["A", "B", "C"]} />
    </div>
  );
}
