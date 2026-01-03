// one.js

for (let i = 0; i <= 5; i++) {
  console.log(`value of i is ${i}`);
}

// break
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("detected 3");
    break;
  }
  console.log(i);
}

// continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("skipping 3");
    continue;
  }
  console.log(i);
}
