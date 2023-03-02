function shortLongShort(str1, str2) {
  let length1 = str1.length;
  let length2 = str2.length;

  let shortStr;
  let longStr;

  if (length1 > length2) {
    [shortStr, longStr] = [str2, str1];
  } else {
    [shortStr, longStr] = [str1, str2];
  }

  return shortStr + longStr + shortStr;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
