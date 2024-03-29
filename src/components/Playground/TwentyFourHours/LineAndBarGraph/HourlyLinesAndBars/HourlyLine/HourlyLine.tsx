interface Props {
    lineDAttribute: string;
    groupColor: string;
}

export const HourlyLine = ({ lineDAttribute, groupColor }: Props) => {
    return <path d={lineDAttribute} fill="none" stroke={groupColor} className="stroke-1 stroke-zinc-800 dark:stroke-white" />;
};
