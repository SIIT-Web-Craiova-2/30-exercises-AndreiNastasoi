function integers(x, y) {
  if (x == 8 || y == 8) {
    return "8";
  } else if (x + y == 8) {
    return "8";
  } else if (x - y == 8 || y - x == 8) {
    return "8";
  } else {
    return false;
  }
}

console.log(integers(6, 10));
console.log(integers(2, 8));
console.log(integers(5, 3));
console.log(integers(8, 8));
console.log(integers(2, 6));
console.log(integers(0, 9));
