'use strict';

const union = function unionNewArray(arr1, arr2) {
  const result = [];
  [...arr1, ...arr2].forEach((element) => {
    if (result.indexOf(element) === -1) {
      result.push(element);
    }
  });
  return result;
};

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
