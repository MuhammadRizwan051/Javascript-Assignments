// Calculator


function on() {
    var a = document.getElementById('field').value = "0"
}
function off() {
    var a = document.getElementById('field').value = ""
    // document.getElementById('btn_shadow').disabled = true
}
function calc(num) {
    var a = document.getElementById('field').value += num
}
function result() {
    var a = document.getElementById('field')
    // a.value += eval(a.value)
    a.value = eval(a.value)
}
function clr() {
    var a = document.getElementById('field').value = "0"
}
function backspace() {
    var a = document.getElementById('field')
    a.value = a.value.slice(0,-1)
}









