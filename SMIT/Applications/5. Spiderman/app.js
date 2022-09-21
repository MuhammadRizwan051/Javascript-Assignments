var image = document.getElementById("image")
var count = 0

window.onkeydown = function (e) {
    // Using Space
    if (e.keyCode === 32) {
        image.src = "Images/Spiderman-2.gif";
        var a = setTimeout(function () {
            image.src = "Images/Spiderman-1.gif";
        }, 2400)
    }

    // Using D
    if (e.keyCode === 68) {
        count = count + 10
        image.src = "Images/Spiderman-3.gif";
            image.style.marginLeft = count + "px"
    }

    // Using W
    if (e.keyCode === 87) {
        image.src = "Images/Spiderman-4.gif";
    }
    var a = setTimeout(function () {
        image.src = "Images/Spiderman-1.gif";
    }, 2400)


}