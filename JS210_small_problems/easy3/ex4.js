'use strict';

// one liner:
// function isPalindrome(string) {
//   return string === string.split('').reverse().join('');
// }

const isPalindrome = function isPalindromeCaseAndAllCharactersMatter(string) {
  const characters = string.split('');
  const isEqualElements = function isEqualElementsToCharacters(arr) {
    let isEqual = true;
    characters.forEach((character, index) => {
      if (character !== arr[index]) {
        isEqual = false;
      }
    });

    return isEqual;
  };

  return isEqualElements([...characters].reverse());
};

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
