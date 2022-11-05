function check(x, y) {
  if (x >= 40 && x <= 60 && y >= 40 && y <= 60) {
    if (x === y) {
      return "Numbers are identical";
    } else if (x > y) {
      return x;
    } else {
      return y;
    }
  } else {
    return "The range does not correspond with these numbers";
  }
}

console.log(check(23, 49));
console.log(check(41, 51));
console.log(check(46, 49));
console.log(check(68, 90));
console.log(check(55, 55));
console.log(check(100, 160));
console.log(check(16, 58));
