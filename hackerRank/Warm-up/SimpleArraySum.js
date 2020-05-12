/**
 * Simple Array Sum
 * Difficulty: Easy
 * URL: https://www.hackerrank.com/challenges/simple-array-sum/problem
 */

const testCase0 = simpleArraySum([1, 2, 3, 4, 10, 11]); // 31

function simpleArraySum(ar) {
  let sum = 0;

  for (let i=0; i<ar.length; i++) {
    sum += ar[i];
  }

  return sum;
}
