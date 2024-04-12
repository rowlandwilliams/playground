import { Jobs } from "@/types/types";

export const jobs: Jobs = [
  {
    title: "Lead Software Engineer",
    employer: "kulea - African Commodity Intelligence",
    image: "kulea.svg",
    imageColorClass: "bg-white border dark:border-none dark:bg-zinc-950",
    bullets: [
      "Founding engineer and tech lead for kulea, a seed-funded intelligence platform for African commodities.",
      "Overseeing product development and managing a team of engineers in Nairobi, Kenya.",
      "Full-stack development - React / Next.js, TypeScript, d3.js, Apollo GraphQL, PostgreSQL & AWS.",
      "UI/UX design and creative direction.",
    ],
    timeframe: { start: "2020-12" },
    contractType: ["Contract", "Part-time"],
    locations: ["Nairobi, Kenya", "Remote"],
    isCurrent: true,
  },
  {
    title: "Data Visualisation Engineer & Designer",
    employer: "Freelance",
    image: "rowland.svg",
    imageColorClass: "bg-yellow-200",
    bullets: [
      "Various projects at the interface of software development, UX design and data visualisation.",
    ],
    timeframe: { start: "2020-10" },
    contractType: ["Contract", "Full-time"],
    locations: ["Remote"],
  },
  {
    title: "Software Engineer",
    employer: "Supernova AI",
    image: "supernova.jpeg",
    imageColorClass: "bg-black",
    bullets: [
      "Discovery work for a novel ESG Investment platform.",
      "Developed visualisations using d3.js and established UI component library using Storybook.",
    ],
    timeframe: { start: "2021-05", end: "2021-07" },
    contractType: ["Contract", "Full-time"],
    locations: ["Remote", "London, UK"],
  },
  {
    title: "Data Scientist & Visualisation Specialist",
    employer: "Global Canopy",
    image: "globalcanopy.svg",
    imageColorClass: "bg-green-200",
    bullets: [
      "Analysis of data from TRASE, a supply chain transparency initiative for agricultural commodities.",
      "Worked from briefs to write data-driven stories and visualisations for communications materials.",
    ],
    timeframe: { start: "2017-10", end: "2018-04" },
    contractType: ["Full-time"],
    locations: ["Oxford, UK"],
  },
];
