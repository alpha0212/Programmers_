function solution(maps) {
  var answer = [];
  for (var i = 0; i < maps.length; i++) {
    for (var j = 0; j < maps[i].length; j++) {
      if (maps[i][j].includes("X")) {
        answer.push(j);
      }
    }
  }
  console.log(answer);
}

solution(["X591X", "X1X5X", "X231X", "1XXX1"]);
