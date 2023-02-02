function solution(numbers) {
  stack = [];
  answer = [];
  for (var i = 0; i < numbers.length; i++) {
    answer.push(0);
  }

  for (var j = 0; j < numbers.length; j++) {
    while (numbers[stack[stack.length - 1]] < numbers[j]) {
      answer[stack.pop()] = numbers[j];
    }
    stack.push(j);
    console.log(stack);
  }
  while (stack) {
    answer[stack.pop()] = -1;
    if (stack.length === 0) {
      break;
    }
  }

  return answer;
}
solution([9, 1, 5, 3, 6, 2]); //[-1, 5, 6, 6, -1, -1]
//indexOf로 인덱스를 찾고
