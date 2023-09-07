import { combineReducers } from "redux";
import todoReducer from "#store/reducers/todo";
import filterReducer from "#store/reducers/filter";

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});

export type RootReducerType = ReturnType <typeof rootReducer>;

export default rootReducer;
