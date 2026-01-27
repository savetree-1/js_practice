// nine.js

const num = [1, 2, 3, 4, 5];

// map
const mapRes = num.map((n) => n * 10);
console.log(mapRes);

// chaining
const chain = num
  .map((n) => n * 10)
  .map((n) => n + 1)
  .filter((n) => n > 40);

console.log(chain);

// reduce
const red = num.reduce((acc, cur) => acc + cur, 0);
console.log(red);

// real example
const cart = [
  { item: "js course", price: 299 },
  { item: "py course", price: 399 },
  { item: "cpp course", price: 199 }
];

const total = cart.reduce((acc, item) => acc + item.price, 0);
console.log(total);
