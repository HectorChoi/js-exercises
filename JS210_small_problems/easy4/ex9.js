'use strict';

const countOccurrences = function countNumberOfOccurencesInArray(array) {
  const result = {};
  array.forEach((element) => {
    if (!result[element]) {
      result[element] = 1;
    } else {
      result[element] += 1;
    }
  });
  return result;
};

const vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',
];

console.table(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
