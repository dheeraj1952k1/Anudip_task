function Calculate() {
  let num1 = parseFloat(document.getElementById("number1").value);
  let num2 = parseFloat(document.getElementById("number2").value);

  document.getElementById("add").innerText = "Addition: " + (num1 + num2);
  document.getElementById("sub").innerText = "Substraction: " + (num1 - num2);
  document.getElementById("mul").innerText = "Multiplication: " + num1 * num2;
  document.getElementById("div").innerText = "Division: " + num1 / num2;
}
