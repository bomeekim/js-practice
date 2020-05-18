/**
 * K번째 수
 * 난이도: Level 1
 * https://programmers.co.kr/learn/courses/30/lessons/42748
 */

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];
const testCase0 = solution(array, commands);
console.log(testCase0);

function solution(array, commands) {
  var answer = [];
  let start = 0;
  let end = 0;
  let targetIndex = 0;
  let length = commands.length;
  let tempArray = Array.from(Array(length), () => Array());

  for (let i=0; i<commands.length; i++) {
    start = commands[i][0] - 1;
    end = commands[i][1];
    targetIndex = commands[i][2] - 1;

    // sort 함수의 경우 ASCII 순서로 정렬이 된다.
    // [2,3,1,10,20]이 있으면 [1,10,2,20,3] 이렇게 정렬이 된다.
    // 그러므로 오름차순 정렬을 하기 위해서는 주석 아래처럼 sort의 콜백함수를 작성해주어야한다.
    // tempArray[i] = array.slice(start, end).sort();

    tempArray[i] = array.slice(start, end).sort((a, b) => { return a-b; });

    answer.push(tempArray[i][targetIndex]);
  }

  return answer;
}