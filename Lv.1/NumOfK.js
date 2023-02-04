function solution(array, commands) {
  var answer = [];
  var result = [];
  for (var i = 0; i < commands.length; i++) {
    answer.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)
    );
  }
  console.log(answer);
  for (var j = 0; j < answer.length; j++) {
    result.push(answer[j][commands[j][2] - 1]);
  }
  return result;
}
solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
