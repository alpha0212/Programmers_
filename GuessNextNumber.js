function solution(common) {
  var answer = 0;
  const CommonLengthMinusOne = common[common.length - 1];
  const CommonLengthMinusTwo = common[common.length - 2];
  const CommonLengthMinusThree = common[common.length - 3];
  if (
    CommonLengthMinusOne - CommonLengthMinusTwo ===
    CommonLengthMinusTwo - CommonLengthMinusThree
  ) {
    answer =
      CommonLengthMinusOne + (CommonLengthMinusOne - CommonLengthMinusTwo);
  } else if (common[0] === 1) {
    answer = common[1] ** common.length;
  } else {
    answer = CommonLengthMinusTwo ** (common.length - 1);
  }
  console.log(answer);
}
