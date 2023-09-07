import { FilterType } from "#types/filter";

export type FilterState = {
  filter: FilterType
}

export enum FilterActionTypes {
  FILTER_SET = "FILTER_SET",
}

export type TodoChangeAction = {
  type: FilterActionTypes.FILTER_SET;
  payload: FilterType;
}

export type TodoAction = TodoChangeAction;