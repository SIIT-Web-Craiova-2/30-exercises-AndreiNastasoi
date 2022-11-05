function sameIntegrs(x, y, z) {
  if (x == y && x == z) {
    return "40";
  } else if (x == y || y == z || x == z) {
    return "30";
  } else {
    return "20";
  }
}
console.log(sameIntegrs(60, 83, 108));
console.log(sameIntegrs(44, 44, 44));
console.log(sameIntegrs(22, 22, 30));
console.log(sameIntegrs(19, 28, 28));
