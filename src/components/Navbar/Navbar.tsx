"use client";

import { ThemeToggle } from "./ThemeToggle/ThemeToggle";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="max-w-[700px] mx-auto">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex gap-x-2 items-center py-2  dark:text-zinc-100 text-lg text-zinc-900 font-medium "
        >
          Rowland Williams
        </Link>
        <div className="flex gap-x-2 items-center">
          <Link
            href={"https://github.com/rowlandwilliams"}
            target="_blank"
            className="hover:bg-zinc-100 dark:hover:bg-zinc-600 h-6 w-6 flex items-center justify-center rounded-sm"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 20 20"
              className="fill-zinc-700 dark:fill-zinc-200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 0C4.47833 0 0 4.4775 0 10C0 14.4183 2.865 18.1667 6.83917 19.4892C7.33833 19.5817 7.5 19.2717 7.5 19.0083V17.1467C4.71833 17.7517 4.13917 15.9667 4.13917 15.9667C3.68417 14.8108 3.02833 14.5033 3.02833 14.5033C2.12083 13.8825 3.0975 13.8958 3.0975 13.8958C4.10167 13.9658 4.63 14.9267 4.63 14.9267C5.52167 16.455 6.96917 16.0133 7.54 15.7575C7.62917 15.1117 7.88833 14.67 8.175 14.4208C5.95417 14.1667 3.61917 13.3092 3.61917 9.47833C3.61917 8.38583 4.01 7.49417 4.64917 6.79417C4.54583 6.54167 4.20333 5.52417 4.74667 4.1475C4.74667 4.1475 5.58667 3.87917 7.4975 5.1725C8.295 4.95083 9.15 4.84 10 4.83583C10.85 4.84 11.7058 4.95083 12.505 5.1725C14.4142 3.87917 15.2525 4.1475 15.2525 4.1475C15.7967 5.525 15.4542 6.5425 15.3508 6.79417C15.9925 7.49417 16.38 8.38667 16.38 9.47833C16.38 13.3192 14.0408 14.165 11.8142 14.4125C12.1725 14.7225 12.5 15.3308 12.5 16.2642V19.0083C12.5 19.2742 12.66 19.5867 13.1675 19.4883C17.1383 18.1642 20 14.4167 20 10C20 4.4775 15.5225 0 10 0Z" />
            </svg>
          </Link>
          <ThemeToggle />
        </div>
      </div>
      <div className="flex justify-between items-center font-light text-zinc-600 dark:text-zinc-400">
        <h2 className="text-sm sm:text-xs flex items-center gap-x-2 ">
          Design Technologist
          <div className="h-3 w-3 rounded-full bg-gradient-to-br from-blue-700 dark:from-teal-400 via-rose-600 dark:via-blue-600 to-yellow-400 dark:to-yellow-200"></div>
        </h2>
        <div className="flex gap-x-2">
          <Link href={"/playground/twenty-four-hours"}>Playground {'->'}</Link>
        </div>
      </div>
    </header>
  );
};
