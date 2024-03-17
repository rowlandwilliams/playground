import { PlaygroundVizWrapper } from "@/components/Playground/PlaygroundVizWrapper/PlaygroundVizWrapper";
import { TernaryPlot } from "@/components/TernaryPlot/TernaryPlot";

export default function TernaryPlotPage() {
  return (
    <PlaygroundVizWrapper codeLink="https://github.com/rowlandwilliams/playground/tree/main/src/components/TernaryPlot">
      <TernaryPlot maxWidthClass="" useHeight labelValues={["A", "B", "C"]} />
    </PlaygroundVizWrapper>
  );
}
