var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var display = document.getElementById("display");
function addition() {
    var number1 = parseInt(num1.value);
    var number2 = parseInt(num2.value);
    var SumOfnos = number1 + number2;
    display.value = SumOfnos.toString();
}
function multiplication() {
    var number1 = parseInt(num1.value);
    var number2 = parseInt(num2.value);
    var multiplicationOfnos = number1 * number2;
    display.value = multiplicationOfnos.toString();
}
function division() {
    var number1 = parseFloat(num1.value);
    var number2 = parseFloat(num2.value);
    var division = number1 / number2;
    display.value = division.toString();
}
function substraction() {
    var number1 = parseInt(num1.value);
    var number2 = parseInt(num2.value);
    var substraction = number1 - number2;
    display.value = substraction.toString();
}
//# sourceMappingURL=lec.js.map