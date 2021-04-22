const sum = require("./sum");

describe("sum", () => {
  test("4 + 5 = 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  test("0 + 0 = 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("if has a parameter that is not a number then throw error", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });

  test("if has a parameter that is not a number then throw error parameters must be numbers", () => {
    expect(() => {
      sum(4, "5");
    }).toThrowError(new Error("parameters must be numbers"));
  });
});
