// LOOPS + conditions

for (let score = 0; score <= 100; score = score += 20) {
  if (score >= 50) {
    console.log("Above average");
    continue;
  }

  console.log("Score = ", score);
}

// UNDERSTAND the code
/**
 *
 * score = 60
 * * if 60 <= 100 //for condition == true
 * * if 60 >= 50 //if condition == true
 * // // logs to console
 * //log 60 to console
 * score = 80
 *
 * score = 80
 * * if 80 <= 100 //true
 * * if 80 >= 50 //if condition == true
 * // // logs to console
 * //log 80 to console
 * score = 100
 *
 * score = 100
 * * if 100 <= 100 //true
 * * if 100 >= 50 //if condition == true
 * // // logs to console
 * //log 100 to console
 * score = 120
 *
 * score = 120
 * * if 120 <= 100 //false
 * break;
 * if will not be executed
 */
