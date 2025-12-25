// 21_scope.js

let a = 10;
const b = 20;
var c = 30;

if (true) {
  let a = 100;
  const b = 200;
  var c = 300;

  console.log("INNER a:", a);
  console.log("INNER b:", b);
  console.log("INNER c:", c);
}

console.log("OUTER a:", a);
console.log("OUTER b:", b);
console.log("OUTER c:", c);

// scope with functions
function one() {
  const user = "Ankush";

  function two() {
    const web = "youtube";
    console.log(user);
  }

  two();
}

one();

// hoisting
console.log(addOne(5));

function addOne(num) {
  return num + 1;
}

// function expression hoisting
// addTwo(5); // error
const addTwo = function (num) {
  return num + 2;
};
