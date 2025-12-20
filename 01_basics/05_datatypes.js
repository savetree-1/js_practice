// 05_datatypes.js
// Datatypes in JavaScript

"use strict"; // treat all JS code as newer version

// alert(3 + 3)  //  works in browser, not in Node.js

// Primitive Datatypes

let name = "Ankush";        // string
let age = 21;              // number
let isLoggedIn = false;     // boolean

let state;                 // undefined
let city = null;           // null (intentional empty value)

// Symbol (used for uniqueness)
let id = Symbol("123");
let anotherId = Symbol("123");

// BigInt
let bigNumber = 12345678901234567890n;

// Checking uniqueness of Symbol
console.log(id === anotherId); // false

// Non-Primitive Datatype

// object
let user = {
  name: "Ankush",
  age: 21
};

// typeof operator
console.log(typeof name);        // string
console.log(typeof age);         // number
console.log(typeof isLoggedIn);  // boolean
console.log(typeof state);       // undefined
console.log(typeof city);        // object (this is a JS bug)
console.log(typeof id);          // symbol
console.log(typeof bigNumber);   // bigint
console.log(typeof user);        // object
