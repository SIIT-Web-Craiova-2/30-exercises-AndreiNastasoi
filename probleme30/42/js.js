let checkMode = function (x, y, z) {
  if (y > x && z > y) {
    return "Strict Mode";
  } else if (z > y) {
    return "Soft Mode";
  } else {
    return "Default";
  }
};
//Strict mode -> 10, 15, 31
//Soft mode -> 24, 22, 31 or 22, 22, 31
console.log(checkMode(2, 12, 22));
console.log(checkMode(45, 19, 40));
console.log(checkMode(12, 2, 8));
console.log(checkMode(10, 41, 32));
console.log(checkMode(22, 32, 42));
console.log(checkMode(15, 90, 30));
