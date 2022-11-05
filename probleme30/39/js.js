function sumIntegers(x, y) {
  var sumint = x + y;
  if (sumint >= 50 && sumint <= 80) {
    return 65;
  }
  return 80;
}

console.log(sumIntegers(35, 40));
console.log(sumIntegers(66, 80));
console.log(sumIntegers(52, 97));
console.log(sumIntegers(96, 200));
console.log(sumIntegers(25, 26));
