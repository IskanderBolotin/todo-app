import filterReducer from "../index";
import { FilterActionTypes } from "../types";

describe("filterActions", () => {
  it("should return deafult satate when passed an ampty action", () => {
    //@ts-ignore
    const result = filterReducer(undefined, { type: "" });

    expect(result).toEqual({ filter: "all" });
  });

  it("should set filter value with 'filterSetAction' action", () => {
    const action = { type: FilterActionTypes.FILTER_SET, payload: "completed" };

    //@ts-ignore
    const result = filterReducer({ filter: "all" }, action);

    expect(result.filter).toBe("completed");
  });
});