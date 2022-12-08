// Generate and returns a random number between 1 and 9
export function randomNumberGenerator() {
  let number = Math.floor(Math.random() * 9) + 1;
  return number;
}

// Generate repeated numbers
export function generateRepeatedNumbers(num) {
  const numMap = {
    1: 1,
    2: 22,
    3: 333,
    4: 4444,
    5: 55555,
    6: 666666,
    7: 7777777,
    8: 88888888,
    9: 999999999,
  };

  return numMap[num];
}
