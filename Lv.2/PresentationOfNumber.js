function solution(n) {
  let loop = n;
  var answer = 0;
  for (var i = 1; i < loop + 1; i++) {
    if (loop % i === 0) {
      answer += 1;
    }
    loop -= i;
  }
  return answer;
}

solution(15);
