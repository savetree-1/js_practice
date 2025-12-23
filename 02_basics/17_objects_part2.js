// 17_objects_part2.js

// singleton object
const tin = new Object();

// non-singleton
const reg = {};

tin.id = "123abc";
tin.nam = "Ankush";
tin.log = false;

console.log(tin);

// nested objects
const use = {
  ema: "ankush@gmail.com",
  ful: {
    usr: {
      fir: "Ankush",
      las: "Raw"
    }
  }
};

console.log(use.ful.usr.fir);

// combine objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const obj4 = { ...obj1, ...obj2 };
console.log(obj4);

// array of objects
const usr = [
  { id: 1, ema: "a@gmail.com" },
  { id: 2, ema: "b@gmail.com" },
  { id: 3, ema: "c@gmail.com" }
];

console.log(usr[1].ema);

// object methods
console.log(tin);
console.log(Object.keys(tin));
console.log(Object.values(tin));
console.log(Object.entries(tin));

console.log(tin.hasOwnProperty("log"));
