import { TodoType } from "#types/todo";

export type TodoState = {
  todo: TodoType[]
}

export enum TodoActionTypes {
  TODO_LOADED = "TODO_LOADED",
  TODO_ADD = "TODO_ADD",
  TODO_CHANGE_ITEM = "TODO_CHANGE_ITEM",
  TODO_CLEAR_COMPLETED = "TODO_CLEAR_COMPLETED",
}

export type TodoLoadedAction = {
  type: TodoActionTypes.TODO_LOADED;
  payload: TodoType[];
}

export type TodoAddAction = {
  type: TodoActionTypes.TODO_ADD;
  payload: string;
}

export type TodoChangeAction = {
  type: TodoActionTypes.TODO_CHANGE_ITEM;
  payload: string;
}

export type TodoClearAction = {
  type: TodoActionTypes.TODO_CLEAR_COMPLETED;
}

export type TodoAction = TodoLoadedAction | TodoAddAction | TodoChangeAction | TodoClearAction;