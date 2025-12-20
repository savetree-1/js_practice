// 10_stack_heap.js
// Stack and Heap Memory in JavaScript

// STACK (Primitive types → copy of value)
let myName = "Ankush";
let anotherName = myName;

anotherName = "Rahul";

console.log(myName);        // Ankush
console.log(anotherName);  // Rahul

// HEAP (Non-Primitive → reference)
let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl"
};

let userTwo = userOne;

userTwo.email = "ankush@gmail.com";

console.log(userOne.email); // ankush@gmail.com
console.log(userTwo.email); // ankush@gmail.com
