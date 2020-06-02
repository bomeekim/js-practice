/**
 * 정수 내림차순으로 배치하기
 * Level 1
 * 
 * https://programmers.co.kr/learn/courses/30/lessons/12933
 */

const testCase0 = solution(118372);

function solution(n) {
  let array = n.toString().split("");

  array.sort((a, b) => {
    return a < b ? 1 : a > b ? -1 : 0;
  });

  return Number(array.join(""));
}