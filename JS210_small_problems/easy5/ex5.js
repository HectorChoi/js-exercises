'use strict';

const negative = function negativeNumber(number) {
  return -Math.abs(number);
};

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
