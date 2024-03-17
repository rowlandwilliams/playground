import { ReactNode } from "react";
import { PlaygroundVizButton } from "../PlaygroundVizButton/PlaygroundVizButton";
import { InfoIcon } from "@/components/Icons/InfoIcon/InfoIcon";
import { CodeIcon } from "@/components/Icons/CodeIcon/CodeIcon";
import Link from "next/link";

interface Props {
  children: ReactNode;
  codeLink?: string;
  tooltipContent?: ReactNode;
}

export const PlaygroundVizWrapper = ({
  children,
  codeLink = undefined,
  tooltipContent = undefined,
}: Props) => {
  return (
    <section className="flex rounded-md flex-col gap-x-4 grow overflow-hidden bg-zinc-100 dark:bg-chart-gray">
      <header className="p-4 flex justify-end divide-zinc-200 dark:divide-zinc-600 gap-x-2">
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
      </header>
      {children}
    </section>
  );
};
