'use strict';

const isRealPalindrome = function isPalindromeCaseInsensitiveIgnoreNonAlphanumeric(string) {
  const lowerCharacters = string.split('').map((character) => character.toLowerCase());
  const characters = [];

  lowerCharacters.forEach((character) => {
    if (character.match(/[A-Za-z0-9]/)) {
      characters.push(character);
    } 
  });

  const isEqualElements = function isEqualAlphanumericElementsToCharacters(arr) {
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

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
