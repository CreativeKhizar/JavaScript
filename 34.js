//  for in loop

const fruits = ["apple","mango","grapes","fruits"];

const fruits2=[];

for(let index in fruits){
    console.log(fruits[index]);
    fruits2.push(fruits[index].toUpperCase());
}
console.log(fruits2);

// Normally for of loop and for in loop are used. 
