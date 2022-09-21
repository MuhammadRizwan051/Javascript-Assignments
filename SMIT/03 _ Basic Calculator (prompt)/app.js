// Basic Calculator throught prompt (+, -, *, /, %)

var num1 = parseInt(prompt("Enter 1st number"));
var num2 = parseInt(prompt("Enter 2nd number"));
var operator = prompt("Enter any 1 operator", "+, -, *, /, %");
var calc;

if (operator === "+") {
    calc = num1 + num2;
    document.write(calc)
}
else if (operator === "-") {
    calc = num1 - num2;
    document.write(calc)
}
else if (operator === "*") {
    calc = num1 * num2;
    document.write(calc)
}
else if (operator === "/") {
    calc = num1 / num2;
    document.write(calc)
}
else if (operator === "%") {
    calc = num1 % num2;
    document.write(calc)
}