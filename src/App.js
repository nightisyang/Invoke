import React from "react";
import { useState, useEffect } from "react";
import Instructions from "./components/instructions";
import "./styles.css";

const App = () => {
  const [firstNumber, setFirstNumber] = useState();
  const [otherNumbers, setOtherNumbers] = useState([]);
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

  // Generate the other numbers and set it to the otherNumbers state
  function generateOtherNumbers() {
    let otherNumbers = [];
    for (let i = 0; i < firstNumber; i++) {
      let str = "";
      let otherNumber = randomNumberGenerator();
      for (let j = 0; j < otherNumber; j++) {
        str += otherNumber.toString();
      }
      otherNumbers.push(parseInt(str));
    }
    console.log(otherNumbers);
    setOtherNumbers(otherNumbers);
  }

  // Sum all the numbers and set it to the sum state
  function sumAllNumbers() {
    let sum = 0;
    for (let i = 0; i < otherNumbers.length; i++) {
      sum += otherNumbers[i];
    }
    console.log(sum + firstNumber);
    setSum(sum + firstNumber);
  }

  // triggered when the firstNumber state changes
  useEffect(() => {
    // generate the other numbers
    generateOtherNumbers();
  }, [firstNumber]);

  // triggered when the otherNumbers state changes
  useEffect(() => {
    // sum all the numbers
    sumAllNumbers();
  }, [otherNumbers]);

  return (
    <div className="container">
      <div className="split">
        <div className="window">
          <Instructions />
        </div>
        <div className="test">
          <h1>Test</h1>
          <span>
            {" "}
            <button onClick={generateFirstNumber}>
              Generate First Number
            </button>{" "}
            First number: {firstNumber}
          </span>
          <div>Other numbers: {otherNumbers.map((number) => number + " ")}</div>
          <div>Sum of all numbers: {sum}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
