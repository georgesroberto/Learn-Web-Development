// CONDITIONAL STATEMENTS

let smallestNumber = 10;
let middleNumber = 100;
let largestNumber = 1000;

// if (smallestNumber < largestNumber) {
//   //Code to be executed only if the condition is true
//   console.log("That is definitely true");
// } else {
//   console.log("That is definitely wrong");
// }

let raining = false;

// if (raining) {
//   console.log("Wear a heavy jacket");
// } else {
//   console.log("Wear a vest");
// }

let userInput = null;
userInput = prompt("INPUT WEATHER PATTERN: ");

let rain = "Raining";
let sun = "Sunny";
let calm = "Calm";

// rain

switch (userInput) {
  case "rain":
    console.log("RAINING CATS AND DOGS");
    break;

  case "sun":
    console.log("A very hot day");

  case "calm":
    console.log("A very calm day");
    break;

  default:
    console.log("I can't predict the weather");
    break;
}

// if (smallestNumber == largestNumber) {
//   console.log("Definitely true");
// } else {
//   console.log("Definitely false");
// }

// smallestNumber < largestNumber ? console.log("Definitely true")  : console.log("Definitely false");
