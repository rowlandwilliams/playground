import { formatTooltipValue } from '../../../utils/general';

interface Props {
    nodeSum: number;
}

export const SankeyNodeTooltipPeopleStat = ({ nodeSum }: Props) => {
    return (
        <div className="flex items-end">
            <div className="text-zinc-600 dark:text-gray-50 text-base mr-1">
                {nodeSum && formatTooltipValue(nodeSum)}
            </div>
            <div className="text-2xs text-zinc-600 dark:text-gray-50">PEOPLE</div>
        </div>
    );
};
