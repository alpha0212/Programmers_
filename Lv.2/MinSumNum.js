function solution(A, B) {
  var answer = 0;
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  for (var i = 0; i < A.length; i++) {
    answer = answer + A[i] * B[i];
  }
  return answer;
}

solution([1, 4, 2], [5, 4, 4]);
