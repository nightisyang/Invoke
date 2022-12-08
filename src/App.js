import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

import Instructions from "./components/instructions";
import {
  generateRepeatedNumbers,
  randomNumberGenerator,
} from "./functions/functions";

const App = () => {
  const [firstNumber, setFirstNumber] = useState();
  const [otherNumbers, setOtherNumbers] = useState([]);
  const [repeatedNumbers, setrepeatedNumbers] = useState([]);
  const [sum, setSum] = useState();

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
          <div>Press to generate a series of random numbers: </div>
          <button onClick={generateFirstNumber}>Start</button>
          <br></br>
          {firstNumber ? (
            <>
              <br></br>
              <div>First number: {firstNumber}</div>
              <div>
                Next {otherNumbers.length} numbers generated:{" "}
                {otherNumbers.join(", ")}
              </div>
              <br></br>
              <div>Sum of all numbers: </div>
              <div>
                {repeatedNumbers.join(" + ")} = {sum}
              </div>
            </>
          ) : (
            <>
              <br></br>
              <div>Waiting for first number to be generated...</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
