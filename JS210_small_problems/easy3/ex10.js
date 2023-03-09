'use strict';

const matchLettersOnly = function matchLettersOnly(char) {
  return !!char.match(/[A-Za-z]/);
};

const wordSizes = function excludeNonLettersWordSizes(str) {
  const result = {};

  // const words = str.split(' ').filter((word) => word !== '');
  const words = str.split(' ');

  const wordLengths = words.map((word) => {
    let letterWord = '';

    word.split('').forEach((character) => {
      if (matchLettersOnly(character)) {
        letterWord += character;
      }
    });

    return letterWord.length;
  });

  wordLengths.forEach((wordLength) => {
    if (wordLength === 0) {
      return;
    } else if (result[String(wordLength)] === undefined) {
      result[String(wordLength)] = 1;
    } else {
      result[String(wordLength)] += 1;
    }
  });

  return result;
};

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
