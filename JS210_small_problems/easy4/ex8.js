'use strict';

const digitList = function arrayOfDigitsInNumber(number) {
  const stringDigits = String(number).split('');
  return stringDigits.map((strDigit) => Number(strDigit));
};

console.table(digitList(12345));       // [1, 2, 3, 4, 5]
console.table(digitList(7));           // [7]
console.table(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.table(digitList(444));         // [4, 4, 4]
