// Print counting from 1-100 using nested for loop

for (let i = 1; i <= 100; i += 10) {
    document.write(i +" ")
    for (let j = i + 1; j < i + 10; j++) {
        document.write(j + " ")
    }
    document.write("<br>")
}