function stringy(integer) {
  let index = 0;
  let stringy = '';
  while (index < integer) {
    if (index % 2 === 0) {
      stringy += '1';
    } else {
      stringy += '0';
    }
    index += 1;
  }
  console.log(stringy);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
