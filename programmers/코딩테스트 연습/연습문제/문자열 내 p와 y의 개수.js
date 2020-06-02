/**
 * 문자열 내 p와 y의 개수
 * Level 1
 * 
 * https://programmers.co.kr/learn/courses/30/lessons/12916
 */

const testCase0 = solution("pPoooyY");
const testCase1 = solution("Pyy");

function solution(s){
  let pCount = 0;
  let yCount = 0;

  let array = s.toUpperCase().split("");

  for (let i=0; i<array.length; i++) {
    if (array[i] === 'P') pCount++;
    else if (array[i] === 'Y') yCount++;
  }

  return pCount === yCount ? true : false;
}