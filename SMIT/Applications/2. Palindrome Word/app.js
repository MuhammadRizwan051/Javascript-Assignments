
function submit() {
    var word = document.getElementById("input").value
    for (var i = 0; i < word.length; i++) {
        var start = word[i]
        // document.write(start) + "<br>"
    }

    for (var i = word.length - 1; i >= 0; i--) {
        var end = word[i]
        // document.write(end)
    }

    if (start = end) {
        document.write("<b>" + word + "</b>" + " is a palindrome")
    }
    else {
        document.write("<b>" + word + "</b>" + " is not palindrome")
    }
}

