const makeDoubler = function makeADoublerFunction(callerName) {
  const doublerFunction = function doublerFunctionWithCaller(num) {
    const doubled = num + num;
    console.log(`This function was called by ${callerName}.`);
    return doubled;
  };

  return doublerFunction;
};
const doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.
