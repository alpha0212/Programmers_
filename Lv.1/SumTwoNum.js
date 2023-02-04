function solution(numbers) {
  var answer = [];
  var j = 0;
  for (var i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      if (answer.includes(numbers[i] + numbers[j]) !== true) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}

solution([5, 0, 2, 7]);
