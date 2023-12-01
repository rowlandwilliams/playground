import Image from "next/image";

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

export default function Home() {
  return (
    <main className="flex px-8 flex-col items-center mt-12 text-zinc-600">
      <article className="w-full max-w-[550px] space-y-16">
        <header>
          <div className="flex justify-between items-center">
            <h1 className="flex gap-x-2 items-center py-2 text-lg text-zinc-900 font-medium ">
              Rowland Williams
            </h1>
            <div className="hover:bg-zinc-100 h-6 w-6 flex items-center justify-center rounded-sm">
              <Image width={16} height={16} alt="github" src={"./github.svg"} />
            </div>
          </div>
          <h2 className="text-xs flex items-center text-zinc-600 font-light gap-x-2 ">
            Design Technologist
            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-blue-700 via-rose-600 to-yellow-400"></div>
          </h2>
        </header>
        <section className="text-lg font-light text-zinc-700">
          Hi — I&apos;m Rowland, a Software Engineer interested in Data
          Visualisation. I connect data, design and technology to build apps
          that explore and visualise complex information.
        </section>
        <section className="font-light space-y-2 text-zinc-700">
          <h1 className="font-medium text-zinc-900">Projects</h1>
          <div className="divide-y">
            {projects.map(({ name, url, description }) => (
              <div key={name} className="text-sm space-y-2 py-4">
                <a
                  href={url}
                  target="_blank"
                  className="underline font-normal underline-offset-[3px]"
                >
                  {name}
                </a>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
