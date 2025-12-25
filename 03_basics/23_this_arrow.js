// 23_this_arrow.js

const usr = {
  nam: "Ankush",
  pri: 999,

  wel: function () {
    console.log(`${this.nam}, welcome to website`);
    console.log(this);
  }
};

usr.wel();
usr.nam = "Sam";
usr.wel();

// this in global scope
console.log(this);

// normal function
function one() {
  let nam = "Ankush";
  console.log(this.nam); // undefined
}

one();

// function expression
const two = function () {
  let nam = "Ankush";
  console.log(this.nam); // undefined
};

two();

// arrow function
const thr = () => {
  let nam = "Ankush";
  console.log(this);
};

thr();

// basic arrow
const add1 = (num1, num2) => {
  return num1 + num2;
};
console.log(add1(3, 4));

// implicit return
const add2 = (num1, num2) => num1 + num2;
console.log(add2(5, 5));

// return object
const add3 = () => ({ nam: "Ankush" });
console.log(add3());
