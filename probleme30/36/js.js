function last(x, y, z) {
  var num1 = x % 10;
  var num2 = y % 10;
  var num3 = z % 10;

  return num1 === num2 && num2 === num3 && num1 === num3;
}
console.log(last(23, 73, 43));
console.log(last(20, 70, 43));
