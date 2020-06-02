/**
 * 2019 카카오 개발자 겨울 인턴십 크레인 인형뽑기 게임 문제
 * Level 1
 * 
 * https://programmers.co.kr/learn/courses/30/lessons/64061
 */

function solution(board, moves) {
  let answer = 0;
  
  const BOARD_SIZE = board.length;
  const MOVE_NUM = moves.length;

  let moveObj = {};
  let stack = [];
  
  for (let j=0; j<BOARD_SIZE; j++) {
    let vertical = [];
  
  	for (let i=BOARD_SIZE-1; i>=0; i--) {
    	vertical.push(board[i][j]);
      
      if (i === 0) {
      	const index = j + 1;
        moveObj[index] = vertical.reverse();
      }
    }
  }
  
  for (let k=0; k<moves.length; k++) {
  	const moveIndex = moves[k]; 
    const doll = moveObj[moveIndex].find(val => val !== 0);
    const dollIndex = moveObj[moveIndex].findIndex(val => val !== 0);
    
    if (dollIndex === -1) {
    	continue;
    }
    
    stack.push(doll);
    moveObj[moveIndex][dollIndex] = 0;
  }
  
  let stackOriginLength = stack.length;
  
  for (let i=1; i<stack.length; i++) {
  	if (stack[i] === stack[i-1]) {
    	stack.splice(i, 1);
      stack.splice(i-1, 1);

      checkStack(stack);
      break;
    } 
  }
  
  answer = stackOriginLength - stack.length;
  
  return answer;
}

function checkStack(stack) {
	for (let i=1; i<stack.length; i++) {
  	if (stack[i] === stack[i-1]) {
    	stack.splice(i, 1);
      stack.splice(i-1, 1);
      checkStack(stack);
    }
  }
}