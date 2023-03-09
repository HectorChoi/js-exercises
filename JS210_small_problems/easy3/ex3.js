const age = parseInt(prompt('What is your age?'), 10);
const retireAge = parseInt(prompt('At what age would you like to retire?'), 10);
const today = new Date();
const currentYear = today.getFullYear();
const yearsToRetirement = retireAge - age;
const retireYear = currentYear + yearsToRetirement;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You only have ${yearsToRetirement} years of work to go!`);
