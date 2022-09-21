// Form Basic Events
// keydown
// keypress
// keyup
// focus
// blur
// input
// change
// select
// submit
// invalid   Used with (input dtype: number, email, phone)


//  Focus used: input field, select box/Dropdown menu and Anchor Tag
// function focusFunction(a) {
//     a.style.background = "lightpink"
// }

// function blurFunction(a) {
//     a.style.background = ""
// }

// function inputFunction(a) {
//     var x = a.value;
//     document.getElementById("test").innerHTML = x
// }
// function changeFunction(a) {
//     var x = a.value;
//     document.getElementById("test").innerHTML = x
// }

// //  select used: input field, Text Area
// function selectFunction() {
//     console.log("You selected some text")
// }

// //  submit used: (Call tag in Form opening tag) used in form, when user click on Submit button
// function submitFunction(){
//     var x = document.getElementById("fname").value
//     alert(x + ", You submitted a form")
// }


// document.getElementById("heading").addEventListener("click", heading)
// document.getElementById("heading").addEventListener("click", function () {
//     document.getElementById("heading").style.border = "2px solid red";
// })

// function heading() {
//     document.getElementById("heading").style.backgroundColor = "green";
// }


// document.getElementById("heading").addEventListener("mouseleave", heading)
// document.getElementById("heading").addEventListener("click", xyz)

// function heading() {
//     document.getElementById("heading").style.backgroundColor = "green"
// }

// function xyz() {
//     document.getElementById("heading").removeEventListener("mouseleave", heading)
// }



// document.querySelector("#inner").addEventListener("click", function() {
//     alert("Inner Div")
// },true)
// document.querySelector("#outer").addEventListener("click", function() {
//     alert("Outer Div")
// },true)