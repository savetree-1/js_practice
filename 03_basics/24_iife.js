// 24_iife.js

// named IIFE
(function chai() {
  console.log("DB CONNECTED");
})();

// unnamed IIFE
(() => {
  console.log("DB CONNECTED TWO");
})();

// IIFE with parameter
((name) => {
  console.log(`DB CONNECTED THREE ${name}`);
})("Ankush");
