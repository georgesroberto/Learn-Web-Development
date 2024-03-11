// OBJECT DESTRUCTURE

let arr = ["1", "2", "3"];
var [one, two, three] = arr;

// console.log(one);

let myfunc = () => {
  return [4, 5, 6];
};

let [four, six, five] = myfunc();
console.log(five);

[six, five] = [five, six];

// console.log(five);

let objectMine = { objname: "Georges", objage: 10, objresults: true };

// console.log(objectMine.name);

let { objname, objage } = objectMine;

// console.log(objname);

// CLASSES IN JS
class Programmer {
  constructor(name, age, weight = 10) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }

  get greet() {
    return `Hello Programmer`;
  }

  static obesity(a, w) {
    const oa = a / w;
    return Math.round(oa);
  }

  yob() {
    return 2024 - this.age;
  }
}

// unnamed
let instructor = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};
// namwed
let instructors = class Tutors {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};

let tutor1 = new instructor("Georges", 10);
let tutor2 = new instructors("Dan", 10);

// console.log(tutor1.name);
// console.log(tutor2.name);

let std1 = new Programmer("Philip", 12);
let std2 = new Programmer("Brian", 12);
let std3 = new Programmer("Clinton", 12, 12.5);

// console.log(std3.weight);
// console.log(Programmer.obesity(10, 12));
// console.log(std3.yob());

// INHERITANCE,  OVERRIDING
class Person {
  constructor(name, age, status = true) {
    this.name = name;
    this.age = age;
    this.status = status;
  }

  bornYear() {
    return `Born in ${2024 - this.age}`;
  }
  greet() {
    return `Hello ${this.name}`;
  }
}

let Anne = new Person("Antoinnette", 9);

console.log(Anne.greet());

class User extends Person {
  constructor(name, age, status = false) {
    super(); // Call the superclass constructor
    this.name = name;
    this.age = age;
    this.status = status;
  }

  yearOfBirth() {
    return `${this.name} was born in ${2024 - this.age}`;
  }

  greet() {
    return `Welcome ${this.name}`;
  }
}

const Georges = new User("Georges", 10);
console.log(Georges.status);
console.log(Georges.greet());
console.log(Georges.bornYear()); // Output: "Born in 2014."
console.log(Georges.yearOfBirth()); // Output: "Georges was born
