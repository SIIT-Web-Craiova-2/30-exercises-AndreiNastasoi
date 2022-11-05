function integers(x, y) {
  if (x == 15 || y == 15) {
    return true;
  } else if (x + y == 15) {
    return true;
  } else if (x - y == 15 || y - x == 15) {
    return true;
  } else {
    return false;
  }
}

console.log(integers(2, 18));
console.log(integers(5, 10));
console.log(integers(8, 4));
console.log(integers(15, 15));
