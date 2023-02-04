function solution(numbers) {
  const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var answer = 0;
  for (var i = 0; i < list.length; i++) {
    if (numbers.includes(list[i])) {
      console.log(list[i], "a");
      continue;
    } else {
      console.log(list[i], "b");
      answer += list[i];
    }
  }
  console.log(answer);
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
