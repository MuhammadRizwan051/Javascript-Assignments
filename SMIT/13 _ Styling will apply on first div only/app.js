function heading() {
    var a = document.getElementById('first').getElementsByTagName('h1')
    for (var i = 0; i < a.length; i++) {
        a[i].style.color = 'red'
    }
}
function para() {
    var a = document.getElementById('first').getElementsByTagName('p')
    for (var i = 0; i < a.length; i++) {
        a[i].style.color = 'blue'
    }
}

function removeHeading() {
    var a = document.getElementById('first').getElementsByTagName('p')
    for (var i = 0; i < a.length; i++) {
        a[i].style.removeProperty('color')
    }
}


// function abc() {
//     const box = document.getElementById('box');

//     // ✅ Remove CSS properties
//     box.style.removeProperty('width');
//     box.style.removeProperty('height');
//     box.style.removeProperty('background-color');

//     // ✅ Set CSS Properties
//     // box.style.setProperty('background-color', 'salmon');
// }

