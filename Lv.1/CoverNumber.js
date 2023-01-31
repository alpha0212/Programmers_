function solution(phone_number) {
  var phone = phone_number.substring(0, phone_number.length - 4);
  phone_number = phone_number.substring(phone_number.length - 4);
  var arr = [...phone];
  for (var i = 0; i < phone.length; i++) {
    arr[i] = "*";
  }
  return arr.join("") + phone_number;
}

solution("01012345678");
