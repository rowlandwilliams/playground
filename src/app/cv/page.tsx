import { CvBio } from "@/components/CV/CvBio/CvBio";
import { CvSkills } from "@/components/CV/CvSkills/CvSkills";
import { Education } from "@/components/CV/Education/Education";
import { Experience } from "@/components/CV/Experience/Experience";
import { Row } from "@/components/CV/SHARED/Row/Row";
import { Section } from "@/components/CV/SHARED/Section/Section";
import Link from "next/link";

export default function CV() {
  return (
    <main className="flex flex-col items-center my-12">
      <article className="w-full max-w-[750px] divide-y ">
        <CvBio />
        <Row rowHeader="Toolkit">
          <CvSkills />
        </Row>
        <Experience />
        <Education />
      </article>
    </main>
  );
}
