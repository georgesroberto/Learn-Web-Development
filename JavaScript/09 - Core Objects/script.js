// Arrays
// * create
// * properties and methods
// * types

// let course1 = "HTML";
// let course2 = "CSS";
// let course3 = "JS";

let courses = ["HTML", "CSS", "JS"];

// console.log(courses[0]);
// console.log(courses[1]);
// console.log(courses[2]);

courses[2] = "JAVASCRIPT";
courses[3] = "REACT";

// console.log(courses);

let instructors = new Array("Dan", "Georges");

// console.log(instructors[0]);
instructors[0] = "Daniel";

let info = courses.concat(instructors);

// console.log(info.length);

let newArray = info.slice(3, 5);

// console.log(newArray);
// console.log(info);

courses.push(...newArray);
// console.log(courses.length);

// ASSOCIATIVE ARRAYS(NAMED)

let car = [];

car["brand"] = "AUDI";
car["model"] = "GMT5";
car["price"] = 400000;

// console.log(car);

// OBJECTS IN JS

let randomNumber = Math.random();

randomNumber = Math.round(randomNumber);

let squareRoot = Math.sqrt(81);

// console.log(squareRoot);

//

let myDate = Date.now();

console.log(myDate);

let instanceDate = new Date();

var currentTime = `Month: ${instanceDate.getMonth()} Day: ${instanceDate.getDay()} Hour: ${instanceDate.getHours()} Minutes: ${instanceDate.getMinutes()} `;

console.log(instanceDate);

console.log(currentTime);
