/**
 * 완주하지 못한 선수
 * Level 1
 * https://programmers.co.kr/learn/courses/30/lessons/42576
 */

const testCase0 = solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
const testCase1 = solution([marina, josipa, nikola, vinko, filipa], [josipa, filipa, marina, nikola]);
const testCase2 = solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);

function solution(participant, completion) {
  // 1. 각각의 배열을 정렬한다.
  participant.sort();
  completion.sort();

  for (let i=0; i<participant.length; i++) {
    // 한명 빼고 모두 완주했으므로 참가자 명단에 없는 완주자의 이름을 찾아 리턴한다.
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}