function triangleAngle(angle) {
  if (angle > 0 && angle < 90) {
    return "Acute angle";
  } else if (angle == 90) {
    return "Right angle";
  } else if (angle > 90 && angle < 180) {
    return "Obtuse angle";
  } else if (angle == 180) {
    return "Straight angle";
  } else {
    return "Not an angle";
  }
}
console.log(triangleAngle(20));
console.log(triangleAngle(65));
console.log(triangleAngle(90));
console.log(triangleAngle(160));
console.log(triangleAngle(180));
console.log(triangleAngle(190));
