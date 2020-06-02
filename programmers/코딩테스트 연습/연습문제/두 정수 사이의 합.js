/**
 * 두 정수 사이의 합
 * Level 1
 * 
 * https://programmers.co.kr/learn/courses/30/lessons/12912
 */

const testCase0 = solution(3, 5);
const testCase1 = solution(3, 3);
const testCase2 = solution(5, 3);

function solution(a, b) {
  var answer = 0;

  let start = a - b < 0 ? a : b;
  let end = a - b > 0 ? a : b;

  if (start === end) {
    answer = start;
  } else {
    for (let i=start; i<=end; i++) {
      answer += i;
    }  
  }

  return answer;
}