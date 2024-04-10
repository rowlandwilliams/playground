import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Section: React.FC<Props> = ({ children }) => {
  return (
    <section className="animate-fade-in-up dark:border-zinc-600 py-4">
      {children}
    </section>
  );
};
