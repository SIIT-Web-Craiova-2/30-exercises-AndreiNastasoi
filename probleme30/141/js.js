function array(x, y) {
  var result = 0;
  for (var i = 0; i < x.length; i++) {
    for (var j = 0; j < y.length; j++) {
      if (x[i] === y[j]) {
        result++;
      }
    }
  }
  return result;
}
console.log(array([10, 20, 30, 40], [10, 20, 30, 40]));
console.log(array([5, 6, 7, 8], [6, 7, 8, 9]));
console.log(array([5, 6, 7, 8], [7, 8, 9, 10]));
console.log(array([15, 16, 17, 18], [10, 11, 12, 13]));
