import { ReactNode } from "react";
import { PlaygroundVizButton } from "../PlaygroundVizButton/PlaygroundVizButton";
import { InfoIcon } from "@/components/Icons/InfoIcon/InfoIcon";
import { CodeIcon } from "@/components/Icons/CodeIcon/CodeIcon";
import Link from "next/link";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  codeLink?: string;
  tooltipContent?: ReactNode;
  title?: ReactNode;
}

export const PlaygroundVizWrapper = ({
  children,
  codeLink = undefined,
  tooltipContent = undefined,
  title = undefined,
}: Props) => {
  const iconButtons = (
    <div
      className={classNames(
        "flex justify-end divide-zinc-200 dark:divide-zinc-600 gap-x-2",
        { "p-4": !title }
      )}
    >
      {tooltipContent && (
        <PlaygroundVizButton tooltipContent={tooltipContent}>
          <InfoIcon width={18} />
        </PlaygroundVizButton>
      )}
      {codeLink && (
        <Link href={codeLink} target="_blank">
          <PlaygroundVizButton>
            <CodeIcon width={20} />
          </PlaygroundVizButton>
        </Link>
      )}
    </div>
  );

  return (
    <section className="flex rounded-md flex-col gap-x-4 grow overflow-hidden bg-zinc-100 shadow-md border border-gray-100 dark:border-none dark:bg-chart-gray">
      {title ? (
        <header className="flex justify-between items-center px-4 pt-4">
          {title}
          {iconButtons}
        </header>
      ) : (
        iconButtons
      )}
      {children}
    </section>
  );
};
