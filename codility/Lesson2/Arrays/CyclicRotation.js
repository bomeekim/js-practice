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
  const shiftedNum = K > A.length ? K % A.length : K;
  const removed = A.splice(-shiftedNum);
  
  return Array.from([ ...removed, ...A ]);
}
