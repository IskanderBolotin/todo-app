import { TodoState, TodoActionTypes, TodoAction } from "./types";
import { TodoType } from "#types/todo";

const initialState: TodoState = {
  todo: [],
};

const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.TODO_LOADED: {
      return {
        ...state,
        todo: [...action.payload],
      };
    }
    case TodoActionTypes.TODO_ADD: {
      const newItem = {
        id: `${new Date().getTime()}`,
        title: action.payload,
        completed: false,
      }
      return {
        ...state,
        todo: [...state.todo, newItem],
      };
    }
    case TodoActionTypes.TODO_CHANGE_ITEM: {
      const changesTodos = state.todo.map<TodoType>((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        ...state,
        todo: [...changesTodos],
      };
    }
    case TodoActionTypes.TODO_CLEAR_COMPLETED: {
      const changesTodos = state.todo.reduce<TodoType[]>((acc, item) => {
        if (!item.completed) {
          return [...acc, item];
        }
        return [...acc];
      }, []);
      return {
        ...state,
        todo: [...changesTodos],
      };
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
