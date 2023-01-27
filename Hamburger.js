function solution(ingredient) {
  let answer = 0;
  const stack = [];

  ingredient.forEach((ing, idx) => {
    stack.push(ing);

    if (stack.length >= 4) {
      const find = stack.slice(-4).join("");
      // const find = stack.join('').indexOf('1231');
      if (find === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        ++answer;
      }
    }
  });

  return answer;
}

solution([1, 2, 3, 1, 3, 2, 1, 2, 1, 2, 3, 1, 2, 3, 1, 2, 3, 2]);
