const swap = function swapFirstAndLastLettersOfEveryWord(str) {
  const words = str.split(' ');
  const swappedWords = words.map((word) => {
    let [first, last] = [word[0], word[word.length - 1]];
    let middle = word.slice(1, word.length - 1);
    let result = '';
    if (word.length === 1) {
      result = word;
    } else if (word.length === 2) {
      result = last + first;
    } else {
      result = last + middle + first;
    }

    return result;
  });
  return swappedWords.join(' ');
};

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
