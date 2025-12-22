// 14_arrays.js

const arr = [0, 1, 2, 3, 4, 5];
const her = ["shaktiman", "naagraj"];
const mix = new Array(1, 2, 3, 4);

// basic access
console.log(arr[0]);

// array methods
arr.push(6);
arr.push(7);
arr.pop();

arr.unshift(9);
arr.shift();

console.log(arr.includes(9));
console.log(arr.indexOf(3));

// join
const newArr = arr.join();
console.log(arr);
console.log(newArr);
console.log(typeof newArr);

// slice vs splice
const sli = arr.slice(1, 3);
console.log("slice", sli);
console.log("after slice", arr);

const spl = arr.splice(1, 3);
console.log("splice", spl);
console.log("after splice", arr);
