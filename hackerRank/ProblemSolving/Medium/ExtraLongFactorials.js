/**
 * Extra Long Factorials
 * https://www.hackerrank.com/challenges/extra-long-factorials/problem
 */

const testCase0 = extraLongFactorials(25);
console.log(testCase0.toString());

const testCase1 = extraLongFactorials(45);
console.log(testCase1.toString());

function extraLongFactorials(n) {
  n = BigInt(n);

  if (n === 0n || n === 1n) {
    return 1n;
  }

  return n * extraLongFactorials(n - 1n);
}