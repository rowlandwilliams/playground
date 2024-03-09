"use client";

import { useResponsiveGraphDims } from "@/hooks/useResponsiveGraphWidth";
import { geoAzimuthalEqualArea, geoPath, geoGraticule10 } from "d3-geo";
import { feature } from "topojson-client";
import land from "./data/land.json";
import ice from "./data/ice.json";

const circlePadding = 10;
const backgroundGrey = "#1F2937";
const northIceGrey = "#dedede";
const seaBlue = "#759cc2";

export const AntarcticMap = () => {
  const { ref, graphHeight, graphWidth } = useResponsiveGraphDims();
  const dim = Math.min(graphHeight, graphWidth);

  const projection = geoAzimuthalEqualArea()
    .scale(500)
    .rotate([0, 90])
    .translate([(dim + circlePadding) / 2, (dim + circlePadding) / 2]);
  const pathGenerator = geoPath().projection(projection);

  const landFeat = feature(land, land.objects.antarctica);
  const iceFeat = feature(ice, ice.objects.shelves);

  console.log(landFeat);

  return (
    <div className="grow flex h-full justify-center" ref={ref}>
      <svg className="" width={dim} height={dim}>
        <defs>
          <clipPath id="myClip">
            <circle
              r={dim / 2}
              cx={(dim + circlePadding) / 2}
              cy={(dim + circlePadding) / 2}
              fill='"white"'
              stroke="black"
            ></circle>
          </clipPath>
          <radialGradient id="myGradient">
            <stop offset="60%" stopColor={seaBlue} stopOpacity="1.0" />
            <stop offset="70%" stopColor={seaBlue} stopOpacity="0.9" />
            <stop offset="80%" stopColor={seaBlue} stopOpacity="0.8" />
            <stop offset="100%" stopColor={seaBlue} stopOpacity="0.6" />
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={backgroundGrey}
          stroke={northIceGrey}
        ></rect>
        <g id="map-group" clip-path="url(#myClip)">
          <rect
            width={dim}
            height={dim}
            x={circlePadding / 2}
            y={circlePadding / 2}
            fill="url(#myGradient)"
          ></rect>
          <g id="rock-group"></g>
        </g>
        {iceFeat.features.map((feat) => (
          <path className=" fill-gray-200" d={pathGenerator(feat)} />
        ))}
        {landFeat.features.map((feat) => (
          <path
            className=" fill-white stroke-gray-300"
            d={pathGenerator(feat)}
          />
        ))}
      </svg>
    </div>
  );
};
