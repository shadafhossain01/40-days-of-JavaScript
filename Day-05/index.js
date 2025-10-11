// Task-01
const rows = 5;

for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line);
}

// task-02
let N = 3;

for (let i = 1; i <= 10; i++) {
  console.log(`${N}X${i}=${N * i}`);
}

// task-03
let sum = 0;

for (let i = 0; i <= 500; i++) {
  if (i % 2 == 0) continue;
  sum += i;
}

console.log(sum);

// task-04
for (let i = 0; i <= 20; i++) {
  if (i % 3 == 0) continue;
  console.log(i)
}

// task-05
let num = 6789;
let reversed = 0;

while (num > 0) {
  let digit = num % 10;            
  reversed = reversed * 10 + digit; 
  num = Math.floor(num / 10);     
}

console.log(reversed);   

// task-06

//🔹 1.for Loop
// Structure:
for (initialization; condition; increment/decrement) {
  // code block
}

// How it works:
// Initialize a variable
// then Check condition 
// If Condition true → execute the code
// Increment or decrement (i++)
// Repeat until condition becomes false

//🔹 2.while Loop
//Structure:
while (condition) {
  // code block
}

/* How it works:
Check the condition first
If true → execute the code block
Then go back and check condition again
Stop when condition becomes false*/

//🔹 3.do-while Loop
// Structure:
do {
  // code block
} while (condition);

/*How it works:
Executes the code at least once
Then checks the condition
If condition is true → repeats the loop*/

// for loop → When you know exactly how many times to repeat.
// while loop → When you repeat until something happens.
// do-while loop → When you must run at least once.