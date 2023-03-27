const alphabeticNumberSort = function sortByEnglishWordForEachNumber(numArr) {
  const numberWords = {};

  const numStr = 'zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen';

  numStr.split(', ').forEach((numberWord, index) => numberWords[index] = numberWord);

  return [...numArr].sort((num1, num2) => {
    if (numberWords[num1] < numberWords[num2]) {
      return -1;
    } else if (numberWords[num1] > numberWords[num2]) {
      return 1;
    } else {
      return 0;
    }
  });
};

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
