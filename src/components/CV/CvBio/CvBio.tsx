import Link from "next/link";

export const CvBio = () => {
  return (
    <div className="text-sm leading-5 pb-6 tracking-wider animate-fade-in-up space-y-2 font-haas dark:text-zinc-300 text-zinc-800">
      <div>
        I am a technologist happiest at the intersection of creativity,
        analytics and innovation. I connect data, design and code with my
        background in art and science to build experiences that explore and
        visualise complex information.
      </div>
      <div>
        Whilst my special interest is in Data Visualisation, I have diverse
        skills across the technology stack and have experience building tech
        products from scratch and leading inter-disciplinary teams.
      </div>
      <div>
        Some tools I&apos;ve enjoyed using recently include:{" "}
        <Link
          className="underline underline-offset-4"
          href="https://nextjs.org/"
        >
          Next.js
        </Link>
        ,{" "}
        <Link
          className="underline underline-offset-4"
          href="https://www.apollographql.com/"
        >
          Apollo GraphQL
        </Link>
        ,{" "}
        <Link
          className="underline underline-offset-4"
          href="https://airbnb.io/visx/"
        >
          visx
        </Link>
        , and{" "}
        <Link className="underline underline-offset-4" href="https://d3js.org/">
          d3.js
        </Link>
        . That being said, I am always eager to explore new frameworks that can
        enhance my craft.
      </div>
    </div>
  );
};
