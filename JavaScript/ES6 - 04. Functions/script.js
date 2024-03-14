let greetUser = (user = "Guest") => {
  return `Welcome, ${user}`;
};

// console.log(greetUser("Georges"));

for (let index = 0; index < 3; index++) {
  // console.log(`Loop ${index}`);
}

function* countDown() {
  let index = 0;
  while (index < 3) {
    yield index;
    index++;
  }
}

let fib = fibonacci();

function* fibonacci() {
  let a = 0,
    b = 1;
  while (a <= 55) {
    yield a;
    [a, b] = [b, a + b];
  }
}

console.log(`Fibonacci: `, fib.next().value);
console.log(`Fibonacci: `, fib.next().value);
console.log(`Fibonacci: `, fib.next().value);
console.log(`Fibonacci: `, fib.next().value);
console.log(`Fibonacci: `, fib.next().value);
console.log(`Fibonacci: `, fib.next().value);
console.log(`Fibonacci: `, fib.next().value);
console.log(`Fibonacci: `, fib.next().value);
console.log(`Fibonacci: `, fib.next().value);
console.log(`Fibonacci: `, fib.next().value);
console.log(`Fibonacci: `, fib.next().value);

// FIBONACCI

/**
 * DEFULT B = 1
 *
 * FIB NO. IS A SUM OF PREVIOUS SEQ NUMBER
 *
 * LOOP TO OUTPUT DEFAULT VALUES
 *
 * SWAP A WITH B
 *AULT = 0
 * DEFA
 * INCREKENT B AS IN A + b
 */

// num.toString();

// modules
