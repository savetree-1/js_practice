// 04_variables.js

// const → value cannot be changed
const accountId = 144553;
// accountId = 2222;  // Not allowed (will give error)

// let → value can be changed (block scoped)
let accountEmail = "ankush@gmail.com";
accountEmail = "ankush@outlook.com";

// var → old way (function scoped)  avoid using
var accountPassword = "12345";
accountPassword = "67890";

// JS also allows declaring variable without keyword ( bad practice)
accountCity = "Delhi";

// let declared but not initialized → value is undefined
let accountState;

// Printing values
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState);

// Better way to print multiple values
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
]);
