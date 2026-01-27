// six.js

const arr = ["js", "py", "cpp"];

arr.forEach(function (val) {
  console.log(val);
});

arr.forEach((item) => {
  console.log(item);
});

function printMe(item) {
  console.log(item);
}

arr.forEach(printMe);

// array of objects
const lan = [
  { nam: "javascript", ext: "js" },
  { nam: "python", ext: "py" },
  { nam: "cpp", ext: "cpp" }
];

lan.forEach((item) => {
  console.log(item.nam);
});

