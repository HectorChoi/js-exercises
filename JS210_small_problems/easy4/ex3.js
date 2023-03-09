'use strict';

const halvsies = function splitArrayIntoArrayOfTwoArrays(arr) {
  const result = [[], []];
  arr.forEach((element, index) => {
    if (index < Math.round(arr.length / 2)) {
      result[0].push(element);
    } else {
      result[1].push(element);
    }
  });

  return result;
};

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]
