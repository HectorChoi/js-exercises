/*
Write a function that takes a string argument and returns
a list of substrings of that string.
Each substring should begin with the first letter of the word,
and the list should be ordered from shortest to longest.
*/

const leadingSubstrings = function leadingSubstringsOf(string) {
  const result = [];

  const characters = string.split('');

  characters.forEach((letter, index) => {
    let substring = '';

    for (let i = 0; i <= index; i += 1) {
      substring += characters[i];
    }

    result.push(substring);
  });

  return result;
};

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
