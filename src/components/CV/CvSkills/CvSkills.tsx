"use client";

import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";
import { CvSkill } from "@/types/cv";
import { Group } from "@visx/group";
import { Treemap, hierarchy, stratify, treemapBinary } from "@visx/hierarchy";
import classNames from "classnames";
import { skills } from "./utils/utils";

const treemapData = stratify<CvSkill>()
  .id((d) => d.id)
  .parentId((d) => (d.parent === null ? undefined : d.parent))(skills)
  .sum((d) => d.size ?? 0);

const padding = 2;

export const CvSkills = () => {
  const { graphWidth, graphHeight, ref } = useResponsiveGraphDims();
  const root = hierarchy(treemapData).sort(
    (a, b) => (b.value || 0) - (a.value || 0)
  );
  const isMobile = graphWidth > 430;
  const paddingLeft = isMobile ? padding : 0;

  return (
    <div ref={ref} className="h-[430px] md:h-[235px]">
      <svg width={graphWidth} height={graphHeight}>
        <Treemap<typeof treemapData>
          root={root}
          size={[graphWidth, graphHeight]}
          tile={treemapBinary}
          round
          paddingLeft={paddingLeft}
          paddingInner={padding}
          paddingRight={0}
          paddingOuter={0}
        >
          {(treemap) => (
            <Group>
              {treemap
                .descendants()
                .reverse()
                .map((node, i) => {
                  const nodeWidth = node.x1 - node.x0;
                  const nodeHeight = node.y1 - node.y0;

                  const isUi = node.parent?.data.data.id === "ui";
                  const left = node.x0 + (isUi && isMobile ? -padding * 2 : 0);

                  return (
                    <Group key={`node-${i}`} top={node.y0} left={left}>
                      {node.depth === 2 && (
                        <>
                          <rect
                            width={nodeWidth}
                            height={nodeHeight}
                            className={classNames(
                              node.data.data.fillClass,
                              "dark:stroke-zinc-950"
                            )}
                            rx={8}
                            ry={8}
                          />
                          <text
                            x={8}
                            y={20}
                            className="dark:fill-white fill-white font-haas text-sm"
                            fontSize={12}
                            textAnchor="start"
                          >
                            {node.data.data.id}
                          </text>
                        </>
                      )}
                    </Group>
                  );
                })}
            </Group>
          )}
        </Treemap>
      </svg>
    </div>
  );
};
