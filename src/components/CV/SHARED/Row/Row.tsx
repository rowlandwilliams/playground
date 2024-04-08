import React, { ReactNode } from "react";
import { Section } from "../Section/Section";

interface Props {
  rowHeader: string;
  children: ReactNode;
}

export const Row: React.FC<Props> = ({ rowHeader, children }) => {
  return (
    <Section>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-24 flex-shrink-0 font-medium text-indigo-500">
          {rowHeader}
        </div>
        <div className="flex-grow text-gray-700">{children}</div>
      </div>
    </Section>
  );
};
