import { BioTextLinks } from "./BioTextLinks/BioTextLinks";

export const BioText = () => {
  return (
    <>
      <section className="text-xl space-y-8 hidden sm:block mt-2 dark:font-light text-zinc-950 dark:text-zinc-100">
        <p className="text-[1.95rem] font-haas leading-10">
          Hi — I&apos;m Rowland, a <br />
          Software Engineer interested in
          <br /> Maps & Data Visualisation.
        </p>
        <div className="space-y-4">
          <p className="text-zinc-700 dark:text-zinc-300 text-base font-light lg:text-base">
            I connect data, design and technology to build apps that explore and
            visualise complex information.
          </p>
          <BioTextLinks />
        </div>
      </section>
      <section className="sm:hidden text-3xl space-y-10 text-zinc-800 dark:text-zinc-100">
        <p className="font-haas">
          Hi — I&apos;m Rowland, <br className="xs:hidden" /> a Software
          Engineer interested in Maps & Data Visualisation.
        </p>
        <p className="text-base sm:text-xl font-light text-zinc-500 dark:text-zinc-400">
          I connect data, design and technology to build apps that explore and
          visualise complex information.
        </p>
        <BioTextLinks />
      </section>
    </>
  );
};
