function integers(x, y) {
  if (x == 50 || y == 50) {
    return true;
  } else if (x + y == 50) {
    return true;
  }
}

console.log(integers(2, 48));
console.log(integers(15, 35));
console.log(integers(26, 28));
console.log(integers(50, 50));
