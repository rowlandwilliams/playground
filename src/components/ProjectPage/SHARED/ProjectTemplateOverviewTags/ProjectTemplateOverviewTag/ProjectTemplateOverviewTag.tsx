import classNames from "classnames";

interface Props {
  text: string | null | undefined;
  borderColorClass: string;
}

export const ProjectTemplateOverviewTag = ({
  text,
  borderColorClass,
}: Props) => {
  return text ? (
    <div
      className={classNames("border px-3 text-body py-0.5 max-w-max rounded-2xl", [
        borderColorClass,
      ])}
    >
      {text}
    </div>
  ) : null;
};
