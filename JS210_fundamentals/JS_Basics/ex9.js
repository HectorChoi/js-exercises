const INTEGERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  numStr = '';
  do {
    numStr = INTEGERS[integer % 10] + numStr;
    integer = Math.floor(integer / 10);
  } while (Math.abs(integer) > 0);

  return numStr;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
