import { generateRepeatedNumbers } from "../src/functions/functions";

describe("generateRepeatedNumbers", () => {
  it("should return 1 when given 1", () => {
    expect(generateRepeatedNumbers(1)).toBe(1);
  });
  it("should return 22 when given 2", () => {
    expect(generateRepeatedNumbers(2)).toBe(22);
  });
  it("should return 333 when given 3", () => {
    expect(generateRepeatedNumbers(3)).toBe(333);
  });
  it("should return 4444 when given 4", () => {
    expect(generateRepeatedNumbers(4)).toBe(4444);
  });
  it("should return 55555 when given 5", () => {
    expect(generateRepeatedNumbers(5)).toBe(55555);
  });
  it("should return 666666 when given 6", () => {
    expect(generateRepeatedNumbers(6)).toBe(666666);
  });
  it("should return 7777777 when given 7", () => {
    expect(generateRepeatedNumbers(7)).toBe(7777777);
  });
  it("should return 88888888 when given 8", () => {
    expect(generateRepeatedNumbers(8)).toBe(88888888);
  });
  it("should return 999999999 when given 9", () => {
    expect(generateRepeatedNumbers(9)).toBe(999999999);
  });
});
