function concat(...args) {
  const result = [];

  for (let i = 0; i < args.length; i += 1) {
    if (Array.isArray(args[i])) {
      for (let j = 0; j < args[i].length; j += 1) {
        result.push(args[i][j]);
      }
    } else {
      result.push(args[i]);
    }
  }

  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
