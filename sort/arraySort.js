// 1. 숫자 정렬
numberArraySort([30, 10, 20], 10); // [1, 2, 3]
numberArraySort([15, 7, 20], 5); // [1, 4]
numberArraySort([3, 1, 20], 5); // [-1]

function numberArraySort(arr, divisor) {
  let result = [];

  for (var i=0; i<arr.length; i++) {
    if (arr[i] >= divisor) {
      if (arr[i] % divisor === 0) {
        result.push(arr[i]);
      } else {
        continue;
      }    
    } else {
      result.push(-1);
      break;
    }        
  }

  result.sort((num1, num2) => {
    return num1 - num2;
  });

  return answer;
}

// 2. 특정 인덱스의 문자열을 기준으로 문자열 배열을 정렬
stringArraySort(["abc", "let", "cat", "dog"], 1); // ["cat", "abc", "let", "dog"]

function stringArraySort(strings, n) {
  strings.sort((str1, str2) => {
    const str1Char = str1.charAt(n);
    const str2Char = str2.charAt(n);
    
    return str1Char > str2Char ? 1 : str1Char < str2Char ? -1 : 0;
  });
}
