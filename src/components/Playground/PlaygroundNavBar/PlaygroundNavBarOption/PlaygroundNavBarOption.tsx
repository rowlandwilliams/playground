import Link from "next/link";
import classNames from "classnames";

interface Props {
  label: string;
  icon: JSX.Element;
  link: string;
  isActive: boolean;
  isDesktop: boolean;
  noLink?: boolean;
  handleClick?: () => void;
}

export const PlaygroundNavbarOption: React.FC<Props> = ({
  label,
  icon,
  link,
  isActive,
  isDesktop,
  noLink = false,
  handleClick = undefined,
}) => {
  const className = classNames(
    "flex whitespace-nowrap gap-x-2 items-center justify-center rounded-md",
    {
      "bg-zinc-200 dark:bg-zinc-700  font-medium": isActive,
      "hover:bg-zinc-100 dark:hover:bg-zinc-800": !isActive,
      "px-4 py-2": isDesktop,
      "w-8 h-8": !isDesktop,
    }
  );

  const content = (
    <>
      {icon}
      {isDesktop && <p>{label}</p>}
    </>
  );

  return noLink ? (
    <button onClick={handleClick} type="button" className={className}>
      {content}
    </button>
  ) : (
    <Link href={`/playground/${link}`} className={className}>
      {content}
    </Link>
  );
};
