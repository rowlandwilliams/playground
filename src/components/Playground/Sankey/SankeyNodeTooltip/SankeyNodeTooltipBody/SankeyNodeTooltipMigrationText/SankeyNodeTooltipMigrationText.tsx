interface Props {
  direction: string;
  provinceName: string;
}

export const SankeyNodeTooltipMigrationText = ({
  direction,
  provinceName,
}: Props) => {
  return (
    <div className="text-zinc-600 dark:text-zinc-300">
      <div>
        migrated {direction}{" "}
        <span className="text-zinc-800 dark:text-zinc-50">
          {provinceName && provinceName.toUpperCase()}
        </span>
      </div>
      <div>between 2005 and 2010</div>
    </div>
  );
};
