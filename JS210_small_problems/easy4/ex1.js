'use strict';

const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_DEGREE = 60;
const degreeUnicode = '\u00B0';

const padZeroes = function padZeroesToNumStr(numStr) {
  if (numStr.length < 2) {
    return '0' + numStr;
  }

  return numStr;
};

const dms = function convertDegreesToDegreesMinutesSeconds(degrees) {
  const degree = parseInt(degrees, 10);
  const degreeDecimal = parseFloat(degrees - degree);

  let minutesTotal = degreeDecimal * MINUTES_IN_DEGREE;
  let minutes = parseInt(minutesTotal, 10);

  let seconds = (minutesTotal - minutes) * SECONDS_IN_MINUTE;
  seconds = Math.floor(seconds);

  return `${degree}${degreeUnicode}${padZeroes(String(minutes))}'${padZeroes(String(seconds))}"`;
};

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
