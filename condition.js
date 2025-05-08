// if else
// let age = 18;
// if (age >= 18) {
//     console.log("You are an adult.");
// }
// else {
//     console.log("You are a minor.");
// }

let score = 90;
if (score >= 90 && score <= 100) {
    console.log("Grade: A");
}
else if (score >= 80 && score < 90) {
    console.log("Grade: B");
}
else if (score >= 70 && score < 80) {
    console.log("Grade: C");
}
else if (score >= 60 && score < 70) {
    console.log("Grade: D");
}
else if (score >= 0 && score < 50) {
    console.log("Grade: F");
}
else {
    console.log("Invalid score");
}

// switch case
let day = 3;
let dayName;
switch (day){
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";    
}
console.log(dayName); // Wednesday

// ternary operator
let age =20;
let status = age >= 18 ? "Adult" : "Minor"; // condition // valueIfTrue : valueIfFalse;
console.log(status); // Adult

let marks = 70;
let grade = marks >= 90 ? "A": marks >= 80 ? "B": marks >= 70 ? "C": marks >= 60 ? "D": "F";
console.log(grade)


// vanila javascript means pure javascript or pure anything