'use strict';

const rand = Math.random();

const randomNumber = function randomNumberInclusive(min, max) {
  let random = min + Math.round(((max - min) * rand));
  return random;
};

console.log(`Teddy is ${randomNumber(20, 200)} years old!`);
