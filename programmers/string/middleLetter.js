getMiddleLetter("abced"); // e
getMiddleLetter("qwer"); // we

// 단어 s의 가운데 글자를 반환하는 함수
// 단어의 길이가 짝수인 경우는 가운데 두 글자를 반환한다. 
function getMiddleLetter(s) {
  let result = '';
    
  if (s.length % 2 === 0) { // 짝수
    let lastIndex = s.length / 2;
    let firstIndex = lastIndex - 1;
        
    result = s.substring(firstIndex, lastIndex + 1);
  } else if (s.length % 2 === 1) { // 홀수
    let index = s.length / 2;
    
    result = s.charAt(index);
  }
  
  return result;
}
