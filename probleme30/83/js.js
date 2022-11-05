function arrLong(arr) {
  var string = "";

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > string) {
      string = arr[i];
    }
  }
  return string;
}

console.log(arrLong(["a", "ab", "abc", "abcd", "abcdefgh"]));
console.log(arrLong(["Volkswagen", "Audi", "Mercedes"]));
console.log(arrLong(["Samsung", "Apple", "Huawei", "Oppo"]));
