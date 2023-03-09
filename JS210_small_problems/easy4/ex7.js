'use strict';

const multiplyList = function multiplyElementwiseTwoArrays(arr1, arr2) {
  const result = [];
  for (let index = 0; index < arr1.length; index += 1) {
    result.push(arr1[index] * arr2[index]);
  }
  return result;
};

console.table(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
