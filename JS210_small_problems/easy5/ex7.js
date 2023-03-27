'use strict';

const swapName = function swapFullNameToLastFirstNameWithComma(fullNameStr) {
  return fullNameStr.split(' ').reverse().join(', ');
};

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
