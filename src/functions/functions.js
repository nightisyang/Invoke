export function generateRepeatedNumbers(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    str += num.toString();
  }

  return parseInt(str);
}
