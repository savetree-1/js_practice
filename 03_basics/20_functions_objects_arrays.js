// 20_functions_objects_arrays.js

// function declaration
function addOne(num) {
  return num + 1;
}

console.log(addOne(5));

// function expression
const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));

// scope difference
console.log(addOne(10));
// console.log(addTwo(10)); // hoisting difference

// nested function
function one() {
  const user = "Ankush";

  function two() {
    const web = "youtube";
    console.log(user);
  }

  two();
}

one();

// block scope
if (true) {
  const user = "Ankush";
  if (user === "Ankush") {
    const web = " youtube";
    console.log(user + web);
  }
}

// arrow function
const addThree = (num1, num2, num3) => {
  return num1 + num2 + num3;
};

console.log(addThree(1, 2, 3));

// implicit return
const addFour = (num1, num2) => num1 + num2;
console.log(addFour(2, 3));

// return object
const returnObj = () => ({ nam: "Ankush" });
console.log(returnObj());
