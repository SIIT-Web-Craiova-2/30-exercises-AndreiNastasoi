function multiply() {
  numberone = parseInt(document.getElementById("first").value);
  numbertwo = parseInt(document.getElementById("second").value);
  if (numberone && numbertwo) {
    result = numberone * numbertwo;
    result = document.getElementById("result").innerHTML =
      numberone * numbertwo;
  }
}

function divide() {
  numberone = parseInt(document.getElementById("first").value);
  numbertwo = parseInt(document.getElementById("second").value);
  if (numberone && numbertwo) {
    result = numberone / numbertwo;
    result = document.getElementById("result").innerHTML =
      numberone / numbertwo;
  }
}
