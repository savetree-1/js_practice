// four.js

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const str = "Ankush";
for (const ch of str) {
  console.log(ch);
}

// Map
const map = new Map();
map.set("IN", "India");
map.set("US", "USA");

for (const [key, val] of map) {
  console.log(key, ":-", val);
}
