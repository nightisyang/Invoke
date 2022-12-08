import {
  generateRepeatedNumbers,
  randomNumberGenerator,
} from "../src/functions/functions";

describe("generateRepeatedNumbers takes in an integer n that returns an integer repeated n times", () => {
  it("should return 1 when given 1", () => {
    expect(generateRepeatedNumbers(1)).toEqual(1);
  });
  it("should return 22 when given 2", () => {
    expect(generateRepeatedNumbers(2)).toEqual(22);
  });
  it("should return 333 when given 3", () => {
    expect(generateRepeatedNumbers(3)).toEqual(333);
  });
  it("should return 4444 when given 4", () => {
    expect(generateRepeatedNumbers(4)).toEqual(4444);
  });
  it("should return 55555 when given 5", () => {
    expect(generateRepeatedNumbers(5)).toEqual(55555);
  });
  it("should return 666666 when given 6", () => {
    expect(generateRepeatedNumbers(6)).toEqual(666666);
  });
  it("should return 7777777 when given 7", () => {
    expect(generateRepeatedNumbers(7)).toEqual(7777777);
  });
  it("should return 88888888 when given 8", () => {
    expect(generateRepeatedNumbers(8)).toEqual(88888888);
  });
  it("should return 999999999 when given 9", () => {
    expect(generateRepeatedNumbers(9)).toEqual(999999999);
  });
});

describe("randomNumberGenerator returns a random number between 1 and 9", () => {
  it("should return a number between 1 and 9 in all 10,000 passes", () => {
    let itWorks = true;

    for (let i = 0; i < 10000; i++) {
      const result = randomNumberGenerator();

      if (result > 9 || result < 1 || !Number.isInteger(result)) {
        itWorks = false;
        break;
      }
    }
    expect(itWorks).toBeTruthy();
  });
});
