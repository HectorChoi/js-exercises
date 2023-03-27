'use strict';

const repeater = function repeatEachCharacterInString(string) {
  const characters = string.split('');

  const result = [];

  characters.forEach((character) => {
    result.push(character, character);
  });

  return result.join('');
};

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
