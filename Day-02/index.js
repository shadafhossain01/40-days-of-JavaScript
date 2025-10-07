let personName="Shadaf"
let age=21
let isStudent =true 
let favoriteProgrammingLanguage="JavaScript"

console.log(
  `My Name is ${personName} and My favourite Language is ${favoriteProgrammingLanguage}`
);

// let personName="Rahim"   ==> SyntaxError: Identifier 'personName' has already been declared
console.log(personName)

const number=25;
// const number=01;         ==> SyntaxError: Identifier 'number' has already been declared
// const people;            ==> SyntaxError: Missing initializer in const declaration
// number=01;              ==> Assignment to constant variable.
console.log(number);

const arr=[1,2,3,4,5]

const obj={
    personName:"Shadaf",
    age:21,
    isStudent:true
}
console.log(obj)