// Task-01 ✅
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");   // "Not provided"


// Task-02 ✅
const obj = Object.freeze({ a: 1 });
obj.a = 2;           // "Can't Update or modify when Object is frozen"
console.log(obj.a);   


// Task-03 ✅
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {name:personName,company:{name:companyName},company:{location:{city,zip}}}=person
console.log(city);


// Task-04 ✅
const student = {
  name: "Shadaf",
  age: 20,
  grades: [70, 40, 85, 80, 95],
  avg: function () {
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
  },
};
console.log(student.avg()); 


// Task-05 ✅
const bookStore = {
  books: {
    "Atomic Habits": { price: 450, stock: 5 },
    "Clean Code": { price: 800, stock: 0 },
    "Deep Work": { price: 600, stock: 3 },
  },

  checkAvailability: function (title) {
    const book = this.books[title];
    if (!book) {
      console.log("Book not found!");
      return;
    }
    if (book.stock > 0) {
      console.log(`✅ "${title}" is available. (${book.stock} in stock)`);
    } else {
      console.log(`❌ "${title}" is out of stock.`);
    }
  },

  restockBook: function (title, quantity) {
    const book = this.books[title];
    if (book) {
      book.stock += quantity;
      console.log(`🔄 Restocked "${title}". New stock: ${book.stock}`);
    } else {
      console.log(`⚠️ "${title}" not found in inventory.`);
    }
  },
};

bookStore.checkAvailability("Atomic Habits");


// Task-06 ✅
/*
Object.keys(obj) => Returns an array of the object’s own property names (keys)
Object.entries(obj) => Returns an array of key-value pairs, where each pair is an array [key, value].
*/


// Task-07 ✅
/*
How to check if an object has a certain property
1. Using hasOwnProperty()
2. Using the in operator
*/ 


// Task-08 ✅
const person1 = { name: "John" };
const newPerson = person1;
newPerson.name = "Doe";
console.log(person1.name); // "Doe"


// Task-09 ✅
// using structuredClone() method
const a = { a: 10, b: 40, c: { s: 7, x: 10 }, m: 70 };
const newObj2 = structuredClone(a);


// Task-10 ✅
const users = [
  { name: "Alex", address: "15th Park Avenue", age: 43 },
  { name: "Bob", address: "Canada", age: 53 },
  { name: "Carl", address: "Bangalore", age: 26 },
];

for (const { name, address, age } of users) {
  console.log(`Name: ${name}, Address: ${address}, Age: ${age}`);
}