'use strict';

const indices = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
const numbers = [];
const isIncluded = function existsElementGreaterThanValueInArray(arr, val) {
  const isGreaterThan = function isGreaterThanValue(ele) {
    return Number(ele) > Number(val);
  };
  return arr.some(isGreaterThan);
}

indices.forEach((index) => {
  numbers.push(prompt(`Enter the ${index} number:`));
});

let last = numbers.pop();

console.log(isIncluded(numbers, last) ? `There is a number greater than ${last} in ${numbers}.` : `There is not a number greater than ${last} in ${numbers}.`);
