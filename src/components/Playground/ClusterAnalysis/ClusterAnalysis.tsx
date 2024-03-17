"use client";

import classNames from "classnames";
import { GroupSelectors } from "./GroupSelectors/GroupSelectors";
import { Scatterplots } from "./Scatterplots/Scatterplots";
import { PlaygroundVizWrapper } from "../PlaygroundVizWrapper/PlaygroundVizWrapper";

export const ClusterAnalysis = () => {
  const tooltipContent = (
    <div className="w-60 space-y-2">
      <p>An experimental interface for exploring high density scatterplots.</p>
      <p>
        Move the brush on the left pane to view the points up close using the
        right pane.
      </p>
    </div>
  );

  return (
    <PlaygroundVizWrapper
      tooltipContent={tooltipContent}
      codeLink="https://github.com/rowlandwilliams/playground/blob/main/src/components/Playground/ClusterAnalysis/ClusterAnalysis.tsx"
    >
      <section
        className={classNames(
          "flex flex-col grow space-y-4 overflow-auto h-full  dark:bg-chart-gray rounded-md"
        )}
      >
        <Scatterplots />
        <GroupSelectors />
      </section>
    </PlaygroundVizWrapper>
  );
};
