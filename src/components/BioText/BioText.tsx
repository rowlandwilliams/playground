import { NavbarPlaygroundLink } from "../Navbar/NavbarPlaygroundLink/NavbarPlaygroundLink";
import { EmailLink } from "../SHARED/EmailLink/EmailLink";
import { GithubLink } from "../SHARED/GithubLink/GithubLink";
import { BioTextLinks } from "./BioTextLinks/BioTextLinks";

export const BioText = () => {
  return (
    <>
      <section className="text-xl space-y-8 hidden sm:block mt-2 dark:font-light text-zinc-900 dark:text-zinc-100">
        <p className="text-[1.7rem] leading-9">
          Hi — I&apos;m Rowland, a <br />
          Software Engineer interested in Maps & Data Visualisation.
        </p>
        <div className="space-y-4">
          <p className="text-zinc-600 dark:text-zinc-400 text-base lg:text-base">
            I connect data, design and technology to build apps that explore and
            visualise complex information.
          </p>
          <BioTextLinks />
        </div>
      </section>
      <section className="sm:hidden text-3xl space-y-8 font-[450] text-zinc-800 dark:text-zinc-100">
        <p>
          Hi — I&apos;m Rowland, a Software Engineer interested in Maps & Data
          Visualisation.
        </p>
        <div className="space-y-4">
          <p className="text-lg sm:text-xl font-light text-zinc-500 dark:text-zinc-400">
            I connect data, design and technology to build apps that explore and
            visualise complex information.
          </p>
          <BioTextLinks />
        </div>
      </section>
    </>
  );
};
