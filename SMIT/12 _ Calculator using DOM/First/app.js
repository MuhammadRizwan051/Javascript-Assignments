// Calculator

function calc(num) {
    var a = document.getElementById('field').value += num
}
function crs(num){
    var a = document.getElementById('field')
    a.value = a.value.slice(0,-1)
}
function clr() {
    var b = document.getElementById('field').value = ""
}
function result() {
    var c = document.getElementById('field')
    c.value = eval(c.value)
}