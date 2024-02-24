// FUNCTIONS JS

function kitchen(meals, price) {
  console.log("Welcome to the coding kitchen");
  console.log("We prepare " + meals + " that costs $" + price);
}

// kitchen("fish meal", 10);
// kitchen("pasta meal", 3);
// kitchen("burger meal", 5);

function sum(num1, num2) {
  let result = `Sum of ${num1} and ${num2} = ` + (num1 + num2);
  return result;
}

// console.log(sum(1, 9));

// EXPLORE Functions
// ARROW functions

const chopMeat = (meat) => `Chopped ${meat} ready for cooking`;

// console.log(chopMeat("steak"));

// EXPRESSIONS fx
let prepareTea = function (water, milk) {
  return `My tea is full of ${milk} and ${water}`;
};

// console.log(prepareTea("water", "milk"));

// IIFE fx
// (function () {
//   console.log("My Immediately Invoked Function");
// })();

// CLOSURES fx
function chopPepper(pepper) {
  return function () {
    return `${pepper} is chopped`;
  };
}

const addChillies = chopPepper("Green pepper");
// console.log(addChillies());

// HOAF fx

const withSauce = (sauce) => (dish) => `Serving ${dish} with ${sauce}`;

// console.log(withSauce("tomato sauce")("french fries"));

// CALLBACK fx
function bakeCake(flavor, callback) {
  console.log(`Baking a ${flavor} cake`);
  callback();
}

bakeCake("black forest", () => {
  console.log("THe cake is ready");
});
