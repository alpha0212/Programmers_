function solution(my_string) {
  var answer = my_string.toLowerCase();
  var arr = [...answer];
  arr.sort();
  answer = arr.join("");
  return answer;
}
