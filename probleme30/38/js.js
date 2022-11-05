function grades(x, y) {
  var result = x + y;
  if (result >= 89 && result <= 100) {
    return true;
  } else {
    return false;
  }
}
console.log(grades(20, 45));
console.log(grades(45, 50));
console.log(grades(10, 30));
