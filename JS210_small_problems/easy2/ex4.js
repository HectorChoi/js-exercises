function findFibonacciIndexByLength(numberOfDigits) {
  if (numberOfDigits === 1n) {
    return 1n;
  }

  let digits = 0n;
  let fib1 = 1n;
  let fib2 = 1n;
  let index = 2n;

  while (digits < numberOfDigits) {
    [fib1, fib2] = [fib2, fib1 + fib2];
    digits = String(fib2).length;
    index += 1n;
  }

  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.

console.log(findFibonacciIndexByLength(1n) === 1n);
