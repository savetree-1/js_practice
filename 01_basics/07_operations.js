// 07_operations.js
// Why string to number causes confusion

let value = 3;
let negValue = -value;

console.log(negValue); // -3

// Basic arithmetic
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 / 2); // 1
console.log(2 ** 3); // 8 (power)
console.log(2 % 3); // 2 (remainder)

// String + Number confusion
let str1 = "hello";
let str2 = " world";

let str3 = str1 + str2;
console.log(str3); // hello world

// Mixed operations
console.log("1" + 2);     // "12"
console.log(1 + "2");     // "12"
console.log("1" + 2 + 2); // "122"
console.log(1 + 2 + "2"); // "32"

// Unary plus operator (forces number conversion)
console.log(+true);  // 1
console.log(+"");    // 0

// Increment operators
let gameCounter = 100;

// Postfix
gameCounter++;
console.log(gameCounter); // 101

// Prefix
++gameCounter;
console.log(gameCounter); // 102
