export const BioText = () => {
  return (
    <>
      <section className="text-2xl hidden sm:block font-light text-zinc-900 dark:text-zinc-100">
        Hi — I&apos;m Rowland, a Software Engineer interested in Data
        Visualisation. I connect data, design and technology to build apps that
        explore and visualise complex information.
      </section>
      <section className="sm:hidden text-3xl space-y-8  text-zinc-900 dark:text-zinc-100">
        <p>
          Hi — I&apos;m Rowland, a Software Engineer interested in Data
          Visualisation.
        </p>
        <p className="text-2xl font-light text-zinc-500">
          I connect data, design and technology to build apps that explore and
          visualise complex information.
        </p>
      </section>
    </>
  );
};
