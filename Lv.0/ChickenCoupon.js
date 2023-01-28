function solution(chicken) {
  var Coupon = chicken; //1081
  var service = 0;
  while (Coupon >= 10) {
    service += (Coupon / 10) << 0; //108
    Coupon = ((Coupon % 10) + Coupon / 10) << 0;
  }
  return service;
}
