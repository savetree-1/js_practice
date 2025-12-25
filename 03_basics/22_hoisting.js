// 22_hoisting.js

// scope levels
let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  console.log("INNER a:", a);
}

// console.log(b); // not accessible
console.log("OUTER a:", a);

// nested scope
function one() {
  const user = "Ankush";

  function two() {
    const web = "youtube";
    console.log(user);
  }

  two();
}

one();

// hoisting example
console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

// function expression hoisting
// addTwo(5); // error
const addTwo = function (num) {
  return num + 2;
};
