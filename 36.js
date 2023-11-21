// Objects  Reference type
//arrays are good but not sufficient
// for real world
// objects store key value pairs
// objects don't have index

// how to create objects
// value is also known as object literal

const person={
    name:"Harshith",
    age:22,
    hobbies:["guitar","sleeping","listening music"]
};

console.log(person);
console.log(typeof person);

// To access object values we use dot
// operator

console.log(person.name);

// keys(name,age) are properties of object person

console.log(person.hobbies);

//  How to add a key value pair to Object.

person.gender="male";
console.log(person);

// Another way to print object keys

console.log(person["name"]);
console.log(person["age"]);
console.log(person["hobbies"]);

// By Default the key in object is in
// String datatype

// How to add by Bracket Notation

person["person"]="male";