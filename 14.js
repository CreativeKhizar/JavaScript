// if else condition

let age = 17;

if(age>18){
    console.log("User can play ddlc");
}
else{
    console.log("User can play mario");
}

let num = 14;

if(num%2==0){
    console.log(num+" is Even");
}
else{
    console.log(num+" is odd");
}

// falsy values
/*
false
null
undefined
0
""
*/

let firstName=0;
if(firstName){
    console.log(firstName);
}else{
    console.log("first empty value hai");
}

// remaining all is truthy
firstName="1";

if(firstName){
    console.log(firstName);
}else{
    console.log("first empty value hai");
}