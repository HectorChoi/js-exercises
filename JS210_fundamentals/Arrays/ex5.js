function pop(array) {
  if (array.length === 0) {
    return undefined;
  }

  let last = array[array.length - 1];

  array.length = array.length - 1;

  return last;
}

function push(...args) {
  let arr = args[0];
  for (let i = 1; i < args.length; i += 1) {
    arr[arr.length] = args[i];
  }

  return arr.length;
}

// pop
const array1 = [1, 2, 3];
pop(array1);                        // 3
console.log(array1);                // [1, 2]
pop([]);                           // undefined
pop([1, 2, ['a', 'b', 'c']]);      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
push([1, 2], ['a', 'b']);          // 3
push([], 1);                       // 1
push([]);                          // 0
