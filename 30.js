// for loop in array

let fruits = ["apple","mango","grapes","banana"];

console.log(fruits.length);

console.log(fruits[fruits.length-1]);
console.log("Printing array elements by for loop");
for(let i=0;i<=fruits.length-1;i++){
    console.log(fruits[i]);
}

// Printing in toUpperCase

let fruits2=[]
for(let i=0;i<=fruits.length-1;i++){
    fruits2.push(fruits[i].toUpperCase());
}
console.log(fruits2);

