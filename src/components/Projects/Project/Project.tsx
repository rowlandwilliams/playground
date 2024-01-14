import { Arrow } from "@/components/SHARED/Arrow";
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
              className="underline font-normal underline-offset-[3px] dark:text-zinc-300"
            >
              {name}
            </a>
            {isCurrent && (
              <p className="text-[10px] flex gap-x-1 items-center px-3 rounded-full bg-indigo-600 dark:bg-green-400 text-indigo-600 dark:text-green-400 bg-opacity-20 dark:bg-opacity-20 font-medium">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 20 20"
                  className="fill-current animate-pulse"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 13C10.8333 13 11.5417 12.7083 12.125 12.125C12.7083 11.5417 13 10.8333 13 10C13 9.16667 12.7083 8.45833 12.125 7.875C11.5417 7.29167 10.8333 7 10 7C9.16667 7 8.45833 7.29167 7.875 7.875C7.29167 8.45833 7 9.16667 7 10C7 10.8333 7.29167 11.5417 7.875 12.125C8.45833 12.7083 9.16667 13 10 13ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" />
                </svg>
                Current
              </p>
            )}
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
              "hover:bg-zinc-100 text-zinc-400 dark:text-zinc-300 dark:hover:bg-zinc-600 h-6 w-6 flex items-center justify-center rounded-sm",
              { "text-2xl": active, "text-xl": !active }
            )}
          >
            {active ? "-" : "+"}
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-zinc-600 dark:text-zinc-300 font-normal">
            {description}
          </p>
        </div>
      </div>
      {active && (
        <div className="py-8 sm:py-4 text-[13px] space-y-8 sm:space-y-4 font-light text-zinc-600 dark:text-zinc-400">
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
                    className="px-4 rounded-full border text-[11px] dark:border-zinc-700 dark:text-zinc-300"
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
                className="flex font-normal text-teal-500 dark:text-violet-400 text-xs items-center gap-x-1"
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
