function solution(s, n) {
  var answer = [];
  var Upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var Lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  x = [...s];
  var result = "";
  for (var i = 0; i < x.length; i++) {
    if (Upper.includes(x[i]) === true) {
      if (x[i] === "Z") {
        answer.push(Upper[-1 + n]);
      } else {
        const IndexN = Upper.indexOf(x[i]) + n;
        if (IndexN > 25) {
          answer.push(Upper[IndexN - 26]);
        } else {
          answer.push(Upper[IndexN]);
        }
      }
    } else if (Lower.includes(x[i]) === true) {
      if (x[i] === "z") {
        answer.push(Lower[-1 + n]);
      } else {
        const IndexN = Lower.indexOf(x[i]) + n;
        if (IndexN > 25) {
          answer.push(Lower[IndexN - 26]);
        } else {
          answer.push(Lower[IndexN]);
        }
      }
    }
  }
  if (s.includes(" ")) {
    for (var k = 0; k < s.length; k++) {
      if (x[k] === " ") {
        result += " ";
      } else {
        for (var l = 0; l < 1; l++) {
          result += answer[l];
          answer.shift();
          if (result[l] === x[l]) {
            break;
          }
        }
      }
    }
  } else {
    for (var m = 0; m < x.length; m++) {
      result += answer[m];
    }
  }
  if (s === "") {
    return " ";
  }
  console.log(result);
}

solution("AB", 1);
solution("z", 1);
solution("Z", 10);
solution("a B z", 4);
solution(" aBZ", 20);
solution("y X Z", 4);
solution(" . h z", 20);
