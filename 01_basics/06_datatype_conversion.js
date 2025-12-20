// 06_datatype_conversion.js
// Datatype Conversion Confusion

let score = "33";

// Convert string to number
let valueInNumber = Number(score);

console.log(typeof score);          // string
console.log(typeof valueInNumber);  // number
console.log(valueInNumber);         // 33

// What if conversion fails?
let score2 = "33abc";
let valueInNumber2 = Number(score2);

console.log(valueInNumber2);        // NaN
console.log(typeof valueInNumber2); // number (NaN is a number)

// null conversion
let score3 = null;
console.log(Number(score3));        // 0

// undefined conversion
let score4 = undefined;
console.log(Number(score4));        // NaN

// boolean conversion
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn);     // true

// Boolean conversion rules
// 1 => true
// 0 => false
// "" => false
// "ankush" => true

// string conversion
let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);          // "33"
console.log(typeof stringNumber);   // string
