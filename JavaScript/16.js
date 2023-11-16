// and or operator

let firstName = "Harshith";
let age = 22;

if(firstName[0] === "h" && age>18)
{
    console.log("Name starts with H and above 18");
}
else{
    console.log("inside else");
}

if(firstName[0] === "h" || age>18)
{
    console.log("inside if");
}
else{
    console.log("inside else");
}