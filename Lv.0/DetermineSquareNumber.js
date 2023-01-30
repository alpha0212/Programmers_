function solution(n) {
  var answer = 0;
  for (var i = 0; i < n; i++) {
    if (i ** 2 === n) {
      answer = 1;
      break;
    } else {
      answer = 2;
    }
  }
  return answer;
}

solution(144);
