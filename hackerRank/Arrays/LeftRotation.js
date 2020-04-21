/**
 * Arrays: Left Rotation
 * https://bit.ly/3bw9YTm
 */

const testCase0 = rotLeft([1, 2, 3, 4, 5], 4);
const testCase1 = rotLeft([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10);

console.log(testCase0); // Expected Output : 5 1 2 3 4
console.log(testCase1); // Expected Output : 77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77

function rotLeft(a, d) {
  let array = [];
  let keepArray = [];

  for (let i=0; i<a.length; i++) {
    array.push(a[i]);

    if (i < d) {
      keepArray[i] = array[i];
    }
  }

  array.splice(0, d);
  array.push(...keepArray);

  return array;
}