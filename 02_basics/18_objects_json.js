// 18_objects_json.js

// object destructuring
const cor = {
  nam: "Javascript",
  pri: "999",
  ins: "Ankush"
};

// normal access
console.log(cor.ins);

// destructuring
const { ins } = cor;
console.log(ins);

// rename while destructuring
const { ins: tea } = cor;
console.log(tea);

// JSON structure (object)
/*
{
  "name": "Ankush",
  "course": "JS",
  "price": "free"
}
*/

// JSON structure (array)
/*
[
  {},
  {},
  {}
]
*/
