//✅ Task-01
let number=11;
let result1=number%2==0?"even number":"odd number"

console.log(result1)

//✅ Task-02
let age=7;
let result2 = (age) >=
  18
    ? "eligible to get a driving license"
    : "not eligible to get a driving license";

console.log(result2)

//✅ Task-03
let monthlySalary=12300
let annualSalary=(monthlySalary*12)
let bonus=annualSalary*0.2

console.log(annualSalary+bonus);

//✅ Task-04
let color="Green"
let traveller = color == "Red" ? "needs to STOP" : "needs to Go";

console.log(traveller)

//✅ Task-05
let units=5;
let unitCost=150;
let monthlyBill=5*150*30;

let annualBill=monthlyBill*12;
let discount=annualBill*0.2;

console.log(`Monthly Bill is ${monthlyBill} Rupees`);
console.log(`Annual Bill is ${annualBill-discount} Rupees`);

//✅ Task-06
let year=2025
let isLeapYear=year%400==0 || (year%4==0 && year%100!=0) ? "Leap Year" :"Not Leap Year"

console.log(isLeapYear)

//✅ Task-07
let p=10;
let q=15;
let r=5;

if(p>q && p>r) console.log("p is maximum Number")
else if(p<q && q>r) console.log("q is maximum Number")
else  console.log("r is maximun Number")