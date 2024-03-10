"use client";

import classNames from "classnames";
import { GroupSelectors } from "./GroupSelectors/GroupSelectors";
import { Scatterplots } from "./Scatterplots/Scatterplots";

export const ClusterAnalysis = () => {
  return (
    <section
      className={classNames(
        "flex flex-col grow space-y-4 overflow-auto  bg-chart-gray pt-8 pb-2 px-4 rounded-md"
      )}
    >
      <Scatterplots />
      <GroupSelectors />
    </section>
  );
};
