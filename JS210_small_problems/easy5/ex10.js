'use strict';

const MIN_REVERSE_WORD_LENGTH = 5;

const reverseWords = function reverseLongWordsOnly(str) {
  const words = str.split(' ');
  const wordsCharacters = words.map((word) => {
    return word.split('');
  });
  const reversedLongWords = wordsCharacters.map((arr) => {
    if (arr.length < MIN_REVERSE_WORD_LENGTH) {
      return arr.join('');
    } else {
      return arr.reverse().join('');
    }
  });

  return reversedLongWords.join(' ');
};

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"
