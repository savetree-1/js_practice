// 15_arrays_part2.js

const mar = ["thor", "ironman", "spiderman"];
const dcv = ["superman", "flash", "batman"];

// push (adds array as element)
mar.push(dcv);
console.log(mar);
console.log(mar[3][1]);

// concat (returns new array)
const all1 = mar.concat(dcv);
console.log(all1);

// spread
const all2 = [...mar, ...dcv];
console.log(all2);

// flat
const ano = [1, 2, 3, [4, 5], 6, [7, [8, 9]]];
const real = ano.flat(Infinity);
console.log(real);

// array checks
console.log(Array.isArray("Ankush"));
console.log(Array.from("Ankush"));
console.log(Array.from({ name: "Ankush" })); // interesting case

// array of
let sc1 = 100;
let sc2 = 200;
let sc3 = 300;

console.log(Array.of(sc1, sc2, sc3));
