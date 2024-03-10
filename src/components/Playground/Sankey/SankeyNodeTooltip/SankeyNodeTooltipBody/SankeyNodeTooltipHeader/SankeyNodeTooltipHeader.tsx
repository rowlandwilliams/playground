interface Props {
    provinceName: string;
    backgroundColor: string;
}

export const SankeyNodeTooltipHeader = ({ provinceName, backgroundColor }: Props) => {
    return (
        <div
            className="p-2 text-gray-50 dark:text-zinc-900 rounded-t-sm"
            style={{ backgroundColor: backgroundColor }}
        >
            AREA {provinceName}
        </div>
    );
};
