function solution(n) {
  //숫자 늘려 가면서 늘린 n을 2진수로 바꾸면 되겠고만
  let binN = n.toString(2);
  let InitLength = binN.match(/1/g).length;
  while (true) {
    n += 1;
    let Newbin = n.toString(2);
    let lengthOne = Newbin.match(/1/g).length;
    if (InitLength === lengthOne) {
      return parseInt(Newbin, 2);
    }
  }
}
