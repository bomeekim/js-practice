/**
 * SockMerchant
 * https://bit.ly/2RVesv0
 */

// Test Case 0 
sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

// Test Case 1
sockMerchant(9, [1, 1, 1, 1, 2, 3, 3, 3, 3, 3]);

function sockMerchant(n, ar) {
  let answer = '';
  let count = '';
  let current = '';
  
  // ar sort
  ar.sort();

  current = ar[0];
  count = 0;

  for(let i=1; i<=ar.length; i++) {
    current = ar[i-1];
    count++;

    // 동일한 숫자가 없을 때 answer에 값을 저장
    if (current !== ar[i]) {
      answer = Number(answer) + Math.floor(Number(count / 2));
      count = 0; // count 초기화
      continue;
    }
  }
}