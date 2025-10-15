// ✅Task-01
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);  // "Bob"
  }
  let user = "Bob";
  inner();
}

outer();


// ✅Task-02
let total = 0;   
function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total); // total variable Value depends on  function scope because it's global Variable and it is using inside Function.


// ✅Task-03
function parent(){
    let num2=10;
    function child(){
        console.log(num2)
    }
    child()
}
parent()


// ✅Task-04
function lopp(){
  for (let i = 0; i < 5; i++) {
    let num1 = 50;
  }
  // console.log(num1)  ReferenceError: num1 is not defined . We can't Access.
}
lopp()  


// ✅Task-05
function boss(){
    let power=2;
}
function worker(){
// console.log(power)  ReferenceError: power is not defined
}

worker()


// ✅Task-06
// console.log(a);  ReferenceError: Cannot access 'a' before initialization because Temporal Dead Zone
let a = 10;


// ✅Task-07
function showAge() {
    let age = 25;
    console.log(age);  
}

// console.log(age);  Age Variable Access Only inside showAge


// ✅Task-08
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
// ⬇️ Output: "Hi". Because of Lexical Scope


// ✅Task-09
let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer();
// ⬇️ Output: "Inner". Because of Lexical Scope


// ✅Task-10
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();

// ⬇️ Output: "-1 & -2". 