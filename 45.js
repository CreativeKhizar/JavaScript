// function expression assigning function to a variable

const singHappyBirthday2=function(){
    console.log("happy birthday to you ....");
}
singHappyBirthday2();

const sumThreeNumbers=function(number1,number2,number3){
    return number1+number2+number3;
}

const isEven2=function(number){
    return number%2==0;
}

const findTarget2=function(array,target){
    for(let i=0;i<array.length;i++)
    {
        if(array[i]==target){
            return i;
        }
        return -1;
    }
}

// These are Anonymous Functions