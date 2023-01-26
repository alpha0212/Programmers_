function solution(a, b) {
  var answer = 0;
  if (a < b) {
    for (a; a < b + 1; a++) {
      answer += a;
    }
  } else {
    for (b; b < a + 1; b++) {
      answer += b;
    }
  }
  return answer;
}
