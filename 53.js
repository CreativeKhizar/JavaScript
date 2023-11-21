// Parameter Destructuring

//object
// used mostly in React

const person = {
    firstName: "harshit",
    gender: "male"
}

function printDetails({firstName,gender}){
    console.log(firstName);
    console.log(gender);
}

printDetails(person);