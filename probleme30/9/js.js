function showdaysleft() {
  var nowdate = new Date();
  var thisYear = nowdate.getFullYear();
  var Xmas = "December 25, " + thisYear;
  var nextXmas = new Date(Xmas);
  // Number of milliseconds per day
  var msPerDay = 24 * 60 * 60 * 1000;
  var daysleft = (nextXmas.getTime() - nowdate.getTime()) / msPerDay;
  daysLeft = Math.round(daysleft);
  alert("Number of days until Christmas: " + daysleft);
}
