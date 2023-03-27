function buyFruit(arr) {
  return arr.map(([ fruit, num ]) => {
    let fruits = [];
    for (let i = 0; i < num; i += 1) {
      fruits.push(fruit);
    }
    return fruits;
  }).flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
