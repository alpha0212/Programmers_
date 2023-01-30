function solution(x) {
  x = String(x);
  var y = 0;
  var SumResult = [];
  for (var i = 0; i < x.length; i++) {
    SumResult.push(x[i]);
    y += Number(SumResult[i]);
  }
  if (x % y === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

solution(10);
