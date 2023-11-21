//  function returing function


function myFunc(){
    return function(){
        return "hello world";
    }
    return hello;
}

const ans=myFunc();
console.log(ans);
console.log(ans());

/*
if function accepting input or returing output
is called Higher Order Function
*/