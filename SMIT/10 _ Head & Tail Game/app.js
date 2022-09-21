// Head and tail Game

var heads = prompt("First Team Name?");
var tails = prompt("Second Team Name?");

var cap0 = heads.slice(0, 1).toUpperCase()
var sm0 = heads.slice(1).toLowerCase()
var teamName0 = cap0 + sm0;

var cap1 = tails.slice(0, 1).toUpperCase()
var sm1 = tails.slice(1).toLowerCase()
var teamName1 = cap1 + sm1;


var num = Math.random() * 2
var toss = Math.floor(num)


if (toss === 0) {
    document.write("Heads: " + teamName0 + " have won the toss")
}
else if (toss === 1) {
    document.write("Tails: " + teamName1 + " have won the toss")
}
else {
    document.write("Please toss again")
}