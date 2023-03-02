let readlineSync = require('readline-sync');

const SQMETERS_TO_SQFEET = 10.7639;

console.log('Enter the length of the room in meters:');
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log('Enter the width of the room in meters:');
let width = readlineSync.prompt();
width = parseInt(width, 10);

let sqm = length * width;
let sqft = sqm * SQMETERS_TO_SQFEET;

console.log(`The area of the room is ${sqm.toFixed(2)} square meters (${sqft.toFixed(2)} square feet).`);
