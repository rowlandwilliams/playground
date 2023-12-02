import React from "react";

const projects = [
  {
    name: "kulea",
    url: "https://www.kulea.com/",
    description: "Africa's Commodity Intelligence Platform.",
  },
  {
    name: "supernova",
    url: "https://www.supernova.ai/",
    description: "Illuminating the sustainable investing universe.",
  },
  {
    name: "co2 widget",
    url: "https://co2widget.com/",
    description:
      "A free-to-use, embeddable widget displaying daily atmospheric Carbon Dioxide levels.",
  },
];

export const Projects = () => {
  return (
    <section className="font-light space-y-2 text-zinc-700">
      <h1 className="font-medium text-zinc-900 dark:text-zinc-200">Projects</h1>
      <div className="divide-y dark:divide-zinc-700">
        {projects.map(({ name, url, description }) => (
          <div key={name} className="text-sm space-y-2 py-4">
            <div className="flex items-center justify-between">
              <a
                href={url}
                target="_blank"
                className="underline font-normal underline-offset-[3px] dark:text-zinc-300"
              >
                {name}
              </a>
            </div>
            <p className="dark:text-zinc-400">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
