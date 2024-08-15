"use client";

import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";
import { Group } from "@visx/group";
import { Treemap, hierarchy, stratify, treemapBinary } from "@visx/hierarchy";
import classNames from "classnames";

export interface Skill {
  id: string;
  parent: string | null;
  size: number | null;
  fillClass?: string;
}

const skills = [
  { id: "root", parent: null, size: 0 },
  { id: "ui", parent: "root", size: null },
  { id: "be", parent: "root", size: null },
  {
    id: "React / Next.js",
    parent: "ui",
    size: 30,
    fillClass: "fill-teal-500",
  },
  { id: "d3.js", parent: "ui", size: 10, fillClass: "fill-pink-500" },
  { id: "TypeScript", parent: "ui", size: 10, fillClass: "fill-purple-500" },
  { id: "Tailwind CSS", parent: "ui", size: 7.5, fillClass: "fill-sky-500" },
  { id: "Svelte", parent: "ui", size: 5, fillClass: "fill-orange-500" },
  { id: "GraphQL", parent: "be", size: 15, fillClass: "fill-green-500" },
  {
    id: "PostgreSQL",
    parent: "be",
    size: 8,
    fillClass: "fill-fuchsia-500",
  },
  {
    id: "AWS",
    parent: "be",
    size: 10,
    fillClass: "fill-yellow-500",
  },
  {
    id: "Express",
    parent: "be",
    size: 3,
    fillClass: "fill-red-600",
  },
];

const data = stratify<Skill>()
  .id((d) => d.id)
  .parentId((d) => (d.parent === null ? undefined : d.parent))(skills)
  .sum((d) => d.size ?? 0);

const padding = 2;

export const CvSkills = () => {
  const { graphWidth, graphHeight, ref } = useResponsiveGraphDims();
  const root = hierarchy(data).sort((a, b) => (b.value || 0) - (a.value || 0));

  return (
    <div ref={ref} className="h-[430px] md:h-[235px]">
      <svg width={graphWidth} height={graphHeight}>
        <Treemap<typeof data>
          root={root}
          size={[graphWidth, graphHeight]}
          tile={treemapBinary}
          round
          paddingLeft={padding}
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
                  const left = node.x0 + (isUi ? -padding * 2 : 0);

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
                            className="dark:fill-white font-haas text-sm"
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
