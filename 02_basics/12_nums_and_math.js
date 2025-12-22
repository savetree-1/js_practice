// 12_nums_and_math.js

const sco = 400;
console.log(sco);

const bal = new Number(100);
console.log(bal);

console.log(bal.toString());
console.log(bal.toString().length);
console.log(bal.toFixed(2));

const oth = 123.8966;
console.log(oth.toPrecision(4));

const hun = 1000000;
console.log(hun.toLocaleString());
console.log(hun.toLocaleString('en-IN'));

// ================= Maths =================

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

// random
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
