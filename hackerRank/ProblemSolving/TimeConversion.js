/**
 * Time Conversion
 * https://www.hackerrank.com/challenges/time-conversion/problem
 */

const testCase0 = timeConversion("07:05:45PM");
console.log(testCase0);

const testCase1 = timeConversion("12:40:22AM");
console.log(testCase1); //00:40:22

const testCase2 = timeConversion("12:45:54PM");
console.log(testCase2); //12:45:54

function timeConversion(s) {
  let time = s.split(":");
  let type = time[2].slice(2, 4); // AM or PM
  time[2] = time[2].slice(0, 2); // 초

  if (type === 'PM' && time[0] !== '12') {
    time[0] = String(Number(time[0]) + 12);
  } else if (type === 'AM' && time[0] === '12') {
    time[0] = '00';
  }

  // join() 메서드로 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
  return time.join(":");
}