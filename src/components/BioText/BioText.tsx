import Link from "next/link";

export const BioText = () => {
  return (
    <>
      <section className="text-2xl space-y-8 hidden sm:block font-light text-zinc-900 dark:text-zinc-100">
        <p>
          Hi — I&apos;m Rowland, a Software Engineer interested in Data
          Visualisation. I connect data, design and technology to build apps
          that explore and visualise complex information.
        </p>
        <p className="text-base font-light text-zinc-500 dark:text-zinc-400">
          I lead the Engineering team at{" "}
          <Link
            href="https://www.kulea.com/"
            target="_blank"
            className="text-zinc-600 dark:text-zinc-200 underline underline-offset-4"
          >
            kulea
          </Link>
          , a Nairobi start-up providing data, insights and infrastructure
          for agricultural trading. I also like making{" "}
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
      <section className="sm:hidden text-3xl space-y-8  text-zinc-900 dark:text-zinc-100">
        <p>
          Hi — I&apos;m Rowland, a Software Engineer interested in Data
          Visualisation.
        </p>
        <p className="text-lg sm:text-xl font-light text-zinc-500 dark:text-zinc-400">
          I connect data, design and technology to build apps that explore and
          visualise complex information.
        </p>
        <p className="text-lg sm:text-xl font-light text-zinc-500 dark:text-zinc-400">
          I lead the Engineering team at{" "}
          <Link
            href="https://www.kulea.com/"
            target="_blank"
            className="text-zinc-600 dark:text-zinc-200 underline underline-offset-4"
          >
            kulea
          </Link>
          , a Nairobi start-up providing data, insights and infrastructure
          for agricultural trading. I also like making{" "}
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
    </>
  );
};
