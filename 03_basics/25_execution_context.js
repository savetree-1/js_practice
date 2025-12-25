// 25_execution_context.js

// Global Execution Context

let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
  let tot = num1 + num2;
  return tot;
}

let res1 = addNum(val1, val2);
let res2 = addNum(10, 2);

console.log(res1);
console.log(res2);

/*
Execution steps (conceptual):

1. Global Execution Context created
2. Memory Phase
   - val1 -> undefined
   - val2 -> undefined
   - addNum -> function definition
   - res1 -> undefined
   - res2 -> undefined

3. Execution Phase
   - val1 = 10
   - val2 = 5
   - res1 = addNum(10,5)
   - res2 = addNum(10,2)

Each function call creates a new execution context
Stack follows LIFO order
*/
