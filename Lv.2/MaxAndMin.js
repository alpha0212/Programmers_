function solution(num) {
  let arr = num.split(" ");
  let numArr = arr.map((n) => parseInt(n)).sort((a, b) => a - b);

  console.log(
    `${numArr[0].toString()} ${numArr[numArr.length - 1].toString()}`
  );
}

solutions("-1 -2 -3 -4");
