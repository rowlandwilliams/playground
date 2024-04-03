"use client";

import { NavbarPlaygroundLink } from "./NavbarPlaygroundLink/NavbarPlaygroundLink";
import { ThemeToggle } from "./ThemeToggle/ThemeToggle";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="max-w-[750px] mx-auto">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="flex font-haas gap-x-2 items-center py-2  dark:text-zinc-100 text-lg text-zinc-900 font-medium "
        >
          Rowland Williams
        </Link>
        <ThemeToggle />
      </div>
      <div className="flex justify-between items-center font-light text-zinc-600 dark:text-zinc-400">
        <h2 className="text-sm sm:text-xs flex items-center gap-x-2 ">
          Design Technologist
          <div className="h-3 w-3 rounded-full bg-gradient-to-br from-blue-700 dark:from-teal-400 via-rose-600 dark:via-blue-600 to-yellow-400 dark:to-yellow-200"></div>
        </h2>
      </div>
    </header>
  );
};
