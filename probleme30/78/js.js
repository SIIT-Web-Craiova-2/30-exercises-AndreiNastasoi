function arraytest(arr) {
  if (arr.length == 2) {
    if (arr[0] === 1 || arr[1] === 1) {
      return "contains 1";
    }
    if (arr[0] === 3 || arr[1] === 3) {
      return "contains 3";
    } else {
      return "doesn't contain 1 or 3";
    }
  }
}
console.log(arraytest([5, 6]));
console.log(arraytest([1, 6]));
console.log(arraytest([5, 3]));
console.log(arraytest([1, 3]));
