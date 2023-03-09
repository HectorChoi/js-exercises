function shift(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let first = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    arr[i - 1] = arr[i];
  }

  arr.length = arr.length - 1;

  return first;
}

function unshift(...args) {
  let arr = args[0];
  let arrLength = arr.length;
  let argsLength = args.length;

  if (argsLength === 1) {
    return arr.length;
  }

  for (let i = arrLength - 1; i >= 0; i -= 1) {
    arr[i + argsLength - 1] = arr[i];
  }

  for (let i = 1; i < argsLength; i += 1) {
    arr[i - 1] = args[i];
  }

  return arr.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]
console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3
const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
