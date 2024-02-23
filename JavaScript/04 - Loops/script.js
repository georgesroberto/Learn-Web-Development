// FOR LOOP

// when you how many iterations are needed

// for (initialization; condition; update){
//     // EXECUTE
// }

// let skipCount = 3;

// for (let initial = 1; initial <= skipCount; initial++) {
//   console.log("Skip count: " + initial);
// }

/**
 * Understanding the loop
 * initial = 0
 * * test if 0 <= 3
 * //logs to console
 * initial = 1
 * * test if 1 <= 3
 * //logs to console
 * initial = 2
 * * test if 2 <= 3
 * //logs to console
 * initial = 3
 * * test if 3 <= 3
 * //logs to the console
 *
 * initial = 4
 * * test if 4 <= 3 //false->breaks;
 */

// WHILE LOOP

// while (condition) {
//     // code to be executed
// }

// let count = 3;
// while (count > 0) {
//   console.log("Count = " + count);
//   count--;
// }

// UNDERSTANGING WHILE LOOP
/**
 * Count = 3
 * * if 3 > 0 //true
 * //logs to the console
 * count-- = 2
 *
 * Count = 2
 * * if 2 > 0 //true
 * //logs to the console
 * count-- = 1
 *
 * Count = 1
 * * if 1 > 0 //true
 * //logs to the console
 * count-- = 0
 *
 * Count = 0
 * * if 0 > 0 //false
 * break;
 *
 *  */

// DOWHILE LOOP

// do {
//   //executable code
// } while (condition);

let x = 0;

do {
  console.log("Value of x = ", x);
  x++;
} while (x < 3);

// UNDERSTANGING do...while

/**
 * // logs 0 to console
 * x = 1
 * * if 1 < 3//true
 *
 * // logs 1 to console
 * x = 2
 * * if 2 < 3//true
 *
 * // logs 2 to console
 * x = 3
 * * if 3 < 3//false
 * break;
 */
