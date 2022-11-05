function checkIf(num) {
  if (num < 20) {
    return true;
  }
  if (num < 100) {
    return true;
  }
  if (num < 400) {
    return true;
  }
}
console.log(checkIf(20));
console.log(checkIf(607));
console.log(checkIf(5));
console.log(checkIf(98));
console.log(checkIf(205));
console.log(checkIf(450));
