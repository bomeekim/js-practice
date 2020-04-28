/**
 * Lesson2 Arrays: CyclicRotation
 * Rotate an array to the right by a given number of steps.
 * 
 * https://app.codility.com/programmers/lessons/2-arrays/https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
 */

const testCase0 = solution([3, 8, 9, 7, 6], 3);
// const testCase1 = solution([0, 0, 0], 1);
// const testCase2 = solution([1, 2, 3, 4], 4);

console.log(testCase0);
// console.log(testCase1);
// console.log(testCase2);

function solution(A, K) {
  // 배열과 K의 값이 같거나, 배열에 같은 요소가 있는 경우 A 그대로 리턴한다.
  if ((A.length === K)
    || (new Set(A).size !== A.length)) {
    return A;
  }

  let array = Array.apply(null, new Array(A.length)).map(Number.prototype.valueOf, 0);

  for (let i=0; i<A.length; i++) {
    let index = (i+K) % A.length;
    array[index] = A[i];
  }

  return array;
}