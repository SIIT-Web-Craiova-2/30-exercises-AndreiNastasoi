function test(x) {
  if (x % 3 == 0 || x % 7 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(test(9));
console.log(test(12));
console.log(test(14));
console.log(test(23));
