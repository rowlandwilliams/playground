import { legacy_createStore as createStore, combineReducers } from "redux";
import { tooltipDifferenceReducer } from "./tooltipDifferenceReducer";
import { topChartIsHoveredReducer } from "./topChartIsHoveredReducer";
import { visibleDatesReducer } from "./visibleDatesReducer";

export const allReducers = combineReducers({
  visibleDatesDomain: visibleDatesReducer,
  topChartIsHovered: topChartIsHoveredReducer,
  tooltipDifferences: tooltipDifferenceReducer,
});

export const store = createStore(allReducers);

export type RootState = ReturnType<typeof allReducers>;
