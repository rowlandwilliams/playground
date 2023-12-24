import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: string | ReactNode;
  isSmall?: boolean;
}

export const ProjectTemplateOverviewTitleAndChildSection = ({
  title,
  children,
  isSmall = false,
}: Props) => {
  const childIsString = typeof children === "string";
  return (
    <section className="space-y-2">
      <h1
        className={classNames("font-medium text-header", {
          "text-xs": isSmall,
          "text-sm": !isSmall,
        })}
      >
        {title}
      </h1>
      {childIsString ? <div>{children}</div> : children}
    </section>
  );
};
