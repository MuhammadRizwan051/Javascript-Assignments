

// Loop through array and check user define value a/c to array value in case sensitive way





// var city = prompt("What is your City Name?");
// var arr = ["Karachi", "Lahore", "Multan", "Sarghoda", "Hyderabad"]

// var cap = city.slice(0, 1).toUpperCase()
// var sm = city.slice(1).toLowerCase()
// var cityName = cap + sm;

// for (let i = 0; i < arr.length; i++) {
//     if (cityName === arr[i]) {
//         document.write(arr[i] + "<br>")
//         break;
//     }
//     else{
//         document.write("City not Found")
//         break;
//     }
// }








var teams = ["Afghanistan", "England", "Pakistan", "Bangladesh", "India", "Srilanka"];

for (var i = 0; i < teams.length; i++) {

    if (teams[i] === "Pakistan") {
        document.write(teams[i] + " match jeet gaya");
        break
    }
    else{
        document.write("India match harey ga");
        break
    }
}
