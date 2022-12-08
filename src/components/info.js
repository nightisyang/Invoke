import React from "react";

export default function Info() {
  const test1 = `
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
    });`;

  const test2 = `
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
  
      `;

  return (
    <>
      <h2>Design</h2>
      <h3>Efficiency</h3>
      <p>
        The initial approach had a O(N^2) time complexity as{" "}
        <i>generateRepeatedNumbers() </i>
        was implemented as a loop, and was nested in a loop in{" "}
        <i>generateAndSetOtherNumbers()</i>.
      </p>
      <p>
        The current implementation has a O(N) running time as{" "}
        <i>generateRepeatedNumbers()</i> was refactored to look up numbers and
        expected number from a map which has a O(1) lookup time.{" "}
      </p>
      <h3>Maintainability</h3>
      <p>
        Code was refactored to reduce code redundancy,{" "}
        <i>randomNumberGenerator()</i> and <i>generateRepeatedNumbers()</i> was
        placed in an external file as they are also used in testing.
      </p>
      <h2>Testing</h2>
      <p>
        Carried out using <a href="https://jestjs.io/">jest</a>
      </p>
      <ul>
        <li>
          <i>randomNumberGenerator()</i> - tested using 10,000 interations to
          ensure that values returned are integers and between 1 - 9.
          <div>
            <textarea cols={70} rows={10} wrap={"off"} readOnly>
              {test1}
            </textarea>
          </div>
        </li>
        <li>
          <i>generateRepeatedNumbers()</i> - tested for each integer between 1 -
          9 to ensure that values returned are integer n, repeated n times
          <div>
            <textarea cols={70} rows={10} wrap={"off"} readOnly>
              {test2}
            </textarea>
          </div>
        </li>
      </ul>
    </>
  );
}
