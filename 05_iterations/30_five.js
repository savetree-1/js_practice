// five.js

const obj = {
  js: "javascript",
  py: "python",
  cpp: "c++"
};

for (const key in obj) {
  console.log(`${key} shortcut is for ${obj[key]}`);
}

const arr = ["js", "py", "cpp"];
for (const key in arr) {
  console.log(arr[key]);
}
