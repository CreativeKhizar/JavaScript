// Functions in JavaScript

function singHappyBirthday(){
    console.log("happy birthday to you ..........");
}

function twoPlusfour(){
    return 2+4;
}
function sumTwoNumbers(number1,number2){ // Parameter
    return number1+number2;
}
function sumThreeNumbers(number1,number2,number3){
    return number1+number2+number3;
}
// call = invoke
// dry -> Don't Repeat yourself.

let returnedValue=twoPlusfour();
console.log(returnedValue);

returnedValue= sumTwoNumbers(4,5);  // Argument
console.log(returnedValue);

returnedValue=sumThreeNumbers(2,3,5);
console.log(returnedValue);

// odd or even
// input : 1 number
// output : true if even else false
function isEven(number){
    return number%2==0;
}

console.log(isEven(2));
console.log(isEven(3));

// function
// input: string
// output: firstCharacter

function firstChar(anyString){
    return anyString[0];
}

console.log(firstChar("abc"));
console.log(firstChar("zbc"));

// function
// input: array, target (number)
// output: index of target if target present in array
// -1 if not found

function findTarget(array,target){
    for(let i=0;i<array.length;i++){
        if(array[i]==target){
            return i;
        }
    }
    return -1;
}


const myarray=[1,3,,8,90];
const ans=findTarget(myarray,4);
console.log(ans);



