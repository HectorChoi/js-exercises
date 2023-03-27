'use strict';

const sequence = function countStartingNumberMultiples(count, startNumber) {
  const result = [];

  for (let index = 0; index < count; index += 1) {
    result.push((index + 1) * startNumber);
  }

  return result;
};

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
