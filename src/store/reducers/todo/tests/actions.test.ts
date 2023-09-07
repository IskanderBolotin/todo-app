import todoReducer from "../index";
import { TodoActionTypes } from "../types";

const todoData = [
  {
    id: "1",
    title: "Test Redux",
    completed: false,
  },
  {
    id: "2",
    title: "Test Action",
    completed: true,
  },
  {
    id: "3",
    title: "Test Selector",
    completed: true,
  },
  {
    id: "4",
    title: "Last item",
    completed: false,
  },
];

describe("todoActions", () => {
  it("should return deafult satate when passed an ampty action", () => {
    //@ts-ignore
    const result = todoReducer(undefined, { type: "" });

    expect(result).toEqual({ todo: [] });
  });

  it("should add new todo item with 'todoAddAction' action", () => {
    const action = { type: TodoActionTypes.TODO_ADD, payload: "Test todoAddAction" };

    //@ts-ignore
    const result = todoReducer({ todo: [] }, action);

    expect(result.todo[0].title).toBe("Test todoAddAction");
    expect(result.todo[0].completed).toBe(false);
  });

  it("should loaded todo with 'todoLoadedAction' action", () => {
    const action = { type: TodoActionTypes.TODO_LOADED, payload: todoData };

    //@ts-ignore
    const result = todoReducer({ todo: [] }, action);

    expect(result.todo.length).toBe(4);
  });

  it("should change todo by id item with 'todoChangeItemAction' action", () => {
    const action = { type: TodoActionTypes.TODO_CHANGE_ITEM, payload: "1" };

    //@ts-ignore
    const result = todoReducer({ todo: [...todoData] }, action);

    expect(result.todo[0].completed).toBe(true);
  });

  it("should clear todo with status completed with 'todoClearCompletedAction' action", () => {
    const action = { type: TodoActionTypes.TODO_CLEAR_COMPLETED };

    //@ts-ignore
    const result = todoReducer({ todo: [...todoData] }, action);
    
    expect(result.todo.length).toBe(1);
  });

});
