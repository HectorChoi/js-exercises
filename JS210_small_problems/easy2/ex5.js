function triangle(positiveInteger) {
  let string = '';
  for (let i = positiveInteger; i >= 0; i -= 1) {
    let spaceIndex = 0;
    while (spaceIndex < i) {
      string += ' ';
      spaceIndex += 1;
    }
    let starIndex = positiveInteger;
    while (starIndex > i) {
      string += '*';
      starIndex -= 1;
    }
    console.log(string);
    string = '';
  }
}

triangle(5);
triangle(9);
