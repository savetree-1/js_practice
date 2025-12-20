// 09_datatypes_summary.js
// Datatypes summary in JavaScript

// Primitive Datatypes (Call by Value)
let score = 100;               // number
let scoreValue = 100.3;        // number
let isLoggedIn = false;        // boolean
let outsideTemp = null;       // null
let userEmail;                // undefined

let id = Symbol("123");
let anotherId = Symbol("123");

console.log(id === anotherId); // false (symbols are unique)

let bigNumber = 12345678901234567890n; // BigInt

// Non-Primitive (Reference Type)
const heros = ["shaktiman", "naagraj", "doga"]; // array

let myObj = {
  name: "Ankush",
  age: 21
};

const myFunction = function () {
  console.log("Hello World");
};

// typeof checks
console.log(typeof score);        // number
console.log(typeof isLoggedIn);   // boolean
console.log(typeof outsideTemp);  // object (JS bug)
console.log(typeof userEmail);    // undefined
console.log(typeof id);           // symbol
console.log(typeof bigNumber);    // bigint
console.log(typeof heros);        // object
console.log(typeof myObj);        // object
console.log(typeof myFunction);   // function
