
var studentName = prompt("Enter your Name");

var english = parseInt(prompt("Enter your English marks"));
var urdu = parseInt(prompt("Enter your Urdu marks"));
var maths = parseInt(prompt("Enter your Maths marks"));
var physics = parseInt(prompt("Enter your Physics marks"));
var islamiat = parseInt(prompt("Enter your Islamiat marks"));

var total = 500
var sum = english + urdu + maths + physics + islamiat;
var percentage = sum / total * 100;

var grade;

if (percentage >= 80 && percentage < 100) {
    grade = "A+";
}
else if (percentage >= 70 && percentage < 80) {
    grade = "A"
}
else if (percentage >= 60 && percentage < 70) {
    grade = "B"
}
else if (percentage >= 50 && percentage < 60) {
    grade = "C"
}
else if (percentage >= 40 && percentage < 50) {
    grade = "D"
}
else if (percentage < 40 && percentage >= 0) {
    grade = "Fail"
}
else {
    grade = "Please write subject numbers correctly"
}


document.write("<center><table><tr><td><b>Student Name</b></td><td> " + studentName + "</td></tr><tr><td><b>English</b></td><td> " + english + "</td></tr><tr><td><b>Urdu</b></td><td> " + urdu + "</td></tr><tr><td><b>Math</b></td><td> " + maths + "</td></tr><tr><td><b>Physics</b></td><td> " + physics + "</td></tr><tr><td><b>Islamiat</b></td><td> " + islamiat + "</td></tr><tr><td><b>Sum</b></td><td> " + sum + "</td></tr><tr><td><b>Total</b></td><td> " + total + "</td></tr><tr><td><b>Percentage</b></td><td> " + percentage + "%</td></tr><tr><td><b>Grade</b></td><td> " + grade + "</td></tr></table></center>");

