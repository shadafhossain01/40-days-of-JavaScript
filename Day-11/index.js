// ✅ Task-01
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);  //1
  };
}
const counter1 = outer();
counter1();  //1
counter1();  //2


// ✅ Task-02
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()()); //100


// ✅ Task-03
function createButtonWithCounter() {
  let count = 0;
  const button = document.querySelector("#btn");

  button.addEventListener("click", function () {
    count++; 
    console.log(`Button clicked ${count} times`);
  });

}
createButtonWithCounter();


// ✅ Task-04
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15


/*  ✅ Task-05
What happens if a closure references an object?
- 1) The object is garbage collected immediately
- 2) The object remains in memory as long as the closure exists ✅
- 3) The object is automatically cloned
- 4) None of the Above.  
*/


//  ✅ Task-06
function createCounter() {
  let count = 0; 

  return {
    increment: function() {
      count++;
      console.log("Count:", count);
    },
    decrement: function() {
      count--;
      console.log("Count:", count);
    },
    reset: function() {
      count = 0;
      console.log("Count reset to 0");
    },
    getValue: function() {
      return count;
    }
  };
}

const counter = createCounter();

counter.increment();   // Count: 1
counter.increment();   // Count: 2
counter.decrement();   // Count: 1
console.log(counter.getValue());  // 1
counter.reset();       // Count reset to 0
