/**
 * Migratory Birds
 * https://www.hackerrank.com/challenges/migratory-birds/problem
 */

const testCase0 = migratoryBirds([1, 4, 4, 4, 5, 3]);
console.log(testCase0);

const testCase1 = migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
console.log(testCase1);

 /**
  * 타입별 새의 수를 구하고, 새의 수가 동일하다면 타입 아이디가 작은 것을 리턴한다.
  * 최빈값 구하기 알고리즘과 비슷함
  * @param {*} arr an array of integers representing types of birds sighted
  */
function migratoryBirds(arr) {
  let count = 1;
  let birdsCount = {};

  arr.sort()

  birdsCount[arr[0]] = count;

  for (let i=1; i<arr.length; i++) {
    if (arr[i - 1] !== arr[i]) {
      count = 1;
    } else {
      count++;
    }

    birdsCount[arr[i]] = count;
  }

  const keySortedByValue = Object.keys(birdsCount).sort((a,b) => {
    return birdsCount[a] < birdsCount[b] ? 1 : birdsCount[a] > birdsCount[b] ? -1 : 0;
  });

  return keySortedByValue[0];
}
