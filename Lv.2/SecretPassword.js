function solution(s, skip, index) {
  const alpha = [
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

  s = [...s];
  var n = 0;
  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < s.length; j++) {
      if (skip.includes(alpha[alpha.indexOf(s[i]) + j])) {
        console.log(alpha[alpha.indexOf(s[i]) + j], "a");
        s[i] = alpha[alpha.indexOf(s[i]) + 1];
        console.log(s);
      }
    }
    if (alpha[alpha.indexOf(s[i]) + index] === undefined) {
      s[i] = alpha[alpha.indexOf(s[i]) + index - 26];
      console.log(s);
      continue;
    }
    s[i] = alpha[alpha.indexOf(s[i]) + index];
    console.log(s);
  }
  console.log(s.join(""));
}

solution("abcd", "eb", 5);
