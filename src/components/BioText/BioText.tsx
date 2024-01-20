import Link from "next/link";

export const BioText = () => {
  return (
    <>
      <section className="text-xl space-y-8 hidden sm:block mt-2 font-light text-zinc-900 dark:text-zinc-100">
        <p className="text-2xl">
          Hi — I&apos;m Rowland, a Software Engineer interested in Data
          Visualisation.
        </p>
        <p className="text-zinc-600 dark:text-zinc-400 text-base lg:text-base">
          I connect data, design and technology to build apps that explore and
          visualise complex information. I also like making{" "}
          <Link
            href="/art"
            target="_blank"
            className="text-zinc-600 dark:text-zinc-200 underline underline-offset-4"
          >
            art
          </Link>{" "}
          and taking{" "}
          <Link
            href="/photo"
            target="_blank"
            className="text-zinc-600 dark:text-zinc-200 underline underline-offset-4"
          >
            photos
          </Link>
          .
        </p>
      </section>
      <section className="sm:hidden text-3xl space-y-8 font-[450] dark:font-normal text-black dark:text-zinc-100">
        <p>
          Hi — I&apos;m Rowland, a Software Engineer interested in Data
          Visualisation.
        </p>
        <p className="text-lg sm:text-xl font-light text-zinc-500 dark:text-zinc-400">
          I connect data, design and technology to build apps that explore and
          visualise complex information.
        </p>
      </section>
    </>
  );
};
