function stringToSignedInteger(numStr) {
  let sign = '+';
  switch (numStr[0]) {
    case '+':
      numStr = numStr.slice(1);
      break;
    case '-':
      sign = '-';
      numStr = numStr.slice(1);
      break;
    default:
      break;
  }

  let numStrArray = numStr.split('');

  let total = 0;
  let multiplier = 0.1;
  for (let i = numStrArray.length - 1; i >= 0; i -= 1) {
    multiplier *= 10;
    if (sign === '+') {
      total += multiplier * numStrArray[i];
    } else {
      total -= multiplier * numStrArray[i];
    }
  }
  return total;
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
