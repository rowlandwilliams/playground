"use client";

import classNames from "classnames";
import { GroupSelectors } from "./GroupSelectors/GroupSelectors";
import { Scatterplots } from "./Scatterplots/Scatterplots";

interface Props {
  roundCorners?: boolean;
}

export const ClusterAnalysis = ({ roundCorners = false }: Props) => {
  return (
    <section
      className={classNames(
        "h-full flex flex-col border-zinc-800 border text-xs",
        {
          "rounded-lg": roundCorners,
        }
      )}
    >
      <Scatterplots />
      <GroupSelectors />
    </section>
  );
};
