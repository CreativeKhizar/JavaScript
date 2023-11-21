// for of loop in array

const fruits = ["apple","mango","grapes","fruit4","fruit5"];
const fruits2=[];

for(let fruit of fruits)
{
    console.log(fruit);
    fruits2.push(fruit.toUpperCase());
}

// A for of loop works like for loop
// Array names are written in plural

console.log(fruits2);
