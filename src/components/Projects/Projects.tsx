"use client";

import { useState } from "react";
import { Project } from "./Project/Project";
import Link from "next/link";

const projects = [
  {
    name: "kulea",
    slug: "kulea",
    url: "https://www.kulea.com/",
    description: "Africa's Commodity Intelligence Platform.",
    body: (
      <>
        <p>
          I currently lead the Engineering team at{" "}
          <Link
            href="https://www.kulea.com/"
            target="_blank"
            className="text-zinc-600 dark:text-zinc-200 underline underline-offset-4"
          >
            kulea
          </Link>
          , a Nairobi-based start-up providing data, insights and infrastructure
          for agricultural commodity trading.{" "}
          <span className="hidden sm:inline">
            I write alot of code, manage a team of engineers and oversee
            development of a product that I built from scratch and is now backed
            by a $1 million seed round.
          </span>
        </p>
        <p className="sm:hidden">
          I write alot of code, manage a team of engineers and oversee
          development of a product that I built from scratch and is now backed
          by a $1 million seed round.
        </p>
      </>
    ),
    tech: ["Next.js", "d3.js", "TypeScript", "GraphQL", "PostgreSQL", "AWS"],
    role: "CTO / Founding Engineer",
    isCurrent: true,
  },
  {
    name: "supernova",
    slug: "supernova",
    url: "https://www.supernova.ai/",
    description: "An analytics app for sustainable investment data.",
    body: (
      <>
        I conducted a few months of discovery work with Supernova AI, an
        analytics platform for ESG investment data. I helped establish a UI
        design system using React / Storybook and also developed bespoke data
        visualisations using d3.js
      </>
    ),
    tech: ["React", "d3.js", "TypeScript", "Storybook"],
    role: "Contract Software Engineer",
  },
  {
    name: "co2 widget",
    url: "https://co2widget.com/",
    description:
      "A free-to-use, embeddable widget displaying daily atmospheric Carbon Dioxide levels.",
    body: (
      <>
        I was part of a team of designers / developers who built this widget to
        allow universal access to daily data on atmospheric CO<sub>2</sub>{" "}
        concentrations. It has since been embedded on several major news
        websites and is endorsed by the Grantham Institure and the Scripps
        Institution of Oceanography.
      </>
    ),
    role: "Voluntary",
  },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | undefined>(0);

  return (
    <section className="font-light text-zinc-700">
      <h1 className="font-medium text-zinc-900 text-base dark:text-zinc-200">
        Projects
      </h1>
      <div className="divide-y dark:divide-zinc-700">
        {projects.map((project, i) => (
          <Project
            activeProject={activeProject}
            setActiveProject={setActiveProject}
            index={i}
            project={project}
            key={project.name}
          />
        ))}
      </div>
    </section>
  );
};
