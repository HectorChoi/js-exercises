let myArray = [1, 2, 3, 4];
const myOtherArray = copyArray(myArray);
const otherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);
console.log(otherArray);

function copyArray(arr) {
  result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i]);
  }
  return result;
}
