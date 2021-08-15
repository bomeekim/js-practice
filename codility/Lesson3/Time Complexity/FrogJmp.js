/**
 * https://app.codility.com/demo/results/trainingSY8AFG-GEQ/
 * @param X 시작점
 * @param Y 목표점
 * @param D 한번 점프할 때 이동할 수 있는 거리
 */
function solution(X, Y, D) {
  // X + D * count >= Y
  return Math.ceil((Y - X) / D);
}
