//  intro to arrays
// Arrays are Reference type
// how to create arrays

// arrays are ordered collection of Items

let fruits = ["apple","mango","grapes"];
console.log(fruits[2]);

let numbers =[1,2,3,4];
console.log(numbers);

let mixed=[1,2,2.3,"string",null,undefined];
console.log(mixed);

// you can store any data type in array
// Arrays are mutable
console.log(fruits);
fruits[1]="banana";
console.log(fruits);

//  Reference types are known as Object

// arrays are objects in javascript

console.log(typeof fruits);
let obj={}  // object literal
// To know a object is array or not

console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));