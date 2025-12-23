// 16_objects.js

const sym = Symbol("key1");

const usr = {
  nam: "Ankush",
  age: 20,
  loc: "India",
  ema: "ankush@gmail.com",
  log: false,
  las: ["Monday", "Saturday"],
  [sym]: "myKey1"
};

// access
console.log(usr.nam);
console.log(usr["ema"]);
console.log(usr[sym]);

// modify
usr.ema = "ankush@google.com";

// freeze
Object.freeze(usr);
usr.ema = "ankush@microsoft.com";

console.log(usr);

// functions in object
usr.greet = function () {
  console.log("Hello JS user");
};

usr.greetTwo = function () {
  console.log(`Hello JS user, ${this.nam}`);
};

console.log(usr.greet());
console.log(usr.greetTwo());
