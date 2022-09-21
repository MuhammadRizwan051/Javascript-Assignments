// Draw stars in ascending order

// * 
// * *
// * * *
// * * * *
// * * * * * 

for (let i = 1; i <= 5; i++) {
    document.write("* ")
    for (let j = 1; j < i; j++) {
    document.write("* ")
    }
    document.write("<br>")
}

document.write("<br><br><br>")



// Draw stars in descending order

// * * * * * 
// * * * *
// * * *
// * *
// * 

for (let i = 5; i >= 1; i--) {
    document.write("* ")
    for (let j = 1; j < i; j++) {
        document.write("* ")
    }
    document.write("<br>")
}

document.write("<br><br><br>")


// * 
// * * *
// * * * * * 
// * * * * * * * 

for (let i = 1; i <= 7; i=i+2) {
    document.write("* ")
    for (let j = 1; j < i; j++) {
        document.write("* ")
    }
    document.write("<br>")
}
