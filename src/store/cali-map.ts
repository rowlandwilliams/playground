import create from "zustand";

interface CaliMapStore {
  stateMapIsHovered: boolean;
  tooltipData: {
    mouseCoords: number[];
    polygonData: any;
    activePolygonColor: string | null;
  };
  setStateMapIsHovered: (isHovered: boolean) => void;
  setTooltipData: (
    mouseCoords: number[],
    polygonData: object,
    activePolygonColor: string | null
  ) => void;
}

const useCaliMapStore = create<CaliMapStore>((set) => ({
  stateMapIsHovered: false,
  tooltipData: {
    mouseCoords: [],
    polygonData: {},
    activePolygonColor: null,
  },
  setStateMapIsHovered: (isHovered: boolean) =>
    set((state) => ({ stateMapIsHovered: isHovered })),
  setTooltipData: (
    mouseCoords: number[],
    polygonData: object,
    activePolygonColor: string | null
  ) =>
    set((state) => ({
      tooltipData: {
        ...state.tooltipData,
        mouseCoords,
        polygonData,
        activePolygonColor,
      },
    })),
}));

export default useCaliMapStore;
