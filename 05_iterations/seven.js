// seven.js

const num = [1, 2, 3, 4, 5, 6];

const res = num.filter((n) => n > 4);
console.log(res);

// using forEach
const newNum = [];
num.forEach((n) => {
  if (n > 4) {
    newNum.push(n);
  }
});
console.log(newNum);

// objects filter
const books = [
  { title: "Book One", gen: "Fiction", pub: 1981 },
  { title: "Book Two", gen: "Science", pub: 2005 },
  { title: "Book Three", gen: "History", pub: 1995 }
];

const his = books.filter((bk) => bk.gen === "History");
console.log(his);
