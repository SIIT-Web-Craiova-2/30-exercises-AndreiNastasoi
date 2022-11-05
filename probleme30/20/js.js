function posneg(x, y) {
  if (x > 0 && y > 0) {
    return "both are positive";
  } else if (x < 0 && y > 0) {
    return "x is negative and y is positive";
  } else if (x > 0 && y < 0) {
    return "x is positive and y is negative";
  }
}

console.log(posneg(-7, 7));
console.log(posneg(7, 7));
console.log(posneg(3, 7));
console.log(posneg(7, -7));
