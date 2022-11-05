var lenght1 = 5;
var lenght2 = 6;
var lenght3 = 7;

function calcArea(lenght1, lenght2, lenght3) {
  var p = (lenght1 + lenght2 + lenght3) / 2;
  var area = p * (p - lenght1) * (p - lenght2) * (p - lenght3);
  return Math.sqrt(area);
}
console.log(calcArea(5, 6, 7));
