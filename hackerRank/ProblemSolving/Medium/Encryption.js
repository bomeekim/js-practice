/**
 * Encryption
 * https://www.hackerrank.com/challenges/encryption/problem
 */

const testCase0 = encryption('haveaniceday');
console.log(testCase0); // hae and via ecy

const testCase1 = encryption('feedthedog');
console.log(testCase1); // fto ehg ee dd

const testCase2 = encryption('chillout');
console.log(testCase2); // clu hlt io

const testCase4 = encryption('iffactsdontfittotheorychangethefacts');
console.log(testCase4); // isieae fdtonf fotrga anoyec cttctt tfhhhs

function encryption(s) {
  const strings = s.split("");
  const rows = parseInt(Math.sqrt(s.length));
  const columns = Math.sqrt(s.length) === Math.floor(Math.sqrt(s.length)) ? rows : rows + 1;
  let array = [];
  let temp = '';

  // 2차원 배열 생성
  while(strings.length) {
    array.push(strings.splice(0, columns));
  }

  // 2차원 배열의 column 값 구하기
  const arrayColumn = (arr, n) => arr.map(x => x[n]);
  
  // 컬럼값을 읽어서 문자열로 만든다.
  for (let i=0; i<columns; i++) {
    let columns = arrayColumn(array, i);
    temp += [].concat(...columns);
    temp += [].concat(" ");
  }

  // 콤마 제거
  const result = temp.replace(/,/gi, '');
  return result;
}