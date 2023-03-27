// Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

const sum = function sumDigits(number) {
  return String(number)
    .split('')
    .map((digitStr) => parseInt(digitStr, 10))
    .reduce((sum, ele) => sum + ele);
};

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
