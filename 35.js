// Array Destructuring

const myArray = ["value1","value2","value3","value4"];

let myvar1=myArray[0];
let myvar2=myArray[1];
console.log("Value of myvar1 ",myvar1);
console.log("Value of myvar2 ",myvar2);

// Both are same top and Bottom

let [myvar11, myvar12, myvar13]=myArray;

myvar11="Value changed";
console.log(myvar11);
console.log(myvar12);
console.log(myvar13);
/*
array 1st element goes to myvar1
array 2nd element goes to myvar2
array 3rd element goes to myvar3

remaining all varaibles gets undefined

*/

// Another way

let [var1, , var2]=myArray;
console.log(var1);
console.log(var2);

let myNewArray = myArray.slice(2);

console.log(myNewArray);

// Another way

let [variable1, varaible2, ...myNewArray2]=myArray;

console.log(myNewArray2);