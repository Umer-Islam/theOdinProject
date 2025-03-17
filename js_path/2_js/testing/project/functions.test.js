const functions = require("./functions");

test("file file is imported", () => {
  expect("./functions").not.toBe(undefined);
});

test("is first letter capital", () => {
  //   const isCapital = functions.capitalize("hello");
  expect(functions.capitalize("hello")).toBe("Hello");
});

test("is string reversed", () => {
  //   expect(functions.reverseString()).toBe(Number);
  expect(functions.reverseString("abc")).toBe("cba");
});
describe("make sure that calculator does add, subtract,multiple, divide", () => {
  test("add", () => {
    expect(functions.calculator(2, 2, "+")).toBe(4);
  });

  test("subtract", () => {
    expect(functions.calculator(2, 2, "-")).toBe(0);
  });

  test("multiply", () => {
    expect(functions.calculator(3, 3, "*")).toBe(9);
  });

  test("divide", () => {
    expect(functions.calculator(2, 2, "/")).toBe(1);
  });
});

describe("make sure that caesar cipher works", () => {
  test("", () => {});
});

describe("analize array", () => {
  test("return average", () => {
    expect(functions.arrayAnalysis([1, 2, 3, 4, 5].average)).toBe(3);
  });
  test("return the min", () => {
    expect(functions.arrayAnalysis([2, 3, 1, 4, 5]).min).toBe(1);
  });
  test("return the max", () => {
    expect(functions.arrayAnalysis([1, 2, 44, 5, 5, 3, 4]).max).toBe(44);
  });
  test("should return the length of the array", () => {
    expect(functions.arrayAnalysis([1, 2, 3, 4, 5]).length).toBe(4);
  });
});
