let readlineSync = require('readline-sync');

console.log('What is the bill?');
let bill = readlineSync.prompt();
bill = parseInt(bill, 10);

console.log('What is the tip percentage?');
let tipPercentage = readlineSync.prompt();
tipPercentage = Number(tipPercentage) * 0.01;

let tip = bill * tipPercentage;
let total = bill + tip;

console.log(`The tip is \$${tip.toFixed(2)}`);
console.log(`The total is \$${total.toFixed(2)}`);
