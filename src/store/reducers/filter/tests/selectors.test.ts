import { selectFilter } from "../selectors";

describe("redux selectors", () => {
  it("shoul select filter from state", () => {
    const filter = "all"

    //@ts-ignore
    const result = selectFilter({
      filter: {
        filter: "all",
      },
    });

    expect(result).toEqual(filter);
  });
});
