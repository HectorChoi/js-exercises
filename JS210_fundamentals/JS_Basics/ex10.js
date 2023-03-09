const INTEGERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  numStr = '';
  do {
    numStr = INTEGERS[integer % 10] + numStr;
    integer = Math.floor(integer / 10);
  } while (Math.abs(integer) > 0);

  return numStr;
}

function signedIntegerToString(signedInteger) {
  if (signedInteger > 0) {
    return '+' + integerToString(signedInteger);
  } else if (signedInteger < 0) {
    return '-' + integerToString(Math.abs(signedInteger));
  } else {
    return integerToString(signedInteger);
  }
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
