/**
 * 가장 큰 수
 * 난이도: Level 2
 * 걸린 시간: 20m
 * https://programmers.co.kr/learn/courses/30/lessons/42746
 */

const testCase0 = solution([6, 10, 2]);
console.log(testCase0);

const testCase1 = solution([3, 30, 34, 5, 9]);
console.log(testCase1);

const testCase2 = solution([2, 20, 200]);
console.log(testCase2);

const testCase3 = solution([12, 121]);
console.log(testCase3);

function solution(numbers) {
  var answer = '';
  numbers.sort();
  numbers.reverse();
  console.log(numbers);

  let tenIndex = numbers.findIndex((num) => num % 10 === 0);
  let first = Number(numbers[tenIndex].toString().charAt(0));
  console.log('first: ', first);
  let findIndex = numbers.findIndex((num) => num === first);

  if (findIndex !== -1) {
    let temp = numbers[tenIndex];
    numbers[tenIndex] = numbers[findIndex];
    numbers[findIndex] = temp;
  }
  
  console.log('findIndex : ', tenIndex);
  console.log('find first: ', findIndex);
  
  console.log(numbers);

  answer = numbers.join("");

  return answer;
}