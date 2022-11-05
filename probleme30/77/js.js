function testArr(arr) {
  if (arr.length == 2) {
    return arr[0] == 1 || arr[0] == 3 || arr[1] == 1 || arr[1] == 3;
  } else {
    return false;
  }
}
console.log(testArr([4, 5]));
console.log(testArr([1, 2]));
console.log(testArr([0, 3, 2]));
console.log(testArr([1, 3]));
console.log(testArr([3, 8]));
