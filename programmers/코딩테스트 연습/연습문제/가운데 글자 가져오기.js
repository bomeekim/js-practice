/**
 * 가운데 글자 가져오기
 * Level 1
 * https://programmers.co.kr/learn/courses/30/lessons/12903
 */

const testCase0 = solution("abcde");
const testCase1 = solution("qwer");

function solution(s) {
  let answer = '';
  let start = Math.floor(s.length / 2);
  
  // 짝수
  if (s.length % 2 === 0) {
    answer = s.substring(start-1, start+1);
  } else { // 홀수
    answer = s.charAt(start);    
  }

  return answer;
}