function chk(arr) {
  arr.length >= 1;
  if (arr[0] == 1 || arr[arr.length - 1] == 1) {
    return true;
  } else {
    return false;
  }
}
console.log(chk([1, 5, 10, 1]));
console.log(chk([2, 12, 30, 1]));
console.log(chk([12, 13, 30, 50]));
