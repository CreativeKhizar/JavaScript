// array push pop

// array shift unshift

let fruits=["apple","mango","grapes"];

console.log(fruits);
// push
fruits.push("banana");
console.log(fruits);

//  Arrays are mutable

//  pop :- it remove last elements and returns

let poppedfruit=fruits.pop();
console.log(fruits);
console.log("popped fruit is ",poppedfruit);

// Unshift : - used to add element at 
//  the starting index 0

fruits.unshift("bananas");
console.log(fruits);

// shift : - used to remove element from
// starting

removedfruit=fruits.shift();
console.log(fruits);
console.log("Removed fruit is ",removedfruit);

/*
Push and pop are faster than
shift and unshift
*/