'use strict';

function wordSizes(str) {
  if (str === '') return {};
  let words = str.split(' ');
  words = words.map((word) => String(word.length));
  const obj = {};
  words.forEach((lenStr) => {
    if (obj[lenStr] === undefined) {
      obj[lenStr] = 1;
    } else {
      obj[lenStr] = obj[lenStr] + 1;
    }
  });
  return obj;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}
