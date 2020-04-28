/**
 * Lesson1 Iterations: BinaryGap
 * Find longest sequence of zeros in binary representation of an integer.
 * 
 * https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
 */

const testCase0 = solution(9);
const testCase1 = solution(529);
const testCase2 = solution(20);
const testCase3 = solution(15);
const testCase4 = solution(32);
const testCase5 = solution(51712);

function solution(N) {
  // 2의 제곱인지 먼저 판단
  let check = N & (-N);
 
  // 2의 제곱인 경우 0을 리턴한다.
  if (check === N) {
    return 0;
  }

  let temp = '';
  let binary = N.toString(2);

  // 2의 제곱은 아니지만 짝수인 경우
  if (N % 2 === 0) {
    temp = binary.split("");

    // 배열에서 1의 가장 마지막 위치를 찾는다.
    let lastIndex = temp.lastIndexOf('1');

    // 해당 인덱스를 포함해서 이후의 모든 요소를 제거한다.
    temp.splice(lastIndex);

    // string으로 다시 만들어준다.
    binary = temp.join("");
  }

  // 1을 기준으로 문자열을 split한다.
  let array = binary.split("1").filter(n => n);

  // 배열의 길이가 1보다 작은 경우 0을 리턴한다. (ex 1111)
  if (array.length < 1) {
    return 0;
  }

  let max = array[0].length;
  
  for (let i=1; i<array.length; i++) {
    if (max < array[i].length) {
      max = array[i].length;
    }
  }

  return max;
}