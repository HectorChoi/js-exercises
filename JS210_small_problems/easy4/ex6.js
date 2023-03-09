'use strict';

const showMultiplicativeAverage = function roundedThreeDecimalPlaces(numArray) {
  let product;
  product = numArray.reduce((accumulator, element) => accumulator * element, 1);
  return (product / numArray.length).toFixed(3);
};

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
