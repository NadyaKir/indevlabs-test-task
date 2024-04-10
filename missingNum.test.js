const missingNum = require("./missingNum.js");

describe("missingNum function", () => {
  it("should return undefined for an empty array", () => {
    expect(missingNum([])).toBeUndefined();
  });

  it("should return the same number if there is only one element in the array", () => {
    expect(missingNum([1])).toBe(1);
    expect(missingNum([10])).toBe(10);
  });

  it("should handle arrays with negative numbers", () => {
    expect(missingNum([-3, -2, 0, 1])).toBe(-1);
    expect(missingNum([-5, -3, -2, -1])).toBe(-4);
  });

  it("should handle arrays with duplicates", () => {
    expect(missingNum([1, 2, 2, 3])).toBe(4);
    expect(missingNum([1, 2, 3, 3])).toBe(4);
    expect(missingNum([1, 2, 1, 3])).toBe(4);
  });
});
