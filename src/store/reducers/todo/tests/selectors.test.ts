import { selectTodos } from "../selectors";

describe("redux selectors", () => {
  it("shoul select todos from state", () => {
    const todos = [
      {
        id: "777",
        title: "Test Redux",
        completed: false,
      },
    ];

    //@ts-ignore
    const result = selectTodos({
      todo: {
        todo: todos
      }
    });

    expect(result).toEqual(todos);
  });
});
