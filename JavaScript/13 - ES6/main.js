// ECMASCRIPT Codes

let numbers = [1, 2, 3, 4, 5];
for (let index = 0; index < numbers.length; index++) {
  // console.log(numbers[index]);
}

for (let el of numbers) {
  // console.log(el);
}

let courses = { one: "HTML", two: "CSS", three: "JavaSxript" };

for (let v in courses) {
  // console.log(v);
}

let projectCount = [8, 10, 10, 8, 5, 2, 1, 5, 8];

let total = 0;
for (count of projectCount) {
  if (count >= 8) {
    total++;
  }
}

// console.log(`Certified: ${total}`);

// for ... of
// for ... in

// functions in es6
function testVar() {
  let x = 10;
  if (true) {
    let x = 20;
    // console.log(x);
  }
  // console.log(x);
}
testVar();

const sum1 = (x, y) => {
  return x + y;
};

let greet = () => "Hello developer";
// function greet() {
//   return "Hello developer";
// }

// console.log(greet());

var arr = [2, 3, 5, 7];

for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i] ** 2);
}

arr.forEach(function (el) {
  // console.log(el ** 2);
});

arr.forEach((el) => {
  // console.log(el ** 2);
});

// function test(a, b = 3, c = 5) {
//   return a + b + c;
// }

const test = (a, b = 3, c = 5) => {
  return a + b + c;
};

// console.log(test(2));

let name = "Developer";
let welcome = `Hello ${name}`;
let javascript = "Hello" + " " + name;
// console.log(welcome);

// OBJECTS ES6
let Person = {
  name: "Georges",
  age: 10,
  status() {
    return true;
  },
};

let Student = {
  name: "Student",
  age: 15,
  height: 5.2,
};

let newStudent = Object.assign({}, Student, Person, { isBright: true });

newStudent.name = "JavaScript";

console.log(newStudent);

console.log(Person.status());

var age = { a: 5, a: 12, a: 10 };
console.log(age);

let username = "name";
let id = "101";
let mobile = "70000";

let User = {
  [username]: "Georges",
  [`user_${id}`]: `${mobile}`,
};

console.log(User["user_101"]);
