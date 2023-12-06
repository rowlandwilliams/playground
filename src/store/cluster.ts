import create from "zustand";
import { CoordsWithTooltipData, Point } from "../types/cluster-analysis";

const graphMargin = { top: 40, right: 40, bottom: 40, left: 40 };

interface AppState {
  zoomGraphDomains: number[][];
  setZoomGraphDomains: (zoomGraphDomains: number[][]) => void;
  pointsData: Point[];
  activeSelector: string;
  setActiveSelector: (selectorText: string) => void;
  coordsAndTooltipData: CoordsWithTooltipData;
  setCoordsAndTooltipData: (
    coordsAndTooltipData: CoordsWithTooltipData
  ) => void;
  pointIsHovered: boolean;
  setPointIsHovered: (pointIsHovered: boolean) => void;
}

const points = [...Array(1000)].map(() => ({
  x: Math.random() < 0.5 ? Math.random() * 2 : -Math.random() * 2,
  y: Math.random() < 0.5 ? Math.random() * 2 : -Math.random() * 2,
  group: Math.floor(Math.random() * 4),
}));

export const clusterStore = create<AppState>((set) => ({
  zoomGraphDomains: [
    [graphMargin.left, graphMargin.top],
    [graphMargin.left + 100, graphMargin.top + 100],
  ],
  setZoomGraphDomains: (zoomGraphDomains: number[][]) =>
    set({ zoomGraphDomains }),
  pointsData: points,
  activeSelector: "PCA",
  setActiveSelector: (activeSelector: string) => set({ activeSelector }),
  coordsAndTooltipData: {
    coords: { x: 0, y: 0 },
    tooltipData: { x: 0, y: 0, group: 1 },
  },
  setCoordsAndTooltipData: (coordsAndTooltipData: CoordsWithTooltipData) =>
    set({ coordsAndTooltipData }),
  pointIsHovered: false,
  setPointIsHovered: (pointIsHovered: boolean) => set({ pointIsHovered }),
}));
