// 08_comparison.js
// Comparison of datatypes in JavaScript

// Simple comparisons
console.log(2 > 1);   // true
console.log(2 >= 1);  // true
console.log(2 < 1);   // false
console.log(2 == 1);  // false
console.log(2 != 1);  // true

// String comparison
console.log("2" > 1); // true (string converted to number)
console.log("02" > 1); // true

// Equality check
console.log("2" == 2);  // true (type conversion happens)
console.log("2" === 2); // false (strict check, no conversion)

// null comparisons (VERY IMPORTANT)
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true (null converted to 0)

// undefined comparisons
console.log(undefined > 0);  // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// Special case
console.log(null == undefined);  // true
console.log(null === undefined); // false

// Rule:
// Avoid these confusing comparisons
// Always use === instead of ==
