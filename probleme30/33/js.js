function check(x, y) {
  if (
    (x >= 40 && x <= 60 && y >= 40 && y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(check(10, 30));
console.log(check(55, 109));
console.log(check(88, 90));
console.log(check(44, 52));
console.log(check(200, 350));
