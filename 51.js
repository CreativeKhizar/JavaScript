// Default parameters

// Before ES6 like this it is handled

function addTwo(a,b){
    if(typeof b=="undefined")
    {
        b=1;
    }
    return a+b;
}

const ans=addTwo(4);
console.log(ans);

// Now 

function uAddTwo(a=0,b=0){
    return a+b;
}

const ans2=uAddTwo(4,8);
console.log(ans2);