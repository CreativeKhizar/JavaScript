// Rest Parameters

function myFunc(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}

myFunc(3,4,5,6,7,8,9,10);

/*
we can use rest parameter by ...
*/

function addAll(...numbers){
    let sum=0;
    for(let number of numbers){
        sum+=number;
    }
    return sum;
}
const sum=addAll(1,2,3,4,5,6,7,8,9);
console.log(`Sum is ${sum}`)