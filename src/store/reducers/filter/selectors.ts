import { State } from "#store/types";

export const selectFilter = (state: State) => state.filter.filter;