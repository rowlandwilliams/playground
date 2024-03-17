import { InfoIcon } from "@/components/Icons/InfoIcon/InfoIcon";
import { TwentyFourHoursIcon } from "@/components/Icons/TwentyFourHoursIcon/TwentyFourHoursIcon";
import { ThemeToggle } from "@/components/Navbar/ThemeToggle/ThemeToggle";
import { PlaygroundNavBar } from "@/components/Playground/PlaygroundNavBar/PlaygroundNavBar";
import { PlaygroundVizButton } from "@/components/Playground/PlaygroundVizButton/PlaygroundVizButton";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Playground",
  description: "Generated by create next app",
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="m-4 md:m-12 grow  flex flex-col md:flex-row gap-4">
      <section className="space-y-8">
        <nav className="flex gap-x-2 items-center">
          <Link
            href="/"
            className="h-3 w-3 rounded-full bg-gradient-to-br from-blue-700 dark:from-teal-400 via-rose-600 dark:via-blue-600 to-yellow-400 dark:to-yellow-200"
          />
          <ThemeToggle />
          <PlaygroundNavBar isDesktop={false} />
        </nav>
        <PlaygroundNavBar isDesktop />
      </section>
      {children}
    </section>
  );
}
