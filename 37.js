// dot notation vs bracket notation

const key="email";

const person={
    name:"Harshith",
    age:22,
    "person hobbies":["guitar","sleeping","listening music"]
};

// In JavaScript Spaces are not Allowed
//  Error console.log(perons.person hobbies);

console.log(person["person hobbies"]);

// For single word we use dot notation
// For a group of words we us bracket notation

person[key]="abc@gmali.com"; // correct way
console.log(person);

