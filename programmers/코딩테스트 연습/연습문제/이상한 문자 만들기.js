/**
 * 이상한 문자 만들기
 * Level 1
 * 
 * https://programmers.co.kr/learn/courses/30/lessons/12930
 */

const testCase0 = solution("try hello world");

function solution(s) {
  let array = s.split(" ");
  let answer = [];

  for (let i=0; i<array.length; i++) {
    let innerArray = array[i].split("");

    for (let j=0; j<innerArray.length; j++) {
      let temp = innerArray[j];

      if (j % 2 === 0) {
        innerArray[j] = temp.toUpperCase();
      } else if (j % 2 === 1) {
        innerArray[j] = temp.toLowerCase();
      }
    }

    answer[i] = innerArray.join("");
  }

  return answer.join(" ");
}