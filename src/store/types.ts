import { TodoState } from "#store/reducers/todo/types";
import { FilterState } from "#store/reducers/filter/types";

export type State = {
  todo: TodoState;
  filter: FilterState;
}