// ✅ Task-01
{
  // Temporal Dead Zone শুরু হয়েছে
  console.log(a);  // ❌ ReferenceError
  console.log(b);  // ❌ ReferenceError
  console.log(c);  // ✅ undefined (because var is hoisted)

  let a = 10;
  const b = 20;
  var c = 30;
}
 

// ✅ Task-02

// 🟡 Variable Hoisting
console.log(x);    // ✅ undefined
// console.log(y);    ❌ ReferenceError
var x = 5;
let y = 10;

// 🟢 Function Hoisting
sayHi();    // ✅ Works even before function is defined

function sayHi() {
  console.log("Hello from Hoisting!");
}

// 🔴 Function Expression Hoisting
// greet();            ❌ Error: Cannot access 'greet' before initialization
const greet = function () {
  console.log("Hi!");
};
