import { FilterState, TodoAction, FilterActionTypes } from "./types";

const initialState: FilterState = {
  filter: "all",
};

const filterReducer = (state = initialState, action: TodoAction): FilterState => {
  switch (action.type) {
    case FilterActionTypes.FILTER_SET: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default filterReducer;
