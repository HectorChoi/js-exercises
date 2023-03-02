let rlSync = require('readline-sync');

console.log('Please enter an integer greater than 0:');
let number = parseInt(rlSync.prompt(), 10);

console.log('Enter "s" to computer the sum, or "p" to compute the product.');
let action = rlSync.prompt();

if (action === 's') {
  let sum = 0;
  for (i = 1; i <= number; i += 1) {
    sum += i;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (action === 'p') {
  let product = 1;
  for (i = 1; i <= number; i += 1) {
    product *= i;
  }
  console.log(`The product of the integers between 1 and ${number} is ${product}.`);
} else {
  console.log('Please enter "s" or "p".');
}
