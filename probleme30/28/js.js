function check(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 49 && y <= 99)) {
    return true;
  } else {
    return false;
  }
}
console.log(check(18, 200));
console.log(check(70, 86));
console.log(check(48, 59));
console.log(check(68, 120));
