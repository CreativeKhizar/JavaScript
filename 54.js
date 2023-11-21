// call back functions
// We can access parameters as function

function myFunc2(name){
    console.log("Inside my func");
    console.log(`Your Name is ${name}`);
}

function myFunct(a){
    // console.log(a);
    a("harshit");    // This is callback
}

myFunct(myFunc2);
