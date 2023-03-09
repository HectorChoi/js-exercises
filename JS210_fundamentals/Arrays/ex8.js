function slice(array, begin, end) {
  let result = [];
  if (begin > array.length) {
    begin = array.length;
  }
  if (end > array.length) {
    end = array.length;
  }

  for (let i = begin; i < end; i += 1) {
    result.push(array[i]);
  }

  return result;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]
// 
// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...args) {
  if (start > array.length) {
    start = array.length;
  }

  if (deleteCount > (array.length - start)) {
    deleteCount = array.length - start;
  }

  let result = del(array, start, deleteCount);
  if (args.length !== 0) {
    insert(array, start, args);
  }
  return result;
}

function del(array, start, deleteCount) {
  let deleted = [];
  for (let i = start; i < start + deleteCount; i += 1) {
    deleted.push(array[i]);
    array[i] = array[i + deleteCount];
  }
  array.length = array.length - deleteCount;
  return deleted;
}

function insert(array, start, args) {
  for (let i = 0; i < array.length - start; i += 1) {
    array[array.length - 1 + args.length - i] = array[array.length - 1 - i];
  }

  for (let i = start; i < start + args.length; i += 1) {
    array[i] = args[i - start];
  }
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
