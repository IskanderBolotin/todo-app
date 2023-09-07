import { TodoActionTypes, TodoLoadedAction, TodoAddAction, TodoChangeAction, TodoClearAction } from "#store/reducers/todo/types";
import { TodoType } from "#types/todo";

const todoLoadedAction = (payload: TodoType[]): TodoLoadedAction => {
  return {
    type: TodoActionTypes.TODO_LOADED,
    payload
  }
}

const todoAddAction = (payload: string): TodoAddAction => {
  return {
    type: TodoActionTypes.TODO_ADD,
    payload
  }
}

const todoChangeItemAction = (payload: string): TodoChangeAction => {
  return {
    type: TodoActionTypes.TODO_CHANGE_ITEM,
    payload
  }
}

const todoClearCompletedAction = (): TodoClearAction => {
  return {
    type: TodoActionTypes.TODO_CLEAR_COMPLETED,
  }
}

export {
  todoLoadedAction,
  todoAddAction,
  todoChangeItemAction,
  todoClearCompletedAction
}