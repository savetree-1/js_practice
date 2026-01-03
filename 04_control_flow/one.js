// one.js

const tem = 41;

if (tem < 50) {
  console.log("temperature is less than 50");
} else {
  console.log("temperature is greater than 50");
}

const sco = 200;

if (sco > 100) {
  const pow = "fly";
  console.log(`user power: ${pow}`);
}

// comparison operators
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);

// logical operators
const usr = true;
const deb = false;

if (usr && deb) {
  console.log("allow access");
}

if (usr || deb) {
  console.log("logged in");
}
