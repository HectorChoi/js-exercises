/*
Write a function that returns a list of all substrings of a string that are palindromic.
That is, each substring must consist of the same sequence of characters forwards
as backwards.
The substrings in the returned list should be sorted by their order of appearance
in the input string.
Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters
and pay attention to case; that is, 'AbcbA' is a palindrome,
but 'Abcba' and 'Abc-bA' are not.
In addition, assume that single characters are not palindromes.
*/

function leadingSubstrings(string) {
  const substrings = [];

  for (let i = 1; i <= string.length; i += 1) {
    substrings.push(string.slice(0, i));
  }

  return substrings;
}

function substrings(string) {
  let allSubstrings = [];
  for (let i = 0; i < string.length; i += 1) {
    allSubstrings = allSubstrings.concat(leadingSubstrings(string.slice(i)));
  }
  return allSubstrings;
}

function isEqualElementsArray(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

function isPalindrome(string) {
  const characters = string.split('');
  return (string.length > 1 && isEqualElementsArray(characters, [...characters].reverse()));
}

function palindromes(string) {
  const substrs = substrings(string);
  return substrs.filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
