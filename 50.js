// block scope vs function scope

// let and const are block scope
// var is function scope

{
    let firstName="harshith";
    console.log(firstName);
}

{
    let firstName="mohith";
    console.log(firstName);
}

{
    const firstName="harshith";
    console.log(firstName);
}

{
    const firstName="mohith";
    console.log(firstName);
}

var firstName = "garima";
console.log(firstName);

{
    var firstName2="Harshith";
}

console.log(firstName2);

// var can be used in any function

{
    var firstName2="mohith"
    console.log(firstName2);
}

if(true){
    var firstName="harshith";
    console.log(firstName);
}

console.log(firstName);

function myApp(){
    if(true){
        let firstName="harshith";
        console.log(firstName);
    }
    if(true){
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();
