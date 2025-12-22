// 13_dates.js

let dat = new Date();

// current date
console.log(dat);
console.log(dat.toString());
console.log(dat.toDateString());
console.log(dat.toISOString());
console.log(dat.toJSON());
console.log(dat.toLocaleString());

// type
console.log(typeof dat);

// specific date
let cre = new Date(2023, 0, 23);
console.log(cre.toDateString());

let cre2 = new Date(2023, 0, 23, 5, 3);
console.log(cre2.toLocaleString());

// yy-mm-dd
let cre3 = new Date("2023-01-14");
console.log(cre3.toLocaleString());

// mm-dd-yyyy
let cre4 = new Date("01-14-2023");
console.log(cre4.toLocaleString());

// timestamps
let tim = Date.now();
console.log(tim);
console.log(cre4.getTime());

// seconds
console.log(Math.floor(Date.now() / 1000));

// date methods
let newDat = new Date();
console.log(newDat.getMonth() + 1);
console.log(newDat.getDay());

// customize locale
newDat.toLocaleString('default', {
  weekday: "long",
});
