import { State } from "#store/types";

export const selectTodos = (state: State) => state.todo.todo;