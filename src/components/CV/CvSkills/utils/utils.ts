export const skills = [
  { id: "root", parent: null, size: 0 },
  { id: "ui", parent: "root", size: null },
  { id: "be", parent: "root", size: null },
  {
    id: "React / Next.js",
    parent: "ui",
    size: 30,
    fillClass: "fill-teal-500",
  },
  { id: "d3.js", parent: "ui", size: 10, fillClass: "fill-pink-500" },
  {
    id: "TypeScript",
    parent: "ui",
    size: 10,
    fillClass: "fill-purple-500",
  },
  {
    id: "Tailwind CSS",
    parent: "ui",
    size: 7.5,
    fillClass: "fill-sky-500",
  },
  { id: "Svelte", parent: "ui", size: 5, fillClass: "fill-orange-500" },
  {
    id: "GraphQL",
    parent: "be",
    size: 15,
    fillClass: "fill-green-500",
  },
  {
    id: "PostgreSQL",
    parent: "be",
    size: 8,
    fillClass: "fill-fuchsia-500",
  },
  {
    id: "AWS",
    parent: "be",
    size: 10,
    fillClass: "fill-yellow-500",
  },
  {
    id: "Express",
    parent: "be",
    size: 3,
    fillClass: "fill-red-600",
  },
];
