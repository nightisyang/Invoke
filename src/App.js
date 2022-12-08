import React from "react";
import { useState, useEffect } from "react";
import Instructions from "./components/instructions";
import "./styles.css";

const App = () => {
  const [firstNumber, setFirstNumber] = useState();
  const [otherNumbers, setOtherNumbers] = useState([]);
  const [repeatedNumbers, setrepeatedNumbers] = useState([]);
  const [sum, setSum] = useState();

  // Generate and returns a random number between 1 and 9
  function randomNumberGenerator() {
    let number = Math.floor(Math.random() * 9) + 1;
    return number;
  }

  // Generate the first number and set it to the firstNumber state
  function generateFirstNumber() {
    let firstNumber = randomNumberGenerator();
    console.log(firstNumber);
    setFirstNumber(firstNumber);
  }

  // Generate the other numbers, repeated numbers and set it to respective state
  function generateOtherNumbers(num) {
    let generatedNumbers = [];
    let repeatedNumArr = [];

    for (let i = 0; i < num; i++) {
      let otherNumber = randomNumberGenerator();
      let repeatedNum = generateRepeatedNumbers(otherNumber);

      generatedNumbers.push(otherNumber);
      repeatedNumArr.push(repeatedNum);
    }

    console.log(generatedNumbers);
    console.log(repeatedNumArr);
    setOtherNumbers(generatedNumbers);
    setrepeatedNumbers(repeatedNumArr);
  }

  // Generate the repeated numbers
  function generateRepeatedNumbers(num) {
    let str = "";
    for (let i = 0; i < num; i++) {
      str += num.toString();
    }

    return parseInt(str);
  }

  // triggered when the firstNumber state changes
  useEffect(() => {
    // generate the other numbers, setOtherNumbers and setrepeatedNumbers
    generateOtherNumbers(firstNumber);
  }, [firstNumber]);

  // triggered when the otherNumbers state changes
  useEffect(() => {
    // sum all the numbers
    setSum(repeatedNumbers.reduce((a, b) => a + b, 0));
  }, [repeatedNumbers]);

  return (
    <div className="container">
      <div className="split">
        <div className="window">
          <Instructions />
        </div>
        <div className="test">
          <h1>Summation</h1>
          <span>
            {" "}
            Press to generate a series of random numbers:{" "}
            <button onClick={generateFirstNumber}>Start</button>
          </span>
          {firstNumber ? (
            <>
              <div>First number: {firstNumber}</div>
              <div>
                Next {otherNumbers.length} numbers generated:{" "}
                {otherNumbers.join(", ")}
              </div>
              <div>Sum of all numbers: </div>
              <div>
                {repeatedNumbers.join(" + ")} = {sum}
              </div>
            </>
          ) : (
            <div>Waiting for first number to be generated...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
