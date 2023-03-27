'use strict';

const centerOf = function middleCharacterOrCharactersOfString(string) {
  const firstIndex = Math.floor((string.length - 1) / 2);
  if (string.length % 2 === 1) {
    return string[firstIndex];
  } else {
    return string[firstIndex] + string[firstIndex + 1];
  }
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
