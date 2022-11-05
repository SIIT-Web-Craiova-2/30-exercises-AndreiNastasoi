function arrLength(x) {
  if ((x[0] == 30 && x[1] == 30) || (x[0] == 40 && x[1] == 40)) {
    return true;
  } else {
    return false;
  }
}

console.log(arrLength([10, 30]));
console.log(arrLength([20, 40]));
console.log(arrLength([30, 40]));
console.log(arrLength([30, 30]));
console.log(arrLength([40, 40]));
