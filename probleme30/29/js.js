function check(x, y, z) {
  if ((x >= 50 && x <= 99) || (y >= 49 && y <= 99) || (z >= 49 && z <= 99)) {
    return true;
  } else {
    return false;
  }
}
console.log(check(10, 90));
console.log(check(25, 300));
console.log(check(59, 89));
console.log(check(63, 78));
console.log(check(70, 135));
