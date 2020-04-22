/**
 * Repeated String
 * https://bit.ly/2Vud30s
 * 
 * 
 */

const testCase0 = repeatedString("aba", 10);
const testCase1 = repeatedString("a", 1000000000000);

/**
 * 찾은 코드들 중 가장 정석이라 생각되는 코드
 * https://thecurious.engineer/repeatedstring/
 * 
 * @param {*} s a string to repeat
 * @param {*} n the number of characters to consider
 */
function repeatedString(s, n) {
  let count = 0;

  // 문자열이 반복되는 횟수
  const pushCount = Math.floor(n / s.length);

  // 그 중 포함된 a의 개수
  const aCount = (s.split("a").length - 1) * pushCount;

  // 남은 문자열의 개수
  const restStrings = n % s.length;

  for (let i = 0; i < restStrings; i++) {
    if (s.charAt(i) === 'a') {
      count++;
    }
  }

  return aCount + count;
}

/**
 * 처음 생각해낸 방법
 * 
 * 1. 주어진 문자열과 길이로 배열을 채운 뒤에 알파벳 순서대로 정렬을 한다.
 * 2. 각 알파벳의 횟수를 저장한다.
 * 3. 정렬을 한다.
 * 4. a의 횟수를 리턴한다.
 * 
 * => 문자를 길이 만큼 넣고, 횟수를 저장하고 또 정렬하므로 시간 복잡도가 늘어나 비효율적
 */
function firstRepeatedString() {
  let temp = s.split("");
  let array = [];
  let countObj = {};
  let count = 1;

  const pushCount = Math.floor((n / s.length) + 1);

  for (let i = 0; i < pushCount; i++) {
    array.push(...temp);

    if (array.length >= n) {
      array.length = n;
    }
  }

  array.sort();

  for (let i = 1; i < array.length; i++) {
    if (array[i - 1] !== array[i]) {
      count = 1;
    } else {
      count++;
    }

    countObj[array[i]] = count;
  }

  const countArray = (Object.values(countObj)).sort((a, b) => {
    return a > b ? -1 : a < b ? 1 : 0;
  });

  return countArray[0];
}