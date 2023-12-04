import { BioText } from "@/components/BioText/BioText";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Projects";
import { Playground } from "@/components/Playground/Playground";
import { TernaryPlot } from "@/components/TernaryPlot/TernaryPlot";

export default function Project({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
