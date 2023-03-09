function reverse(inputForReversal) {
  if (typeof inputForReversal === 'string') {
    let resultString = '';
    for (let i = inputForReversal.length - 1; i >= 0; i -= 1) {
      resultString += inputForReversal[i];
    }
    return resultString;
  } else if (Array.isArray(inputForReversal)) {
    let resultArray = [];
    for (let i = inputForReversal.length - 1; i >= 0; i -= 1) {
      resultArray.push(inputForReversal[i]);
    }
    return resultArray;
  }
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
