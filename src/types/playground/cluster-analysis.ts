export interface Point {
  x: number;
  y: number;
  group: number;
}

export interface LineGraphPair {
  year: number;
  yValue: number;
}

export interface CoordsWithTooltipData {
  coords: { x: number; y: number };
  tooltipData: { x: number; y: number; group: number };
}
