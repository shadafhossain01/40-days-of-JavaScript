// ✅ Task-01
 let day = "Monday";

 switch (day) {
   case "monday":
     console.log("It's the start of the week.");
     break;
   default:
     console.log("It's a normal day."); // Because Monday and monday isnot same, that's why it's print It's a normal day.
 }

 // ✅ Task-02
let withdrawAmount=100;
if(withdrawAmount%100==0) console.log("Withdrawal successful");
else console.log("Invalid amount");

 // ✅ Task-03
 let operator="/";
 let num1=20;
 let num2=40;

 switch (operator) {
   case "+":
     console.log(num1 + num2);
     break;
   case "-":
     console.log(num1 - num2);
     break;
   case "*":
     console.log(num1 * num2);
     break;
   case "/":
     console.log(num2 / num1);
     break;
   case "%":
     console.log(num2 % num1);
     break;
     default:
    console.log("Invalid Operator")
 }

  // ✅ Task-04
  let age=60;
  if(age<18) console.log("Ticket price is $3");
  else if(age>18 && age>=60) console.log("Ticket price is $10");
  else console.log("Ticket price is $8");

// ✅ Task-05
let birthMonth="March"

   switch(birthMonth){
    case "January" :
        console.log("Aquarius");
        break;
    case "February" :
        console.log("Pisces");
        break;
    case "March" :
        console.log("Aries");
        break;
    case "April" :
        console.log("Taurus");
        break;
    case "May" :
        console.log("Gemini");
        break;
    case "June" :
        console.log("Cancer");
        break;
    case "July" :
        console.log("Leo");
        break;
    case "Auguest" :
        console.log("Virgo");
        break;
    case "September" :
        console.log("Libra");
        break;
    case "October" :
        console.log("Scorpius");
        break;
    case "November" :
        console.log("Sagittarius");
        break;
    case "December" :
        console.log("Capricornus");
        break;
   }

 // ✅ Task-06
let a=10;
let b=10;
let c=20;

if(a==b && b==c) console.log("Equilateral Triangle");
else if(a==b || b==c || a==c) console.log("Isosceles Triangle");
else console.log("Scalene Triangle");