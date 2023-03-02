function logInBox(string) {
  const length = string.length;
  let cover = '+';
  for (i = 0; i < length + 2; i += 1) {
    cover += '-';
  }
  cover += '+';

  let horiz = '|';
  for (i = 0; i < length + 2; i += 1) {
    horiz += ' ';
  }
  horiz += '|';

  let log = '| ';
  log += string;
  log += ' |';

  console.log(cover);
  console.log(horiz);
  console.log(log);
  console.log(horiz);
  console.log(cover);
}

logInBox('To boldly go where no one has gone before.');
