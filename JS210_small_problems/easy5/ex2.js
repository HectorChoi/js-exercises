'use strict';

const isConsonant = function matchConsonantsOnly(character) {
  return !!character.match(/[A-Za-z]/) && /[^aeiou]/i.test(character);
};

const doubleConsonants = function repeatEachConsonantInString(string) {
  const characters = string.split('');

  const result = [];

  characters.forEach((character) => {
    if (isConsonant(character)) {
      result.push(character, character);
    } else {
      result.push(character);
    }
  });

  return result.join('');
};

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('EHello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
