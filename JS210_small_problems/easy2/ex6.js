let rlSync = require('readline-sync');

console.log('Enter a noun:');
let noun = rlSync.prompt();

console.log('Enter a verb:');
let verb = rlSync.prompt();

console.log('Enter an adjective:');
let adjective = rlSync.prompt();

console.log('Enter an adverb:');
let adverb = rlSync.prompt();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
