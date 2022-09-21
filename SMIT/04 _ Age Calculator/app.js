// Age Calculator

// var a = new Date();
// var mili = a.getTime();

// var dob = new Date("15 Sep 2000");
// var dobmili = dob.getTime();

// var diff = mili - dobmili;
// var age = Math.round(diff / (1000*60*60*24*30*12))
// document.write(age)





// Age Calculator using prompt

var a = new Date();
var mili = a.getTime();  // Milisec from 1-Jan-1970 till today

var dob = new Date(prompt("Enter your date of birth", "15 Sep 2000"))
var dobmili = dob.getTime();   // Milisec from 1-Jan-1970 till date of birth

var diff = mili - dobmili;    // 1-jan-1970  ___  till date of birth  ==>  51-30
var age = Math.round(diff / (1000 * 60 * 60 * 24 * 30 * 12))
document.writeln("The person is " + age + " year old")
