function sumArr(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr.length == 3) {
      result += arr[i];
    } else {
      return "Does not respect the length";
    }
  }
  return result;
}

console.log(sumArr([5, 30]));
console.log(sumArr([25, 47, 19]));
console.log(sumArr([15, 7, 45, 32]));
console.log(sumArr([1, 0, 4]));
console.log(sumArr([13, 26, 33]));
console.log(sumArr([22, 44, 66, 88, 100]));
