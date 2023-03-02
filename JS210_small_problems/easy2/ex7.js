function isDoubleNumber(integer) {
  let integerString = String(integer);
  let length = integerString.length;
  return (length % 2 === 0 && integerString.substring(0, length / 2) === integerString.substring(length / 2));
}

function twice(integer) {
  if (isDoubleNumber(integer)) {
    return integer;
  } else {
    return integer * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
