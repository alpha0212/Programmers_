function solution(s) {
  var stoLower = s.toLowerCase();
  var resultP = stoLower.split("p");
  var resultY = stoLower.split("y");
  if (resultP.length - resultY.length === 0) {
    return true;
  } else return false;
}

solution("pPoooyY");
