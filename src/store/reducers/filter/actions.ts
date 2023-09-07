import { FilterActionTypes, TodoChangeAction } from "#store/reducers/filter/types";
import { FilterType } from "#types/filter";

const filterSetAction = (payload: FilterType): TodoChangeAction => {
  return {
    type: FilterActionTypes.FILTER_SET,
    payload,
  };
};
export { filterSetAction };
