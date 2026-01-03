// three.js

// truthy & falsy
const usr = "Ankush";

if (usr) {
  console.log("User exists");
} else {
  console.log("User does not exist");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

// check empty array
const arr = [];
if (arr.length === 0) {
  console.log("Array is empty");
}

// check empty object
const obj = {};
if (Object.keys(obj).length === 0) {
  console.log("Object is empty");
}

// nullish coalescing operator
let val1;
val1 = null ?? 10;
console.log(val1);

// ternary operator
const tea = 100;
tea >= 80 ? console.log("expensive") : console.log("cheap");
