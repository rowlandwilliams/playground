import { useStore } from '@/store/store';
import classNames from 'classnames';
import { sankeyMargin } from '../utils/plot';
import { getLeftValueBasedOnNodePosition } from './utils/utils';
import { SankeyNodeTooltipHeader } from './SankeyNodeTooltipBody/SankeyNodeTooltipHeader/SankeyNodeTooltipHeader';
import { SankeyNodeTooltipBody } from './SankeyNodeTooltipBody/SankeyNodeTooltipBody';

export const SankeyNodeTooltip = () => {
    const { nodeIsHovered, nodeTooltipData } = useStore();

    const { x, y, province, nodeColor, nodeSum, nodePercentage } = nodeTooltipData;

    const getToOrFromIfNodeIsLeftOrRight = (xCoord: number) => {
        return xCoord > 0 ? 'to' : 'from';
    };

    const direction = getToOrFromIfNodeIsLeftOrRight(x);
    return (
        <div
            className={classNames('absolute rounded-sm bg-gray-50 dark:bg-zinc-800 text-xs shadow-lg', {
                hidden: !nodeIsHovered,
                'transform -translate-x-full': x > 0,
            })}
            style={{
                left: getLeftValueBasedOnNodePosition(x),
                top: y + sankeyMargin.top,
            }}
        >
            <SankeyNodeTooltipHeader provinceName={province} backgroundColor={nodeColor} />
            <SankeyNodeTooltipBody
                nodeSum={nodeSum}
                direction={direction}
                provinceName={province}
                nodeColor={nodeColor}
                nodePercentage={nodePercentage}
            />
        </div>
    );
};
