import { Arrow } from "@/components/SHARED/Arrow";
import { CurrrentTag } from "@/components/SHARED/CurrrentTag/CurrrentTag";
import classNames from "classnames";
import Link from "next/link";
import { Dispatch, ReactNode } from "react";

interface Props {
  project: {
    name: string;
    url: string;
    description: string;
    body: ReactNode;
    tech?: string[] | undefined;
    role: string;
    slug?: string | undefined;
    isCurrent?: boolean;
  };
  activeProject: number | undefined;
  index: number;
  setActiveProject: Dispatch<React.SetStateAction<number | undefined>>;
}

export const Project = ({
  project: { name, url, description, body, tech, role, isCurrent, slug },
  activeProject,
  index,
  setActiveProject,
}: Props) => {
  const active = activeProject === index;

  return (
    <section className="py-6">
      <div key={name} className="text-sm space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-x-2 items-center">
            <a
              href={url}
              target="_blank"
              className="underline font-normal underline-offset-[3px] font-haas text-zinc-900 dark:text-zinc-300"
            >
              {name}
            </a>
            {isCurrent && <CurrrentTag />}
          </div>
          <button
            type="button"
            onClick={() => {
              if (active) {
                setActiveProject(undefined);
              } else {
                setActiveProject(index);
              }
            }}
            className={classNames(
              "hover:bg-zinc-100 text-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-600 h-6 w-6 flex items-center justify-center rounded-md",
              { "text-2xl": active, "text-xl": !active }
            )}
          >
            {active ? "-" : "+"}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-black text-[15px] dark:text-white font-medium font-haas">
            {description}
          </p>
        </div>
      </div>
      {active && (
        <div className="py-8 sm:py-4 text-[13px] space-y-8 sm:space-y-4 text-zinc-700 dark:text-zinc-300">
          <div className="text-sm sm:text-[13px] space-y-2">{body}</div>
          <section className="space-y-4 sm:space-y-4">
            <div>
              Role: <span className="dark:text-zinc-300">{role}</span>
            </div>
            {tech && (
              <div className="flex gap-2 items-center flex-wrap">
                {tech.map((technology) => (
                  <p
                    key={technology}
                    className="px-4 rounded-full font-normal border text-[11px] dark:border-zinc-700 dark:text-zinc-300"
                  >
                    {technology}
                  </p>
                ))}
              </div>
            )}
          </section>
          {slug && (
            <div>
              <Link
                href={`/projects/${slug}`}
                className="flex font-medium dark:font-normal text-fuchsia-600 dark:text-violet-400 text-xs items-center gap-x-1"
              >
                Read more <Arrow dimension={8} />
              </Link>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
