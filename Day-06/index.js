// ✅ Task-01 
function celsiusToFahrenheit(celcius){
let fahrenheit = (celcius * 9) / 5 + 32;
return fahrenheit
}

console.log(celsiusToFahrenheit(40));


// ✅ Task-02
function findMax(num1, num2){
    if(num1>num2){
        console.log("Num1 is the larger of the two numbers");
    }
    else if(num2>num1){
        console.log("Num2 is the larger of the two numbers");
    }
    else{
        console.log("Num2 and Num1 is Equal");
    }
}

findMax(-5,-50)


// ✅ Task-03
function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false; 
    }
    start++;
    end--;
  }

  return true; 
}

console.log(isPalindrome("madam")); 


// ✅ Task-04
function factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact*=i
    }
    console.log(fact)
}

factorial(4)


// ✅ Task-05
function countVowels(word) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("lovea"));


// ✅ Task-06
function capitalizeWords(sentence){
const newSentence=sentence.split(" ").map((item)=>item.charAt(0).toUpperCase()+item.slice(1)).join(" ")
console.log(newSentence);
}

capitalizeWords("i love bd");


// ✅ Task-07
(function iffe(arg) {
    console.log("Hello "+ arg)
}("JavaScript"));


// ✅ Task-08
function greet(name, callback){
    function callback(){
        console.log("Hello "+ name)
    }
    callback()
}

greet("Shadaf")


// ✅ Task-09
// Create Call Stack Execution Diagram:
function f1() {}
function f2() {
    f1();
}
f2();

/* Diagram is:
f1() execute first then
⬇️
f2() execute
*/


// ✅ Task-10
// Create Call Stack Execution Diagram:
function f1() {}
function f2() {}
function f3() {
  f1();
}
f2();
f3();
f1();

/* Diagram is:
f2() execute First then calStack will be empty
after that callStack wiil be:
f1()  execute and after that
⬇️
f3() will execute
*/