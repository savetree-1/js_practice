// 11_strings.js

const nam = "Ankush";
const rep = 50;

// old way
console.log(nam + rep + " Value");

// modern way
console.log(`Hello my name is ${nam} and my repo count is ${rep}`);

// string object
const gam = new String("chai-aur-code");

// access
console.log(gam[0]);
console.log(gam.__proto__);

// length
console.log(gam.length);

// methods
console.log(gam.toUpperCase());
console.log(gam.toLowerCase());

// char methods
console.log(gam.charAt(2));
console.log(gam.indexOf("a"));

// substring
const sub1 = gam.substring(0, 4);
console.log(sub1);

// slice
const sub2 = gam.slice(-8, 4);
console.log(sub2);

// trim
const str1 = "   chai aur code   ";
console.log(str1.trim());

// replace
const url = "https://chai%20aur%20code.com";
console.log(url.replace("%20", "-"));

// includes
console.log(url.includes("chai"));
console.log(url.includes("Ankush"));

// split
console.log(gam.split("-"));
