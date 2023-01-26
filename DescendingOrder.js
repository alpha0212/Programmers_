function solution(n) {
  var answer = 0;
  const str = String(n);
  const newArr = Array.from(str);
  newArr.sort(function (a, b) {
    return b - a;
  });
  answer = newArr.join("");
  answer = Number(answer);
  return answer;
}
