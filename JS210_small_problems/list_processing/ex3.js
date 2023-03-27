/*
Write a function that takes two array arguments, each containing a list of numbers,
and returns a new array containing the products of all combinations of number pairs
that exist between the two arrays.
The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

Example:
*/

const multiplyAllPairs = function multiplyAllPairsAndSortAscendingNumerical(arr1, arr2) {
  let pairProducts = [];
  arr1.forEach((num) => {
    pairProducts = pairProducts.concat(arr2.map((ele) => ele * num));
  });

  return pairProducts.sort((num1, num2) => num1 - num2);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
