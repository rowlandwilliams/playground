import { ExperienceBox } from "../Experience/ExperienceBox/ExperienceBox";
import { Row } from "../SHARED/Row/Row";
import { Section } from "../SHARED/Section/Section";

const educationDetails = {
  title: "MSci Computational Ecology (1st Class Honours)",
  employer: "University College London (UCL)",
  image: "ucl.png",
  imageColorClass: "bg-black",
  bullets: [
    "Research project in Computational Ecology (78%).",
    "3rd Year at University of British Columbia, Canada.",
    "The Dean’s List Nominee (2014)",
  ],
  timeframe: { start: "2013-09", end: "2017-06" },
  contractType: [],
  locations: ["London, UK"],
};

export const Education = () => {
  return (
    <Row rowHeader="Education">
      <ExperienceBox {...educationDetails} withArrow={false} />
    </Row>
  );
};
