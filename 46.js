// arrow functions

const singHappyBirthday2=function(){
    console.log("happy birthday to you ....");
}
// arrrow function
const singleHappyBirthday=()=>{
    console.log("happy birthday to you ...");
}
singleHappyBirthday();

const sumThreeNumbers=function(number1,number2,number3){
    return number1+number2+number3;
}
const sumThreeNumbers2=(number1,number2,number3)=>{
    return number1+number2+number3;
}

console.log(sumThreeNumbers2(1,2,3));

const isEven2=function(number){
    return number%2==0;
}

const isEven = number=> number%2==0; // for one parameter no need 

console.log(isEven(4));

const firstChar = anyString=>anyString[0];

console.log(firstChar("harishith"));

const findTarget2=(array,target)=>{
    for(let i=0;i<array.length;i++)
    {
        if(array[i]==target){
            return i;
        }
        return -1;
    }
}

