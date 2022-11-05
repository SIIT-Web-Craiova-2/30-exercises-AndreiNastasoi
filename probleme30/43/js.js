function digits(x, y, z) {
  if ((x % 10 == y % 10 && x % 10 == z % 10) || y % 10 == z % 10) {
    return true;
  } else {
    return false;
  }
}
console.log(digits(13, 35, 46));
console.log(digits(22, 52, 102));
