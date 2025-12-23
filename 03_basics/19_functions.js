// 19_functions.js

function sayMyName() {
  console.log("A");
  console.log("n");
  console.log("k");
  console.log("u");
  console.log("s");
  console.log("h");
}

sayMyName();

// parameters & arguments
function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

addTwoNumbers(3, 4);
addTwoNumbers(3, "4");
addTwoNumbers(3, null);

// return
function addNumbers(num1, num2) {
  return num1 + num2;
}

const res = addNumbers(5, 7);
console.log(res);

// default parameters
function loginUserMessage(username = "Ankush") {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("Ankush"));
console.log(loginUserMessage());

// rest operator
function calculateCartPrice(...num) {
  return num;
}

console.log(calculateCartPrice(200, 400, 600));

// object as parameter
const usr = {
  nam: "Ankush",
  pri: 199
};

function handleObject(anyObj) {
  console.log(`Username is ${anyObj.nam} and price is ${anyObj.pri}`);
}

handleObject(usr);

// array as parameter
const arr = [200, 400, 600];

function returnSecondValue(getArr) {
  return getArr[1];
}

console.log(returnSecondValue(arr));
