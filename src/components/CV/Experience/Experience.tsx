import React from "react";
import { jobs } from "./utils/jobs";
import { ExperienceBox } from "./ExperienceBox/ExperienceBox";
import { Row } from "../SHARED/Row/Row";

export const Experience: React.FC = () => {
  return (
    <Row rowHeader="Experience">
      <div className="grid gap-2 animate-fade-in-up">
        {jobs.map((job, index) => (
          <ExperienceBox key={index} {...job} withArrow />
        ))}
      </div>
    </Row>
  );
};
