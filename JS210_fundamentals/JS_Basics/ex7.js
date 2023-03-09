function stringToInteger(numStr) {
  let total = 0;
  let numStrArr = numStr.split('');
  let power = 0.1;
  for (let i = numStrArr.length - 1; i >= 0; i -= 1) {
    power *= 10;
    total += power * numStrArr[i];
  }
  return total;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
