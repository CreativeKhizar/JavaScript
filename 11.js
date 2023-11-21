//  undefined
//  null

let firstName;
console.log(typeof firstName);
firstName="Harshit";
console.log(typeof firstName,firstName);

// null means nothing

let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable);
myVariable="harshit";
console.log(myVariable,typeof myVariable);
// object is a reference datatype
// This is a bug in JavaScript 
// that if you use typeof null then it gets
// object

// BigInt
// It is a recent datatype

let myNumber = BigInt(12);
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber);

// Another way of big int

let sameMyNumber=123n;
console.log(myNumber+ sameMyNumber);

// You cannot add a bigint and int 

