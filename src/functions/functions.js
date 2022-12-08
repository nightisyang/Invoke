// Generate and returns a random number between 1 and 9
export function randomNumberGenerator() {
  let number = Math.floor(Math.random() * 9) + 1;
  return number;
}

// Generate repeated numbers
export function generateRepeatedNumbers(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += num.toString();
  }

  return parseInt(str);
}
