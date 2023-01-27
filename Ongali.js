function solution(babbling) {
  var answer = 0;
  var resultArr = babbling.map((bal) => bal.replace(/aya|ye|woo|ma/g, ""));
  for (var i = 0; i < babbling.length; i++) {
    if (resultArr[i] === "") {
      answer += 1;
    } else {
      continue;
    }
  }
  return answer;
}

solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]);
