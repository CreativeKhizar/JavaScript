// spread operator

const array1=[1,2,3];
const array2=[5,6,7];

const newArray=[...array1,...array2,89,69];

console.log(newArray);

const samArray=[..."abc"];
console.log(samArray);

// Strings are iterable
// so it is divided.

// Spread Operator in Objects

const obj1 = {
    key1: "value1",
    key2: "value2",
    key1:"value1"
};
// Latest key value will be taken

console.log(obj1);

const obj2={
    key1:"valueunique",
    key3:"value3",
    key4:"value4"
};

const newObject = {...obj2,...obj1,key69:"value69"};
console.log(newObject);

// Thankyou Harshith Varshith Sir

// Spreading a string

const newobj = {..."abc"};
console.log(newobj);
// Here Index Number is key and value is value

const arrayobj={...["item1","item2"]}
console.log(arrayobj);

const charobj={..."abcdefghijklmnopqrstuvwxyz"};
console.log(charobj);

