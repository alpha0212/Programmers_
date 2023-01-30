function solution(X, Y) {
  var answer = "";
  X = [...X];
  Y = [...Y];
  var i = 0;
  for (i = 0; i < 10; i++) {
    const JudgeX = X.filter((v) => Number(v) === i).length;
    const JudgeY = Y.filter((v) => Number(v) === i).length;
    answer += String(i).repeat(Math.min(JudgeX, JudgeY));
  }
  if (answer === "") return "-1";
  if (Number(answer) === 0) return "0";
  return answer
    .split("")
    .sort((a, b) => Number(b) - Number(a))
    .join("");
}
